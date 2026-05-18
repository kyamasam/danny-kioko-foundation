export interface BookSource {
  name: string;
  url: string;
}

export interface Book {
  id: number;
  title: string;
  short_description: string; // Rich text content
  price: number;
  sale_price: number;
  cover_page_url: string | null;
  images: string[] | null;
  sources: BookSource[];
  created_at: string;
}

export interface CreateBookInput {
  title: string;
  short_description?: string;
  price?: number;
  sale_price?: number;
  cover_page_url?: string;
  images?: string[];
  sources?: BookSource[];
}

export interface UpdateBookInput extends Partial<CreateBookInput> {
  id: number;
}
