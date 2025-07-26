import { BlogPost } from '@/app/components/blog-post';
import { getBlogPostBySlug } from '@/app/data/blog-posts';

interface BlogPostPageProps {
  params: { slug: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <BlogPost post={post} />
    </div>
  );
} 