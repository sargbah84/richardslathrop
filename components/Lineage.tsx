import AnimateOnScroll from "./AnimateOnScroll";

export default function Lineage() {
    const mentors = [
        {
            name: "David Meltzer",
            principle: "\"Service to client first. Practical, simple advice. Ethical & professional conduct.\"",
            description: "David taught us that being an advisor means building what clients need, not what makes the most money. His wisdom about Ivy League guys just chasing dollars reminded us why we're different."
        },
        {
            name: "Jim Regitz",
            principle: "\"Clients first. Employees second. Management last. Have fun while doing it all.\"",
            description: "Jim demonstrated daily what elite service looks like—driving across the valley for in-home meetings, never putting convenience over client needs. His \"when everyone goes right, I want to go left\" philosophy guides our every decision."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-8">
                <AnimateOnScroll animation="fadeUp" className="text-center mb-16">
                    <h2 className="font-vanio text-4xl md:text-5xl text-navy mb-4">Standing on the Shoulders of Giants</h2>
                    <p className="text-gray-500">The mentors who shaped our philosophy</p>
                </AnimateOnScroll>

                <div className="max-w-3xl mx-auto space-y-8">
                    {mentors.map((mentor, index) => (
                        <AnimateOnScroll key={index} animation="fadeUp" delay={index * 150}>
                            <div className="bg-cream p-10 border-l-4 border-gold rounded-r-lg">
                                <h4 className="font-vanio text-2xl text-navy mb-3">{mentor.name}</h4>
                                <p className="italic text-gray-600 mb-4">{mentor.principle}</p>
                                <p className="text-gray-700 leading-relaxed">{mentor.description}</p>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
