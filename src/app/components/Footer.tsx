import { Section } from './Section';


export function Footer() {
	const year = new Date();

	return (
		<Section>
			<footer className="text-center">
				<div className="pb-4">
					<a className="underline hover:text-orange-600" href="/rss.xml">RSS</a> - <a
						className="underline hover:text-orange-600"
						href="/sitemap-index.xml">Sitemap</a
					> - <a className="underline hover:text-orange-600" href="/tags">Tags</a>
				</div>
				<div>
					<p>© {year.getFullYear()} - Ben Patton</p>
				</div>
			</footer>
		</Section>
	)
}
