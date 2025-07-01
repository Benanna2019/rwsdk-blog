
export function Tag({ tag, withHref }: { tag: string; withHref?: boolean }) {
	return (
		<span
			className={`mb-2 mr-2 rounded-xl bg-stone-600 px-3 py-1 text-xs font-bold uppercase text-white group-hover:bg-stone-500 ${withHref ? 'hover:bg-stone-500' : ''
				}`}
		>
			#{tag}
		</span>
	)
}
