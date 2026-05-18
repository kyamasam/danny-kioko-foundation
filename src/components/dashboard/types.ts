export type Page = "books" | "podcasts" | "blogs";

export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  status: "Reading" | "Finished" | "Queued";
  rating: number;
}

export interface Podcast {
  id: number;
  name: string;
  host: string;
  episodes: number;
  tag: string;
}

export interface Blog {
  id: number;
  title: string;
  status: "Published" | "Draft";
  date: string;
  reads: number;
}

export interface AddConfig {
  title: string;
  icon: React.ElementType;
  fields: {
    id: string;
    label: string;
    placeholder: string;
  }[];
}

// Seed data
export const seedBooks: Book[] = [
  {
    id: 1,
    title: "The Creative Act",
    author: "Rick Rubin",
    genre: "Creativity",
    status: "Reading",
    rating: 5,
  },
  {
    id: 2,
    title: "How to See",
    author: "George Nelson",
    genre: "Design",
    status: "Finished",
    rating: 4,
  },
  {
    id: 3,
    title: "Invisible Cities",
    author: "Italo Calvino",
    genre: "Fiction",
    status: "Queued",
    rating: 0,
  },
  {
    id: 4,
    title: "Notes on Directing",
    author: "Frank Hauser",
    genre: "Theatre",
    status: "Reading",
    rating: 4,
  },
];

export const seedPodcasts: Podcast[] = [
  {
    id: 1,
    name: "99% Invisible",
    host: "Roman Mars",
    episodes: 512,
    tag: "Design",
  },
  {
    id: 2,
    name: "Lex Fridman",
    host: "Lex Fridman",
    episodes: 408,
    tag: "Tech",
  },
  {
    id: 3,
    name: "How I Built This",
    host: "Guy Raz",
    episodes: 378,
    tag: "Business",
  },
  {
    id: 4,
    name: "The Tim Ferriss Show",
    host: "Tim Ferriss",
    episodes: 700,
    tag: "Growth",
  },
];

export const seedBlogs: Blog[] = [
  {
    id: 1,
    title: "The quiet power of negative space",
    status: "Published",
    date: "May 12",
    reads: 1240,
  },
  {
    id: 2,
    title: "Type that speaks before you read",
    status: "Draft",
    date: "May 15",
    reads: 0,
  },
  {
    id: 3,
    title: "On building with restraint",
    status: "Published",
    date: "Apr 28",
    reads: 870,
  },
  {
    id: 4,
    title: "What Nairobi taught me about color",
    status: "Draft",
    date: "May 17",
    reads: 0,
  },
];
