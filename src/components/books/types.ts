export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  sale_price: number;
  cover_page_url: string | null;
  images: string[] | null;
  created_at: string;
}

export interface CreateBookInput {
  title: string;
  author: string;
  price?: number;
  sale_price?: number;
  cover_page_url?: string;
  images?: string[];
}

export interface UpdateBookInput extends Partial<CreateBookInput> {
  id: number;
}
