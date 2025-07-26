

import { Section } from './Section';
import { Card } from './Card';

// interface Props {
//   posts: CollectionEntry<'blog'>[];
// }

interface Props {
  posts: any[]; // TODO: fix this
}


export function LatestPosts({ posts }: Props) {
  return (
    <Section>
      <div className="flex justify-between pb-4">
        <p className="text-xl font-bold">Latest Posts</p>
        <a href="/blog" className="underline hover:text-orange-600">all posts →</a>
      </div>
      <div className="flex flex-col pb-4 md:flex-row">
        {
          posts.map((post: any) => (
            <div key={post._id} className="mb-4 basis-1 last:mr-0 md:mr-4 md:basis-1/3">
              <Card post={post} />
            </div>
          ))
        }
      </div>
    </Section>
  )
}
