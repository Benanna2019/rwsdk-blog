import { PinIcon } from './PinIcon';

interface Props {
	size?: 'sm' | 'md' | 'lg';
	class?: string;
}

export function PinnedBadge({ size = 'md', className = '' }: { size?: 'sm' | 'md' | 'lg', className?: string }) {

	const badgeSizeClasses = {
		sm: 'px-2 py-0.5 text-xs',
		md: 'px-2.5 py-1 text-sm',
		lg: 'px-3 py-1.5 text-base'
	};

	const badgeSize = badgeSizeClasses[size];
	return (
		<span
			className={`inline-flex items-center rounded-full bg-orange-100 ${badgeSize} font-medium text-orange-800 dark:bg-orange-900 dark:text-orange-200 ${className}`}
		>
			<PinIcon size={size} />
		</span>
	)
}
