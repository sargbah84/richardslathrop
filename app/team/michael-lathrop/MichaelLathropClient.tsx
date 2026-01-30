"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MichaelLathropClient() {
    const [currentImage, setCurrentImage] = useState(0);

    const images = [
        "/assets/img/mike1a.jpg",
        "/assets/img/mike2a.jpg",
        "/assets/img/mike3a.jpg",
    ];

    const nextImage = () => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="py-12 bg-navy text-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Link href="/#founders" className="inline-flex items-center text-gold hover:text-white transition-colors mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                            Back to Home
                        </Link>
                        <h1 className="font-vanio text-4xl md:text-5xl mb-4">Michael Lathrop</h1>
                        <p className="text-gold font-medium uppercase tracking-widest text-sm">Chief Investment Officer</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
{/* Video Section - commented out
                        <div className="mb-16">
                            <h2 className="font-vanio text-2xl text-navy mb-6">Meet Michael</h2>
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                    <div className="text-center text-gray-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                        <p className="text-lg font-medium">Video Coming Soon</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        */}

                        {/* Content Row: Carousel + Quote */}
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Image Carousel */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <div className="relative w-full h-[400px] md:h-[500px] shadow-2xl rounded-lg overflow-hidden">
                                        <Image
                                            src={images[currentImage]}
                                            alt={`Michael Lathrop - Photo ${currentImage + 1}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Navigation Arrows */}
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-navy/80 hover:bg-gold text-white p-3 rounded-full transition-colors"
                                        aria-label="Previous image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-navy/80 hover:bg-gold text-white p-3 rounded-full transition-colors"
                                        aria-label="Next image"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImage(index)}
                                                className={`w-3 h-3 rounded-full transition-colors ${
                                                    currentImage === index ? "bg-gold" : "bg-white/60 hover:bg-white"
                                                }`}
                                                aria-label={`Go to image ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Quote */}
                            <div className="w-full lg:w-1/2">
                                <div className="bg-cream p-8 border-l-4 border-gold italic text-gray-600 text-lg">
                                    &ldquo;We recognize that success is built on the combination of disciplined investment processes that are tailored to fit the specific needs and preferences of clients. While market volatility remains a constant, we work to provide you with structure and the confidence that you will achieve your financial goals.&rdquo;
                                </div>
                            </div>
                        </div>

                        {/* Full Biography */}
                        <div className="mt-16">
                            <h2 className="font-vanio text-3xl text-navy mb-8">The Journey to Richards, Lathrop and Associates</h2>

                            <div className="space-y-12 text-gray-600 leading-relaxed">
                                {/* Early Life */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Early Life and Foundations</h3>
                                    <p>
                                        Michael J. Lathrop was born and raised in the vibrant landscapes of Southern California, where the endless beaches and diverse communities shaped his early worldview. From a young age, he embodied a spirit of service and adventure, earning the prestigious Eagle Scout rank through the Boy Scouts of America. This achievement wasn&apos;t just a badge; it instilled in him a lifelong commitment to preparedness, community involvement, and ethical leadership. Michael was gifted with an intellectual curiosity, which combined with a drive to challenge norms, set the stage for a life dedicated to exploration and impact. On a personal level, these formative years taught him the value of resilience; scouting adventures in the rugged outdoors mirrored the internal journeys he would later undertake, fostering a deep appreciation for personal growth amid uncertainty.
                                    </p>
                                </div>

                                {/* Military Service */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Military Service and Educational Path</h3>
                                    <p>
                                        Michael&apos;s first career chapter began with an act of service: enlisting in the Marine Corps reserves to fund his college education and pave the way to becoming a commissioned officer. This decision reflected his dedication to duty and his strategic mindset, balancing immediate responsibilities with long-term aspirations. Initially drawn to history, envisioning a path steeped in narratives of the past, Michael&apos;s trajectory shifted dramatically after introductory economics courses ignited a spark. The analytical rigor and real-world applicability of economics resonated deeply with his intellectual curiosity, prompting him to pivot his major. Serving in the reserves while pursuing his degree demanded discipline and adaptability, qualities that would become cornerstones of his professional ethos.
                                    </p>
                                </div>

                                {/* Discovering Economics */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Discovering a Passion for Economics and Markets</h3>
                                    <p>
                                        As Michael delved deeper into economics, he uncovered a passion for markets that perfectly aligned with his natural inclinations toward intellectual curiosity. The dynamic interplay of supply, demand, and human behavior fascinated him, offering endless opportunities to explore complex systems. Early in his career, he gravitated toward the investment philosophies of Warren Buffett and Charlie Munger, embracing value investing as a disciplined approach rooted in fundamental analysis. This foundation served him well, but Michael&apos;s curiosity pushed him further. He witnessed market cycles where value underperformed growth-oriented strategies, prompting a critical reevaluation. Rather than clinging to dogma, he took the opportunity to step back, regain perspective and incorporate a variety of complementary, though occasionally conflicting philosophies. This evolution wasn&apos;t just professional. It mirrored a personal philosophy of adaptability, where questioning established wisdom led to richer insights. Michael&apos;s approach to diversification with a first principles approach to problem solving extended beyond markets. The approach fostered a mindset that viewed markets not as rigid structures but as evolving ecosystems influenced by global forces.
                                    </p>
                                </div>

                                {/* Evolving Philosophy */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Evolving Investment Philosophy and Challenging Norms</h3>
                                    <p>
                                        Building on this foundation, Michael&apos;s investment philosophy matured through rigorous self-education and real-world observation. By branching into multifaceted strategies, he emphasized diversification not only in assets but in perspectives—blending quantitative data with qualitative insights. This shift highlighted his commitment to service, as he sought to deliver more resilient outcomes for those he advised. Michael&apos;s willingness to evolve his thinking opened doors to broader applications, where economics intersected with global development, urging him to seek experiences beyond the confines of Western markets.
                                    </p>
                                </div>

                                {/* Global Experiences */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Global Experiences and Entrepreneurial Ventures</h3>
                                    <p>
                                        Driven by the limits of textbook learning, Michael embarked on transformative travels to immerse himself in developing economies. His first venture took him to the Republic of Georgia, a frontier market pulsating with breakneck growth. Witnessing firsthand the vibrancy and volatility of such environments challenged his preconceptions and fueled his intellectual curiosity. These experiences provided the confidence and technical knowledge needed to take a step forward into a hands-on project in the developing world. Michael cofounded a small farm in rural Liberia with a friend and colleague to cultivate cocoa in a region still recovering from two devastating civil wars. Michael&apos;s resolve was tested through navigating supply chain disruptions, cultural nuances, and infrastructural voids. Yet, these challenges illuminated the human side of economic development: stories of local farmers rebuilding lives, communities fostering hope amid adversity. This experience deepened his concept of service, extending beyond professional obligations to genuine empathy and support for stakeholders facing profound hardships.
                                    </p>
                                </div>

                                {/* Insights */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Insights from the Journey</h3>
                                    <p>
                                        The journey through these global frontiers provided Michael with invaluable insights that transcended professional growth. The complexities of international taxation motivated him to learn tax law and procedure in greater detail, earning a Masters of Taxation from Villanova University Charles Widger School of Law. Even more than the technical training, the true value was in a personal transformation gained from confronting the raw human challenges of development expanded his empathy, blending data-driven analysis with lived experiences. This synthesis directly translated to the advisory business, where Michael challenged the status quo of detached advisory roles, emphasizing holistic service that addresses both financial and emotional needs.
                                    </p>
                                </div>

                                {/* Professional Arrival */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Professional Arrival and Client-Centered Service</h3>
                                    <p>
                                        Today, Michael has arrived at a profound understanding of the intricate relationships between economics, markets, and taxation. He leverages this knowledge to help clients navigate a wide array of challenges, from wealth preservation to strategic planning, always mindful of both positive and negative impacts on individuals&apos; lives. Bridging comfort with data and statistics, honed through years of market analysis, with a deeper experiential base, Michael offers guidance that&apos;s not just technical but profoundly human. His approach challenges the status quo of one-size-fits-all advice, tailoring strategies to diverse lifestyles while fostering trust through transparency. On a personal level, Michael views his role as an extension of his life&apos;s themes: serving others with curiosity-driven insights that empower them to question and innovate in their own paths.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-16 pt-8 border-t border-gray-200">
                            <h3 className="font-vanio text-2xl text-navy mb-4">Ready to start a conversation?</h3>
                            <Link
                                href="/#contact"
                                className="inline-block px-8 py-4 bg-navy text-white font-medium tracking-wide hover:bg-gold transition-colors rounded-sm"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
