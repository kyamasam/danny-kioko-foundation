export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  cover_image_url: string | null;
  read_time: number;
  is_free: boolean;
  is_published: boolean;
  slug: string;
  views?: number;
  created_at: string;
}

export interface CreateBlogInput {
  title: string;
  excerpt?: string;
  content?: string;
  cover_image_url?: string;
  read_time?: number;
  is_free?: boolean;
  is_published?: boolean;
  slug?: string;
}

export interface UpdateBlogInput extends Partial<CreateBlogInput> {
  slug: string;
}
