import Link from "next/link";

export default function Services() {
    const mainService = {
        id: "bespoke-holistic-wealth-management",
        title: "Bespoke Holistic Wealth Management",
        description: "At Richards, Lathrop and Associates, our Bespoke Holistic Wealth Management service is the cornerstone of our client-centric approach, integrating every aspect of your financial life into a cohesive, personalized strategy. We recognize in the case of one's family affairs, the whole is greater than the sum of its parts. While many advisors add value by offering individual components, the vast majority of clients lack the expertise and sophistication to assemble all the correct strategies and components of a holistic approach that serves their individual needs. We craft tailored solutions that go beyond traditional advice. Whether you're a high-net-worth individual, family, or institution, we combine disciplined investment processes with advanced technology to address your unique aspirations, risks, and opportunities, ensuring seamless coordination across financial planning, tax strategies, asset protection, estate planning, philanthropic giving, and investment management for enduring prosperity that spans generations."
    };

    const subServices = [
        {
            id: "financial-planning",
            title: "Financial Planning",
            description: "Our Financial Planning service begins with a deep dive into your personal and family dynamics, aspirations, and challenges, creating a comprehensive roadmap that evolves with life's transitions. We assess your current financial landscape, project future scenarios, and implement strategies that prioritize your long-term goals over short-term gains. From budgeting and cash flow management to retirement projections and education funding, we provide clarity and confidence, allowing you to focus on living while we handle the complexities, all backed by our boutique firm's dedication to ethical, client-first service."
        },
        {
            id: "tax-optimization",
            title: "Tax Optimization",
            description: "Tax Optimization leverages our technical expertise to minimize liabilities and maximize after-tax returns. We design strategies that integrate seamlessly with your overall wealth plan, including tax-efficient portfolio adjustments, charitable contributions, and multi-year tax projections. We reject one-size-fits-all approaches, instead tailoring solutions to your specific circumstances. Whether navigating complex income streams, capital gains, or estate taxes, we ensure every decision aligns with your goals. Tax optimization is a critical component of wealth management, but it should always serve as a tool to advance other objectives rather than an end in itself."
        },
        {
            id: "asset-protection",
            title: "Asset Protection",
            description: "Asset Protection safeguards your wealth against unforeseen risks through proactive, multi-layered strategies. We evaluate vulnerabilities in your financial structure, from market volatility to legal exposures, and implement tools like trusts, insurance integration, and diversified holdings to create a resilient shield, complete with stress-testing to ensure robustness and coordination with our other services to maintain comprehensive security without compromising growth or transfer objectives. By understanding your family's unique dynamics and long-term objectives, we ensure assets are preserved for future generations, allowing you to navigate life's uncertainties with peace of mind."
        },
        {
            id: "estate-planning",
            title: "Estate Planning",
            description: "Estate planning is a critical component of client success, crafting legacies that reflect your values and ensure seamless transitions for loved ones. We combine trust architecture, wills, and beneficiary designations with tax-aware strategies to minimize estate taxes and avoid probate pitfalls. We address family dynamics, business succession, and philanthropic intent, ensuring your plan evolves with changing laws and circumstances. Our goal is to provide control and predictability, turning complex estate matters into a foundation for generational wealth and harmony."
        },
        {
            id: "philanthropic-giving",
            title: "Philanthropic Giving",
            description: "Our Philanthropic Giving service aligns your charitable passions with strategic financial benefits. We help design giving programs that maximize impact, while optimizing tax advantages and integrating with your broader wealth strategy. By understanding your aspirations and values, we facilitate meaningful philanthropy that not only supports causes you care about but also enhances your legacy, ensuring every act of giving contributes to your family's long-term prosperity and societal contributions."
        },
        {
            id: "investment-management",
            title: "Investment Management",
            description: "Investment Management is where our expertise in portfolio construction shines, delivering multi-asset strategies tailored to your risk tolerance, income needs, and growth objectives. We build diversified portfolios that adapt to market trends while emphasizing tax efficiency and client alignment, ensuring our decisions harmonize with your financial planning, tax strategies, and asset protection to drive sustainable growth and preservation. Leveraging technology for real-time insights and scenario modeling, we shoulder the burdens of volatility so you can pursue your life goals confidently, with our independently owned structure ensuring decisions are always made in your best interest, free from external pressures."
        }
    ];

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="py-16 bg-navy text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link href="/" className="inline-flex items-center text-gold hover:text-white transition-colors mb-8">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="font-vanio text-4xl md:text-5xl mb-6">Our Services</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Comprehensive wealth management solutions designed around your unique needs and aspirations
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Service - Bespoke Holistic Wealth Management */}
            <section id={mainService.id} className="py-16 bg-cream scroll-mt-24">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="font-vanio text-3xl md:text-4xl text-navy mb-6">{mainService.title}</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{mainService.description}</p>
                    </div>
                </div>
            </section>

            {/* Sub-Services List */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="font-vanio text-2xl text-navy mb-12 text-center">Our Integrated Service Areas</h3>
                        <div className="space-y-12">
                            {subServices.map((service, index) => (
                                <div key={index} id={service.id} className="border-b border-gray-200 pb-12 last:border-b-0 scroll-mt-24">
                                    <div className="flex items-start gap-6">
                                        <div className="text-gold font-vanio text-4xl font-bold hidden md:block">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div>
                                            <h2 className="font-vanio text-2xl md:text-3xl text-navy mb-4">{service.title}</h2>
                                            <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-vanio text-3xl md:text-4xl text-navy mb-6">Ready to Get Started?</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Let us help you build a comprehensive wealth strategy tailored to your unique needs and goals.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block px-8 py-4 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors rounded-sm"
                        >
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
