import Image from "next/image";
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
                                    src="/assets/img/chris.png"
                                    alt="Christian P. Richards III"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 40vw"
                                    className="object-cover"
                                />
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeLeft" delay={200} className="w-full md:w-3/5">
                            <h3 className="font-vanio text-3xl text-navy mb-2">Christian P. Richards III</h3>
                            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-6">Co-Founder & Senior Wealth Advisor</p>

                            <div className="bg-cream p-6 border-l-4 border-gold mb-6 italic text-gray-600">
                                &ldquo;From answering phones and scanning documents to building a firm that changes lives—my journey proves that integrity and hard work matter more than pedigree.&rdquo;
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Christian&apos;s path to wealth management began on the football field, where he witnessed firsthand how the people creating the most value often benefit the least. After his NFL career, he started from the bottom—literally going door-to-door with a resume that said little more than &ldquo;Football Player.&rdquo;
                                </p>
                                <p>
                                    Within 18 months, he earned tax, insurance, and securities licenses. But unlike the advisors who dismissed him as a rookie, Christian never forgot his purpose: to serve those who need help most, not just chase high-net-worth clients.
                                </p>
                                <p>
                                    Under the mentorship of David Meltzer and Jim Regitz, Christian learned that elite service means putting clients first, maintaining ethical conduct, and actually caring about outcomes. For the past seven years, he&apos;s served clients as a Senior Wealth Advisor, building lasting relationships that span generations.
                                </p>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Founder 2: Michael */}
                    <div className="flex flex-col md:flex-row items-start gap-12">
                        <AnimateOnScroll animation="fadeRight" delay={200} className="w-full md:w-3/5 order-2 md:order-1">
                            <h3 className="font-vanio text-3xl text-navy mb-2">Michael Lathrop</h3>
                            <p className="text-gold font-medium uppercase tracking-widest text-sm mb-6">Principal & Chief Investment Officer</p>

                            <div className="bg-cream p-6 border-l-4 border-gold mb-6 italic text-gray-600">
                                &ldquo;True expertise means building portfolios from the ground up, understanding global markets and tax implications, not just selecting pre-packaged funds.&rdquo;
                            </div>

                            <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>
                                    Michael brings 14+ years of investment management expertise and the discipline of a United States Marine Corps veteran to every client relationship. His technical mastery of portfolio construction sets him apart in an industry full of salespeople pretending to be advisors.
                                </p>
                                <p>
                                    Holding the CIMA® and AIF® designations, along with a Master of Taxation from Villanova Law School, Michael doesn&apos;t just manage investments—he optimizes them through the lens of tax efficiency, a critical advantage most advisors overlook.
                                </p>
                                <p>
                                    His approach combines deep knowledge of global capital markets with an intellectual curiosity that finds insights at the intersection of seemingly unrelated disciplines. He&apos;s not just managing your money; he&apos;s architecting comprehensive strategies for multigenerational wealth.
                                </p>
                            </div>
                        </AnimateOnScroll>
                        <AnimateOnScroll animation="fadeLeft" className="w-full md:w-2/5 order-1 md:order-2 flex justify-center md:justify-end">
                            <div className="relative w-full h-[500px] shadow-2xl rounded-lg overflow-hidden">
                                <Image
                                    src="/assets/img/mike.png"
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
