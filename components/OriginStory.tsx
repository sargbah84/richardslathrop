import AnimateOnScroll from "./AnimateOnScroll";

export default function OriginStory() {
    return (
        <section id="story" className="py-24 bg-navy text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <AnimateOnScroll animation="fadeUp">
                        <h2 className="font-vanio text-4xl md:text-5xl mb-12 text-center">How We Got Here</h2>
                    </AnimateOnScroll>

                    <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
                        <AnimateOnScroll animation="fadeUp" delay={100}>
                            <p>
                                Our story begins in two very different places: the sidelines of professional football and the battlefields of the Marine Corps. What brought us together was a shared realization that the financial services industry had lost its way.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={150}>
                            <blockquote className="bg-white/10 p-8 border-l-4 border-gold italic text-xl text-white my-10">
                                &ldquo;I revolution of this great American game was a microcosm for a global economic infrastructure where those putting in the most arduous, dangerous tasks to produce the product, those most essential to the product, participated the least in the economic success.&rdquo;
                            </blockquote>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={200}>
                            <p>
                                As a rookie in the NFL, <span className="text-gold font-semibold">Christian Richards</span> sat through a meeting with financial advisors who were supposed to help preserve what players had worked toward since they were five years old. Instead, he quickly recognized these advisors only wanted to &ldquo;help&rdquo; the first-round draft picks with multi-million dollar contracts. The undrafted free agents who needed advice most were invisible to them.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={250}>
                            <p>
                                That day planted the seed for what would become Richards, Lathrop & Associates. Christian&apos;s purpose became clear: infiltrate the financial services industry, change its face, and become a true advocate for those who need financial literacy most.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={300}>
                            <p>
                                Meanwhile, <span className="text-gold font-semibold">Michael Lathrop</span>, a Marine Corps veteran turned investment specialist, was discovering similar problems from a different angle. With over 14 years mastering portfolio construction and tax optimization, he saw how most &ldquo;advisors&rdquo; didn&apos;t actually build portfolios—they assembled hodgepodges of funds from wholesalers or made educated guesses based on their own biases.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={350}>
                            <blockquote className="bg-white/10 p-8 border-l-4 border-gold italic text-xl text-white my-10">
                                &ldquo;When everyone is going right, I want to go left.&rdquo; — Jim Regitz
                            </blockquote>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={400}>
                            <p>
                                We were mentored by legends who showed us what this industry should be: David Meltzer, who taught us to put service to clients first and keep advice practical and simple. Jim Regitz, who demonstrated that clients come first, employees second, and management last—all while having fun doing it.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={450}>
                            <p>
                                As we watched the industry evolve into McDonald&apos;s—where there&apos;s a billion served but the food will eventually kill you—we decided to harken back to the boutique model. To build a firm where automation and efficiency don&apos;t matter more than the individual. Where the next acquisition press release isn&apos;t more important than your tax strategy.
                            </p>
                        </AnimateOnScroll>

                        <AnimateOnScroll animation="fadeUp" delay={500}>
                            <p className="text-white font-semibold text-xl">
                                Welcome to Richards, Lathrop & Associates. We&apos;re small by choice. Personal by design. And here for the long haul.
                            </p>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </section>
    );
}
