"use client";

import { useState, useEffect } from 'react';
import { Section } from './Section';

export function Navbar() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Initialize theme on component mount
	useEffect(() => {
		// Only run in browser environment
		if (typeof window !== 'undefined') {
			const savedTheme = localStorage.getItem('theme');
			const isDark = savedTheme === 'dark';
			setIsDarkTheme(isDark);
			applyTheme(isDark);
		}
	}, []);

	function applyTheme(isDark: boolean) {
		// Only run in browser environment
		if (typeof window !== 'undefined' && typeof document !== 'undefined') {
			if (isDark) {
				document.documentElement.classList.add('dark');
				localStorage.setItem('theme', 'dark');
			} else {
				document.documentElement.classList.remove('dark');
				localStorage.setItem('theme', 'light');
			}
		}
	}

	const handleThemeToggle = () => {
		const newTheme = !isDarkTheme;
		setIsDarkTheme(newTheme);
		applyTheme(newTheme);
	};

	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<Section>
			<div className="flex items-center justify-between">
				<div className="text-3xl font-bold">
					<a href="/"
					>💻 <span className="pr-2 text-2xl text-gray-500">{'<'}</span>ben<span>a</span>patton<span
						className="pl-2 text-2xl text-gray-500">{'/>'}</span
						></a
					>
				</div>
				<div className="flex items-center">
					{/* <!-- Desktop Navigation --> */}
					<nav>
						<ul className="hidden flex-row sm:flex">
							<li><a href="/tags" className="mr-3 hover:text-orange-600">TAGS</a></li>
							<li><a href="/blog" className="hover:text-orange-600">BLOG</a></li>
						</ul>
					</nav>
					{/* <!-- Desktop Theme Switcher --> */}
					<div className="ml-3 hidden flex-col justify-center sm:flex">
						<input
							type="checkbox"
							id="light-switch-desktop"
							className="light-switch sr-only"
							checked={isDarkTheme}
							onChange={handleThemeToggle}
						/>
						<label className="tada relative cursor-pointer p-2" htmlFor="light-switch-desktop">
							<svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-stone-800"
									d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
								></path>
								<path className="fill-gray-900" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
								></path>
							</svg>
							<svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-slate-400"
									d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
								></path>
								<path
									className="fill-slate-500"
									d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
								></path>
							</svg>
							<span className="sr-only">Switch to light / dark version</span>
						</label>
					</div>

					{/* <!-- Mobile Menu Button --> */}
					<button
						onClick={handleMobileMenuToggle}
						className="p-2 sm:hidden"
						aria-label="Toggle mobile menu"
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* <!-- Mobile Menu --> */}
			<div
				className={`mt-4 rounded-lg border border-gray-200 bg-white pb-2 shadow-md transition-all duration-300 sm:hidden dark:border-gray-200 dark:bg-stone-900 ${isMobileMenuOpen ? 'block' : 'hidden'
					}`}
			>
				<nav className="flex flex-col p-3">
					<a href="/tags" className="border-b border-gray-200 py-2 hover:text-orange-600">TAGS</a>
					<a href="/blog" className="border-b border-gray-200 py-2 hover:text-orange-600">BLOG</a>

					{/* <!-- Mobile Theme Switcher --> */}
					<div className="flex items-center py-2">
						<input
							type="checkbox"
							id="light-switch-mobile"
							className="light-switch sr-only"
							checked={isDarkTheme}
							onChange={handleThemeToggle}
						/>
						<label className="tada relative cursor-pointer p-2" htmlFor="light-switch-mobile">
							<svg className="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-stone-800"
									d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
								></path>
								<path className="fill-gray-900" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
								></path>
							</svg>
							<svg className="hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
								<path
									className="fill-slate-400"
									d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
								></path>
								<path
									className="fill-slate-500"
									d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
								></path>
							</svg>
							<span className="sr-only">Switch to light / dark version</span>
						</label>
					</div>
				</nav>
			</div>
		</Section>
	)
}


