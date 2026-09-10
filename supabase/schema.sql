-- ============================================================
-- Danny Kioko Foundation — Blog Schema
-- Run this in the Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new
-- ============================================================

-- 0. Schema
CREATE SCHEMA IF NOT EXISTS dk_foundation;

-- 1. Blogs table
CREATE TABLE IF NOT EXISTS dk_foundation.blogs (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title        TEXT NOT NULL,
  slug         TEXT NOT NULL UNIQUE,
  excerpt      TEXT,
  content      JSONB NOT NULL DEFAULT '{}',
  cover_image  TEXT,
  status       TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  author_name  TEXT NOT NULL DEFAULT 'DK Foundation',
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Auto-update updated_at on every row change
CREATE OR REPLACE FUNCTION dk_foundation.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER blogs_updated_at
  BEFORE UPDATE ON dk_foundation.blogs
  FOR EACH ROW EXECUTE FUNCTION dk_foundation.set_updated_at();

-- 3. Row Level Security
ALTER TABLE dk_foundation.blogs ENABLE ROW LEVEL SECURITY;

-- Anyone can read published posts
CREATE POLICY "public_read_published"
  ON dk_foundation.blogs FOR SELECT
  USING (status = 'published');

-- Authenticated users (your admin account) can do everything
CREATE POLICY "admin_all"
  ON dk_foundation.blogs FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- 4. Expose schema to the PostgREST API (required for non-public schemas)
-- Run once; requires a database restart or pg_reload_conf() to take effect:
-- GRANT USAGE ON SCHEMA dk_foundation TO anon, authenticated, service_role;
-- GRANT ALL ON ALL TABLES IN SCHEMA dk_foundation TO anon, authenticated, service_role;
-- GRANT ALL ON ALL SEQUENCES IN SCHEMA dk_foundation TO anon, authenticated, service_role;
-- (Supabase dashboard → Settings → API → "Exposed schemas" → add dk_foundation)

-- 5. Subscribers table
CREATE TABLE IF NOT EXISTS dk_foundation.subscribers (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email      TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE dk_foundation.subscribers ENABLE ROW LEVEL SECURITY;

-- Only authenticated admins can read subscribers
CREATE POLICY "admin_read_subscribers"
  ON dk_foundation.subscribers FOR SELECT
  USING (auth.role() = 'authenticated');

-- Anyone can insert (subscribe)
CREATE POLICY "public_insert_subscribers"
  ON dk_foundation.subscribers FOR INSERT
  WITH CHECK (true);

-- ============================================================
-- After running this SQL, also do these steps in the dashboard:
--
-- A. Expose the schema:
--    Go to Settings → API → Extra search path
--    Add: dk_foundation
--    OR go to Settings → API → Exposed schemas and add dk_foundation
--
-- B. Storage bucket:
--    Go to Storage → New bucket
--    Name: blog-images
--    Public bucket: ON (toggle it on)
--
-- C. Admin user:
--    Go to Authentication → Users → Add user
--    Enter your email and a strong password
--    This is the account you use to log in at /login
-- ============================================================
