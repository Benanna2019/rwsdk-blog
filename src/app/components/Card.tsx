

import { PinnedBadge } from './PinnedBadge';
import { Tags } from './Tags';

export function Card({ post }: { post: any }) {
	// const isPinned = post.data.isPinned === true;

	return (
		<a href={`/blog/${post.url}/`}>
			<div
				className="h-full rounded-2xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r dark:bg-gray-900"
			>
				<div
					className="flex h-full w-full flex-col rounded-[1rem] bg-stone-300 p-4 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white"
				>
					<div className="flex-auto">
						<div className="flex flex-col justify-between gap-2 pb-4 text-xs">
							<div className="flex items-center gap-2">
								{/* {isPinned && <PinnedBadge size="sm" />} */}
								<p>{post.published}</p>
							</div>
							<div>
								<p className="font-bold">{post.minutesRead}</p>
							</div>
						</div>

						<p className="pb-4 text-lg font-bold">{post.title}</p>

						<Tags tags={post.categories} />
						<p className="line-clamp-6 pt-4">{post.description}</p>
					</div>
					<p className="pt-4 underline">read more →</p>
				</div>
			</div>
		</a>
	)
}
