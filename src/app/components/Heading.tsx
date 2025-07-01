interface Props {
	title: string;
}

export function Heading({ title }: Props) {
	return (
		<p className="text-bold pt-6 text-center text-4xl">{title}</p>
	)
}
