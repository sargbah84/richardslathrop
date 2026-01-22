import Link from "next/link";

export default function OurStory() {
    const pillars = [
        {
            title: "Strong Relationships: The Cornerstone of Personalized Insight",
            description: "Our work begins with a profound understanding of you—your aspirations, apprehensions, and circumstances. This close connection enables us to eliminate extraneous costs and barriers, crafting strategies that align precisely with your vision. These partnerships endure beyond the present, bridging generations through fluid wealth transitions, familial guidance, and flexible frameworks that adapt to evolving family dynamics."
        },
        {
            title: "Client Alignment: Priorities Centered on Your Future",
            description: "Rhetoric abounds, yet genuine alignment remains elusive. Many organizations pursue expansion for their own gain, sidelining individual client interests. We designed our structure with foresight: enduring ownership models and incentives anchored in your long-term prosperity, free from transient revenue pressures. This ensures uninterrupted fulfillment of your objectives, incorporating robust multigenerational structures that nurture and expand wealth through successive eras."
        },
        {
            title: "Excellence in Service: Restoring Assurance Amid Complexity",
            description: "Financial matters can evoke significant anxiety. Our mission is to alleviate that strain entirely. Extending beyond mere portfolio oversight and strategic planning, we assume the weight of these responsibilities, remaining readily accessible amid market volatility. This is more than assistance—it is the reinstatement of your peace of mind, empowering you to embrace life fully, secure in the knowledge that multigenerational strategies are vigilantly overseen and refined to navigate life's transitions."
        },
        {
            title: "Deep Technical Knowledge: Precision for Empowered Outcomes",
            description: "While markets fluctuate unpredictably, domains such as taxation and strategic planning offer avenues for decisive control. Here, our proficiency excels, affording you optimal leverage over results. We eschew commoditized offerings; instead, we construct investment approaches centered on your needs, curtailing expenses, mitigating exposures, and averting oversights. In contrast to conventional practitioners, our specialized acumen reveals customized avenues for superior performance, embedding multigenerational components such as estate refinement, trust architecture, and succession methodologies to foster enduring family affluence."
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
                        <h1 className="font-vanio text-4xl md:text-5xl mb-6">Our Story</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Why We Built Richards, Lathrop and Associates
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6">
                            <p>
                                In a financial landscape rife with rapid changes, fragmented services, mounting complexity, and short-term thinking, we recognized the profound challenges of feeling overwhelmed, underserved, and disconnected from holistic guidance. This inspired the creation of Richards, Lathrop &amp; Associates: an independently owned boutique wealth management firm singularly dedicated to your prosperity, weaving seamless, enduring strategies with uncompromised integrity and client-first dedication to navigate life&apos;s intricacies and foster harmony across generations.
                            </p>
                            <p>
                                We deliver bespoke counsel that empowers you every step of the way, crafting tailored strategies attuned to your unique objectives for sustained achievement. This guiding ethos sets us apart as your trusted partner in excellence, where true accomplishment unfolds over decades of purposeful advancement—rooted in four essential pillars that integrate multigenerational planning to safeguard and elevate your family&apos;s legacy with confidence and clarity.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Four Pillars */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12">
                            {pillars.map((pillar, index) => (
                                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                                    <div className="flex items-start gap-6">
                                        <div className="text-gold font-vanio text-4xl font-bold hidden md:block">
                                            {String(index + 1).padStart(2, '0')}
                                        </div>
                                        <div>
                                            <h2 className="font-vanio text-xl md:text-2xl text-navy mb-4">{pillar.title}</h2>
                                            <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Closing Statement */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            We established this firm to elevate the essence of collaboration in wealth management—prioritizing the client foremost, invariably, with multigenerational foresight as its core.
                        </p>
                        <p className="text-lg text-navy font-medium mb-8">
                            Partner with us today to shape your family&apos;s narrative and convert your ambitions into an enduring legacy.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block px-8 py-4 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors rounded-sm"
                        >
                            Contact Us Now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
