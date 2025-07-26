import { PinnedBadge } from "./PinnedBadge";
import { Section } from "./Section";
import { Tags } from "./Tags";

interface Props {
	title: string;
	author: string;
	tags: string[];
	minutesRead?: string;
	pubDate: string;
	isPinned?: boolean;
	img?: {
		src: string;
		alt: string;
	};
}


export function PostHeader({ title, tags, minutesRead, pubDate, isPinned = false, img }: Props) {
	return (
		<Section>
			<div className="flex flex-col items-center">
				<div className="relative px-14 pt-6 pb-4 text-center">
					{isPinned && <PinnedBadge size="md" className="absolute top-6 left-10 -translate-y-1/2" />}
					<p className="text-4xl font-bold">{title}</p>
				</div>
				<div className="pb-4">
					<Tags tags={tags} withHref={true} />
				</div>
				<div className="text-sm">
					<span>{pubDate}</span> - <span>{minutesRead}</span>
				</div>

				{img?.src ? <img src={img.src} alt={img.alt} /> : null}
			</div>
		</Section>
	)
}
