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

create table if not exists dk_foundation.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  excerpt text,
  content jsonb not null default '{}',
  cover_image text,
  preview_images jsonb not null default '[]',
  cta_buttons jsonb not null default '[]',
  status text not null default 'draft' check (status in ('draft', 'published')),
  author_name text not null default 'DK Foundation',
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create trigger events_updated_at
  before update on dk_foundation.events
  for each row execute function dk_foundation.set_updated_at();

alter table dk_foundation.events enable row level security;

create policy "public_read_published_events"
  on dk_foundation.events for select
  using (status = 'published');

create policy "admin_all_events"
  on dk_foundation.events for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Hero Slides table
create table if not exists dk_foundation.hero_slides (
  id                 uuid primary key default gen_random_uuid(),
  label              text not null,
  label_accent_color text not null default '#21d0c3',
  heading            text not null,
  subheading         text not null,
  image_url          text not null,
  image_position     text not null default 'center',
  button_label       text not null default 'Learn More',
  button_url         text not null default '#',
  sort_order         integer not null default 0,
  status             text not null default 'draft' check (status in ('draft', 'published')),
  created_at         timestamptz not null default now(),
  updated_at         timestamptz not null default now()
);

create trigger hero_slides_updated_at
  before update on dk_foundation.hero_slides
  for each row execute function dk_foundation.set_updated_at();

alter table dk_foundation.hero_slides enable row level security;

create policy "public_read_published_slides"
  on dk_foundation.hero_slides for select
  using (status = 'published');

create policy "admin_all_slides"
  on dk_foundation.hero_slides for all
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

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
