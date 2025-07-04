interface Props {
	size?: 'sm' | 'md' | 'lg';
	className?: string;
}


export function PinIcon({ size = 'md', className = '' }: Props) {
	const sizeClasses = {
		sm: 'h-3 w-3',
		md: 'h-4 w-4',
		lg: 'h-5 w-5'
	};

	const iconSize = sizeClasses[size];
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={`${iconSize} ${className}`}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<path d="M12 17v5"></path>
			<path
				d="M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
			></path>
		</svg>
	)
}

