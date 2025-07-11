export function Social({ href, children }: { href: string, children: React.ReactNode }) {
	return (
		<div
			className="mr-3 h-10 w-24 rounded-xl bg-stone-200/50 from-orange-900 via-amber-700 to-white p-[1px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)] hover:bg-gradient-to-r"
		>
			<a
				href={href}
				target="_blank"
				className="flex h-full w-full items-center justify-center rounded-[0.7rem] bg-stone-300 p-4 text-gray-900 opacity-90 dark:bg-stone-800 dark:text-white"
			>
				{children}
			</a>
		</div>
	)
}
