import { Section } from './Section';

export function PostContent({ postContent }: { postContent: string }) {
	return (
		<Section>
			<div
				className="content prose dark:prose-invert prose-code:rounded-lg prose-code:bg-stone-800 prose-code:p-1 prose-code:text-orange-600 prose-img:rounded-lg prose-img:shadow-xl prose-img:dark:shadow-stone-800 mt-8 max-w-none text-base leading-8 text-black dark:text-white"
			>
				<div dangerouslySetInnerHTML={{ __html: postContent }} />
			</div>
		</Section>

	)
}
