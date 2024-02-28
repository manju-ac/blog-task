export type Post = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
  totalViews?: number | null;
  tags: string[];
  author: {
    name: string;
    imageUrl?: string | null;
  };
};
