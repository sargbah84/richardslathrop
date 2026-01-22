import AnimateOnScroll from "./AnimateOnScroll";
import Link from "next/link";

export default function OriginStory() {
    return (
        <section id="story" className="py-24 bg-navy text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll animation="fadeUp">
                        <h2 className="font-vanio text-4xl md:text-5xl mb-8 text-center">Who We Are</h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p className="text-xl text-center text-gray-300 leading-relaxed mb-8">
                            Welcome to Richards, Lathrop &amp; Associates. We&apos;re small by choice. Personal by design. And here for the long haul.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div className="space-y-6 text-gray-300 leading-relaxed mb-10">
                            <p>
                                In a financial landscape rife with rapid changes, fragmented services, mounting complexity, and short-term thinking, we recognized the profound challenges of feeling overwhelmed, underserved, and disconnected from holistic guidance. This inspired the creation of Richards, Lathrop &amp; Associates: an independently owned boutique wealth management firm singularly dedicated to your prosperity, weaving seamless, enduring strategies with uncompromised integrity and client-first dedication to navigate life&apos;s intricacies and foster harmony across generations.
                            </p>
                            <p>
                                We deliver bespoke counsel that empowers you every step of the way, crafting tailored strategies attuned to your unique objectives for sustained achievement. This guiding ethos sets us apart as your trusted partner in excellence, where true accomplishment unfolds over decades of purposeful advancement—rooted in four essential pillars that integrate multigenerational planning to safeguard and elevate your family&apos;s legacy with confidence and clarity.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={300}>
                        <div className="text-center">
                            <Link
                                href="/story"
                                className="inline-block px-8 py-4 bg-gold text-white font-medium tracking-wide hover:bg-white hover:text-navy transition-colors rounded-sm"
                            >
                                Read Our Full Story
                            </Link>
                        </div>
                    </AnimateOnScroll>

                    {/* Video placeholder - commented out
                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div className="aspect-video bg-black/30 rounded-lg overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center bg-navy/50">
                                <div className="text-center text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                    </svg>
                                    <p className="text-lg font-medium">Video Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </AnimateOnScroll>
                    */}
                </div>
            </div>
        </section>
    );
}
