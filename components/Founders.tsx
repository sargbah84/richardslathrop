import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Founders() {
    return (
        <section id="founders" className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <AnimateOnScroll animation="fadeUp" className="text-center mb-20">
                    <h2 className="font-vanio text-4xl md:text-5xl text-navy mb-4">Meet the Founders</h2>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">Two professionals from different worlds, united by a mission to restore integrity to wealth management</p>
                </AnimateOnScroll>

                <div className="space-y-24 max-w-5xl mx-auto">
                    {/* Founder 1: Christian */}
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <AnimateOnScroll animation="fadeRight" className="w-full md:w-2/5 flex justify-center md:justify-start">
                            <div className="relative w-full h-[500px] shadow-2xl rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/img/chris1a.jpg"
                                    alt="Christian P. Richards III"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeLeft" delay={200} className="w-full md:w-3/5">
                            <h3 className="font-vanio text-3xl text-navy mb-2">Christian P. Richards III</h3>
                            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-6">President</p>

                            <div className="bg-cream p-6 border-l-4 border-gold mb-6 italic text-gray-600">
                                &ldquo;From answering phones and scanning documents to building a firm that changes lives—my journey proves that integrity and hard work matter more than pedigree.&rdquo;
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Christian Richards&apos;s dedication to client service and success was forged in a modest upbringing, where his parents, a special education teacher and social services worker, instilled values of community impact through their founding of the Pacoima Wildcats nonprofit. With no family history in finance, Christian prioritized intellectual growth alongside athletic excellence, inspired by his father&apos;s path from sports to a UC Berkeley degree, leading Christian to secure scholarships to top universities like Michigan as a scholar-athlete.
                                </p>
                                <p>
                                    His awareness of financial inequities deepened in college and the NFL, observing how many athletes were underserved by profit-driven advisors, fueling his mission to advocate for financial literacy. Starting from a data entry role, he earned licenses and thrived under mentors David Meltzer and Jim Regitz at client-focused firms, embracing low-fee, referral-based models that echoed his parents&apos; service-first philosophy. This journey culminated in founding Richards, Lathrop &amp; Associates in 2026, a boutique firm prioritizing personalized, concierge-level service for enduring client prosperity.
                                </p>
                                <Link href="/team/christian-richards" className="inline-block mt-4 px-8 py-4 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors rounded-sm">
                                    Read Full Bio
                                </Link>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Founder 2: Michael */}
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <AnimateOnScroll animation="fadeRight" delay={200} className="w-full md:w-3/5 order-2 md:order-1">
                            <h3 className="font-vanio text-3xl text-navy mb-2">Michael Lathrop</h3>
                            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-6">Chief Investment Officer</p>

                            <div className="bg-cream p-6 border-l-4 border-gold mb-6 italic text-gray-600">
                                &ldquo;We recognize that success is built on the combination of disciplined investment processes that are tailored to fit the specific needs and preferences of clients rather than a detached and distant decisionmaker. While market volatility will remain constant, and one trend gives way to another, we work to provide you with structure and confidence that you will achieve your financial goals.&rdquo;
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    With over 14 years of experience in investment management, he specializes in constructing multi-asset portfolios and has led the creation and management of specialty strategies focused on current income and aggressive growth. Michael has also managed strategies for a diverse range of mandates and clients, including high-net-worth individuals and institutions.
                                </p>
                                <Link href="/team/michael-lathrop" className="inline-block mt-4 px-8 py-4 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors rounded-sm">
                                    Read Full Bio
                                </Link>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeLeft" className="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end">
                            <div className="relative w-full h-[500px] shadow-2xl rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/img/mike1a.jpg"
                                    alt="Michael Lathrop"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
