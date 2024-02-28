import { relations } from 'drizzle-orm';
import {
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uuid
} from 'drizzle-orm/pg-core';

export const authors = pgTable('author', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull()
});

export const authorsRelations = relations(authors, ({ many }) => ({
  posts: many(posts)
}));

export const posts = pgTable('post', {
  id: uuid('id').defaultRandom().primaryKey(),
  title: text('title').notNull().unique(),
  description: text('description').notNull(),
  content: text('content').notNull(),
  imageUrl: text('image_url').notNull(),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  authorId: uuid('author_id')
    .notNull()
    .references(() => authors.id, { onDelete: 'cascade' }),
  totalViews: integer('total_views').default(0)
});

export const postsRelations = relations(posts, ({ one, many }) => ({
  author: one(authors, {
    fields: [posts.authorId],
    references: [authors.id]
  }),
  tags: many(postsToTags)
}));

export const tags = pgTable('tag', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull().unique()
});

export const postsToTags = pgTable(
  'post_to_tag',
  {
    postId: uuid('post_id')
      .notNull()
      .references(() => posts.id, { onDelete: 'cascade' }),
    tagId: uuid('tag_id')
      .notNull()
      .references(() => tags.id, { onDelete: 'cascade' })
  },
  table => ({
    pk: primaryKey({ columns: [table.postId, table.tagId] })
  })
);

export const postsTotagsRelations = relations(postsToTags, ({ one }) => ({
  post: one(posts, {
    fields: [postsToTags.postId],
    references: [posts.id]
  }),
  tag: one(tags, {
    fields: [postsToTags.tagId],
    references: [tags.id]
  })
}));
