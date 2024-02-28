import db from '@/lib/db';
import { posts } from '@/lib/db/schema';

import { asc, desc, eq, ilike, sql } from 'drizzle-orm';

export type Filter = {
  query: string;
  page: number;
  sortBy: string;
};

export const getPostSlugs = async () => {
  const postSlugs = await db
    .select({ title: posts.title })
    .from(posts)
    .then(records =>
      records.map(record => record.title.toLowerCase().replaceAll(' ', '-'))
    );

  return postSlugs;
};

export const getPosts = async (filter: Filter) => {
  const query: Parameters<typeof db.query.posts.findMany>[0] = {};

  if (filter.query) {
    query.where = (post, { ilike }) => ilike(post.title, `%${filter.query}%`);
  }

  if (filter.sortBy && filter.sortBy !== 'default') {
    switch (filter.sortBy) {
      case 'title_asc':
      case 'title_desc':
        query.orderBy = post =>
          filter.sortBy === 'title_asc' ? asc(post.title) : desc(post.title);
        break;
      case 'date_asc':
      case 'date_desc':
        query.orderBy = post =>
          filter.sortBy === 'date_asc'
            ? asc(post.createdAt)
            : desc(post.createdAt);
    }
  }

  const posts = await db.query.posts
    .findMany({
      ...query,
      with: { author: true, tags: { with: { tag: true } } },
      limit: 6,
      offset: (filter.page - 1) * 6
    })
    .then(records =>
      records.map(record => ({
        id: record.id,
        title: record.title,
        content: record.content,
        imageUrl: record.imageUrl,
        createdAt: record.createdAt,
        author: { name: record.author.name, imageUrl: record.author.imageUrl },
        tags: record.tags.map(tagItem => tagItem.tag.name),
        totalViews: record.totalViews
      }))
    );

  return posts;
};

export const getTotalPosts = async (filter: Filter) => {
  const query = db
    .select({ count: sql<number>`cast(count(*) as int)` })
    .from(posts);

  if (filter.query) {
    query.where(ilike(posts.title, `%${filter.query}%`));
  }

  const totalPosts = await query.then(records => records[0].count || 0);

  return totalPosts;
};

export const getPostBySlug = async (slug: string) => {
  const post = await db.query.posts
    .findFirst({
      where: eq(sql`lower(${posts.title})`, slug.replaceAll('-', ' ')),
      with: {
        author: true,
        tags: { with: { tag: true } }
      }
    })
    .then(
      record =>
        record && {
          id: record.id,
          title: record.title,
          content: record.content,
          imageUrl: record.imageUrl,
          createdAt: record.createdAt,
          author: {
            name: record.author.name,
            imageUrl: record.author.imageUrl
          },
          tags: record.tags.map(tagItem => tagItem.tag.name),
          totalViews: record.totalViews
        }
    );

  return post;
};

export const updatePostViewBySlug = async (slug: string) => {
  const post = await db
    .update(posts)
    .set({ totalViews: sql`${posts.totalViews} + 1` })
    .where(eq(sql`lower(${posts.title})`, slug.replaceAll('-', ' ')))
    .returning()
    .then(records => records[0]);

  return post;
};

export const getTopPosts = async () => {
  const posts = await db.query.posts
    .findMany({
      with: { author: true, tags: { with: { tag: true } } },
      limit: 10,
      orderBy: post => desc(post.totalViews)
    })
    .then(records =>
      records.map(record => ({
        id: record.id,
        title: record.title,
        content: record.content,
        imageUrl: record.imageUrl,
        createdAt: record.createdAt,
        author: { name: record.author.name, imageUrl: record.author.imageUrl },
        tags: record.tags.map(tagItem => tagItem.tag.name),
        totalViews: record.totalViews
      }))
    );

  return posts;
};
