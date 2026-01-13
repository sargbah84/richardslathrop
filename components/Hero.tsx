import Link from "next/link";

export default function Hero() {
    return (
        <section
            className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-cream overflow-hidden bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/img/header-bg.jpg')" }}
        >
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-4xl">
                    <span className="animate-hero-badge inline-block py-2 px-4 bg-navy text-white text-xs font-semibold tracking-widest uppercase mb-6 rounded-sm">
                        Independently Owned
                    </span>
                    <h1 className="animate-hero-title font-vanio text-5xl md:text-7xl leading-tight text-navy mb-8">
                        When Everyone Goes Right, We Go Left
                    </h1>
                    <p className="animate-hero-text text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                        We&apos;re not another corporate wealth management firm. We&apos;re two professionals who saw how broken the industry had become—and decided to build something better. No sales quotas. No corporate priorities. Just you, your family, and a partnership built to last generations.
                    </p>
                    <div className="animate-hero-cta flex flex-col sm:flex-row gap-4">
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors text-center rounded-sm"
                        >
                            Start a Conversation
                        </Link>
                        <Link
                            href="#story"
                            className="px-8 py-4 border-2 border-navy text-navy font-medium tracking-wide hover:bg-navy hover:text-white transition-colors text-center rounded-sm"
                        >
                            Read Our Story
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none" />
        </section>
    );
}
