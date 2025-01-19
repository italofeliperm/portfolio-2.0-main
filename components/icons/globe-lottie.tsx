export default function GlobeLottie() {
	return (
		<div className="relative flex items-center justify-center w-5 h-5">
			<div className="absolute inset-0 group-hover:bg-primary/40 rounded-full blur-xl transition-all duration-300 scale-150 -translate-y-1/2 top-1/2" />
			<div className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
				<svg
					width="16"
					height="16"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<circle cx="12" cy="12" r="10" />
					<path d="M2 12h20" />
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
				</svg>
			</div>
		</div>
	);
}

