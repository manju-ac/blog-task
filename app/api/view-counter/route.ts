import { updatePostViewBySlug } from '@/utils/post-service';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const postSlug = req.nextUrl.searchParams.get('post-slug');

  if (!postSlug) {
    return NextResponse.json(
      { error: '[post-slug] required' },
      { status: 400 }
    );
  }

  const post = await updatePostViewBySlug(postSlug);

  if (!post) {
    return NextResponse.json(
      { error: `Post [${postSlug}] was not found` },
      { status: 404 }
    );
  }

  return NextResponse.json(post.totalViews);
};
