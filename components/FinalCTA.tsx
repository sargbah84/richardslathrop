import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-32 bg-navy text-white text-center">
            <div className="container mx-auto px-4 md:px-8">
                <AnimateOnScroll animation="fadeUp">
                    <h2 className="font-vanio text-4xl md:text-5xl mb-8">Ready for Something Different?</h2>
                </AnimateOnScroll>
                <AnimateOnScroll animation="fadeUp" delay={150}>
                    <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                        If you&apos;re tired of being treated like a number, if you want advisors who actually understand markets and taxes, if you&apos;re looking for a partnership that will span generations—let&apos;s talk.
                    </p>
                </AnimateOnScroll>
                <AnimateOnScroll animation="scaleIn" delay={300}>
                    <Link
                        href="#"
                        className="inline-block px-12 py-5 bg-gold text-navy font-medium text-lg tracking-wide hover:bg-white transition-colors rounded-sm"
                    >
                        Schedule Your First Conversation
                    </Link>
                </AnimateOnScroll>
            </div>
        </section>
    );
}
