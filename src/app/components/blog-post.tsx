import Markdown from 'markdown-to-jsx';
import type { BlogPost } from '@/app/data/blog-posts';

interface BlogPostProps {
  post: BlogPost;
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="prose prose-gray max-w-none dark:prose-invert">
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          {post.title}
        </h1>
        {post.published && (
          <p className=" text-gray-600 dark:text-gray-300">
            {post.published}
          </p>
        )}
      </header>
      
      <div className="prose prose-gray max-w-none dark:prose-invert">
        <Markdown>{post.html}</Markdown>
      </div>
    </article>
  );
} 