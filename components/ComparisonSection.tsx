import AnimateOnScroll from "./AnimateOnScroll";

export default function ComparisonSection() {
    const bigFirmsItems = [
        "Commoditized \"McDonald's\" portfolios",
        "20 different departments to navigate",
        "Advisors chasing sales quotas",
        "Cookie-cutter strategies from wholesalers",
        "High fees hidden in fine print",
        "Merger announcements, not relationships",
        "Ivy League degrees over genuine care"
    ];

    const weGiveYouItems = [
        "Custom-built portfolios for your goals",
        "Direct access to your advisors",
        "Zero sales pressure, ever",
        "Strategies tailored to your family",
        "Transparent, minimized costs",
        "Partnerships that span generations",
        "Real-world experience and integrity"
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
                    <h2 className="font-vanio text-4xl md:text-5xl text-navy mb-4">The Problem With Wealth Management Today</h2>
                    <p className="text-gray-500 italic">And why we built something different</p>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Big Firms */}
                    <AnimateOnScroll animation="fadeRight" delay={100}>
                        <div className="bg-gray-50 p-10 rounded-lg border-l-4 border-red-500 h-full">
                            <h3 className="font-vanio text-2xl text-gray-700 mb-8">Big Firms Give You</h3>
                            <ul className="space-y-4">
                                {bigFirmsItems.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-600 border-b border-gray-200 pb-3 last:border-b-0">
                                        <span className="mr-3 text-red-500 font-bold">✕</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateOnScroll>

                    {/* We Give You */}
                    <AnimateOnScroll animation="fadeLeft" delay={300}>
                        <div className="bg-cream p-10 rounded-lg border-l-4 border-gold h-full">
                            <h3 className="font-vanio text-2xl text-navy mb-8">We Give You</h3>
                            <ul className="space-y-4">
                                {weGiveYouItems.map((item, i) => (
                                    <li key={i} className="flex items-start text-navy font-medium border-b border-gray-200 pb-3 last:border-b-0">
                                        <span className="mr-3 text-gold font-bold">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
