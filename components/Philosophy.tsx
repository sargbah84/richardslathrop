import AnimateOnScroll from "./AnimateOnScroll";

export default function Philosophy() {
    const pillars = [
        {
            number: "01",
            title: "Strong Relationships",
            description: "We begin with a profound understanding of you—not just your finances, but your aspirations, fears, and family dynamics. These partnerships bridge generations through fluid wealth transitions and flexible frameworks that adapt as your life evolves."
        },
        {
            number: "02",
            title: "True Client Alignment",
            description: "Our ownership structure and incentives are anchored in your long-term prosperity, not quarterly sales targets. We designed this firm from the ground up to ensure your success is our only metric that matters."
        },
        {
            number: "03",
            title: "Excellence in Service",
            description: "Financial matters shouldn't keep you up at night. We assume that burden entirely, remaining accessible during market volatility and life transitions, so you can focus on living while we handle the complexity."
        },
        {
            number: "04",
            title: "Deep Technical Expertise",
            description: "While markets fluctuate unpredictably, taxation and strategic planning offer real control over outcomes. Our specialized knowledge in portfolio construction, tax optimization, estate planning, and trust architecture creates measurable advantages."
        }
    ];

    return (
        <section id="approach" className="py-24 bg-cream">
            <div className="container mx-auto px-4 md:px-8">
                <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
                    <h2 className="font-vanio text-4xl md:text-5xl text-navy mb-4">Our Four Pillars</h2>
                    <p className="text-gray-500">The principles that guide every decision we make</p>
                </AnimateOnScroll>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <AnimateOnScroll key={index} animation="scaleIn" delay={index * 100}>
                            <div className="p-10 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                                <div className="text-gold font-vanio text-5xl mb-5">{pillar.number}</div>
                                <h3 className="text-navy font-vanio text-2xl mb-4">{pillar.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
