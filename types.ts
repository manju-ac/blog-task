export type Blog = {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: Date;
  totalViews?: number;
  tags: string[];
};
