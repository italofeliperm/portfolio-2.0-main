import Lottie from 'lottie-react';
import globeAnimation from '@/assets/images/lottie-icons/globe.json';

export default function GlobeLottie() {
	return (
		<div className="relative flex items-center justify-center w-8 h-8">
			<div className="absolute inset-0 group-hover:bg-primary/40 rounded-full blur-xl transition-all duration-300 scale-150 -translate-y-1/2 top-1/2" />
			<div className="relative z-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
				<Lottie
					animationData={globeAnimation}
					loop={true}
					autoplay={true}
					style={{ width: 32, height: 32 }}
				/>
			</div>
		</div>
	);
}


