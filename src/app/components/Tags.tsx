import { Tag } from "./Tag";

export function Tags({ tags, withHref }: { tags: string[]; withHref?: boolean }) {

	return (
		<div className="flex flex-wrap">
			{
				tags.map((tag: string) => {
					const element = <Tag key={tag} tag={tag} withHref={withHref} />;
					return withHref ? <a href={`/tags/${tag}`}>{element}</a> : element;
				})
			}
		</div>
	)
}
