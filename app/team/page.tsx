import Image from "next/image";
import Link from "next/link";

export default function Team() {
    const founders = [
        {
            name: "Christian P. Richards III",
            title: "President",
            image: "/assets/img/chris1a.JPG",
            bio: "Christian's path to wealth management began on the football field, where he witnessed firsthand how the people creating the most value often benefit the least. After his NFL career, he started from the bottom—literally going door-to-door with a resume that said little more than \"Football Player.\"",
            link: "/team/christian-richards"
        },
        {
            name: "Michael Lathrop",
            title: "Chief Investment Officer",
            image: "/assets/img/mike1a.jpg",
            bio: "With over 14 years of experience in investment management, Michael specializes in constructing multi-asset portfolios and has led the creation and management of specialty strategies focused on current income and aggressive growth.",
            link: "/team/michael-lathrop"
        }
    ];

    const teamMembers = [
        {
            name: "Sarah Mitchell",
            title: "Director of Client Services",
            image: "/assets/img/placeholder-team.jpg",
            bio: "Sarah brings over a decade of experience in client relationship management, ensuring every client receives personalized attention and exceptional service throughout their wealth management journey."
        },
        {
            name: "David Chen",
            title: "Senior Financial Analyst",
            image: "/assets/img/placeholder-team.jpg",
            bio: "David's analytical expertise and attention to detail help drive data-informed investment decisions, with a focus on identifying opportunities that align with each client's unique financial goals."
        },
        {
            name: "Jennifer Torres",
            title: "Estate Planning Specialist",
            image: "/assets/img/placeholder-team.jpg",
            bio: "Jennifer specializes in crafting comprehensive estate plans that protect wealth across generations, combining technical expertise with a deep understanding of family dynamics."
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
                        <h1 className="font-vanio text-4xl md:text-5xl mb-6">Our Team</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Meet the dedicated professionals committed to your financial success
                        </p>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-vanio text-3xl text-navy mb-12 text-center">The Founders</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {founders.map((founder, index) => (
                                <div key={index} className="bg-cream rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-80">
                                        <Image
                                            src={founder.image}
                                            alt={founder.name}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <h3 className="font-vanio text-2xl text-navy mb-1">{founder.name}</h3>
                                        <p className="text-gold font-medium uppercase tracking-widest text-sm mb-4">{founder.title}</p>
                                        <p className="text-gray-600 leading-relaxed mb-6">{founder.bio}</p>
                                        <Link
                                            href={founder.link}
                                            className="inline-block px-6 py-3 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors rounded-sm text-sm"
                                        >
                                            Read Full Bio
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Members Section */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="font-vanio text-3xl text-navy mb-12 text-center">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="relative h-64 bg-gray-200">
                                        <div className="w-full h-full flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-24 h-24 text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-vanio text-xl text-navy mb-1">{member.name}</h3>
                                        <p className="text-gold font-medium uppercase tracking-widest text-xs mb-4">{member.title}</p>
                                        <p className="text-gray-600 leading-relaxed text-sm">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="font-vanio text-3xl md:text-4xl text-navy mb-6">Ready to Get Started?</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Let our team help you build a comprehensive wealth strategy tailored to your unique needs and goals.
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
