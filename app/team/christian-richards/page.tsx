"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function ChristianRichards() {
    const [currentImage, setCurrentImage] = useState(0);
    const videoUrl = "";

    const images = [
        "/assets/img/chris1a.JPG",
        "/assets/img/chris2a.JPG",
        "/assets/img/chris3a.JPG",
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
                        <h1 className="font-vanio text-4xl md:text-5xl mb-4">Christian P. Richards III</h1>
                        <p className="text-gold font-medium uppercase tracking-widest text-sm">President</p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Video Section */}
                        <div className="mb-16">
                            <h2 className="font-vanio text-2xl text-navy mb-6">Meet Christian</h2>
                            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                                {videoUrl ? (
                                    <ReactPlayer
                                        url={videoUrl}
                                        width="100%"
                                        height="100%"
                                        controls
                                        playing={false}
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-gray-200">
                                        <div className="text-center text-gray-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto mb-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                            </svg>
                                            <p className="text-lg font-medium">Video Coming Soon</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content Row: Carousel + Bio */}
                        <div className="flex flex-col lg:flex-row gap-12">
                            {/* Image Carousel */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative">
                                    <div className="relative w-full h-[400px] md:h-[500px] shadow-2xl rounded-lg overflow-hidden">
                                        <Image
                                            src={images[currentImage]}
                                            alt={`Christian P. Richards III - Photo ${currentImage + 1}`}
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
                                    &ldquo;From answering phones and scanning documents to building a firm that changes lives—my journey proves that integrity and hard work matter more than pedigree.&rdquo;
                                </div>
                            </div>
                        </div>

                        {/* Full Biography */}
                        <div className="mt-16">
                            <h2 className="font-vanio text-3xl text-navy mb-8">The Unconventional Path to Richards, Lathrop and Associates</h2>

                            <div className="space-y-12 text-gray-600 leading-relaxed">
                                {/* Early Life */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Early Life and Family Influence</h3>
                                    <p className="mb-4">
                                        Christian Richards&apos;s journey to founding Richards, Lathrop and Associates was far from the conventional path typically taken by wealth advisors. Unlike many in his profession, Christian did not envision himself working in finance, nor did his upbringing point him in that direction. Raised by a father who was a high school special education teacher and a mother who worked in social services, Christian&apos;s family had no history of wealth or investment experience. Before Christian became a wealth manager, no one in his immediate or extended family even owned an investment account.
                                    </p>
                                    <p>
                                        Those who watched Christian grow up often believed his future lay in athletics, pegging him as a potential track or football star. However, those closest to him knew his ambitions were much broader. Deeply influenced by his parents, Christian Jr. and Kelley Richards, who were active in their community as activists and founders of the Pacoima Wildcats—a nonprofit organization dedicated to changing the lives of local children through sports and education—Christian aspired to make an impact as a social justice advocate in law or government. If asked as a child, he would have said he planned to become a lawyer and eventually a judge.
                                    </p>
                                </div>

                                {/* Academic and Athletic */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Academic and Athletic Pursuits</h3>
                                    <p className="mb-4">
                                        Despite growing up in an environment marked by gang violence and poverty, Christian was fortunate to be nurtured in a home where intellectual growth was prioritized alongside athletic development. Excelling both academically and athletically, Christian took pride in his accomplishments in the classroom, even more than his achievements on the field. He resisted being labeled merely as &ldquo;an athlete,&rdquo; a perspective shaped by his parents&apos; encouragement and his admiration for his father, who had leveraged athletic talent into a degree from UC Berkeley. This inspired Christian to use his own athletic abilities as a stepping stone to higher education.
                                    </p>
                                    <p>
                                        With guidance and motivation from his mother Kelley, Christian set out to excel academically and athletically, aiming to earn scholarships to top universities. The first step was his admission to James Monroe High School&apos;s Law and Government Magnet. There, he distinguished himself as a champion sprinter in track and as the top-rated football player at his position in Los Angeles. Academically, he completed the demanding law and government curriculum with honors, maintaining a 3.5 GPA and earning multiple scholar-athlete awards. These achievements led to scholarship offers from prestigious institutions, including UC Berkeley, Stanford, Notre Dame, and Michigan.
                                    </p>
                                </div>

                                {/* College Experience */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">College Experience and Emerging Awareness</h3>
                                    <p>
                                        Christian chose to attend the University of Michigan, drawn by the opportunity to compete at the highest academic and athletic levels. However, he soon realized the demands of collegiate football limited his ability to take full advantage of the university&apos;s academic offerings. He also became aware of the economic disparities within college athletics, noting how the university profited greatly from sports while athletes—many from disadvantaged backgrounds—received little preparation for financial success. This realization, along with the experiences of his teammates, planted the seeds for Christian&apos;s eventual career shift.
                                    </p>
                                </div>

                                {/* Professional Football */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Transition and Professional Football</h3>
                                    <p>
                                        After his sophomore year, Christian transferred to SUNY Stony Brook University in Long Island, New York, close to Wall Street—an early indication of his future direction. He earned a bachelor&apos;s degree in history and went on to sign with the NFL&apos;s Seattle Seahawks as a free agent in 2010. During his brief professional football career, Christian attended rookie meetings with financial advisors from major firms, only to find that these advisors were uninterested in serving players without significant wealth or prospects. This experience clarified Christian&apos;s mission: to advocate for athletes and others who could benefit from wealth management, particularly those lacking financial literacy.
                                    </p>
                                </div>

                                {/* Breaking into Wealth Management */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Breaking into Wealth Management</h3>
                                    <p className="mb-4">
                                        Despite having a clear vision, Christian faced significant obstacles. With no financial resources to pursue further education and no industry contacts, he returned to California and lived with his mother. In 2011, he secured a data entry role at a small wealth management firm in Calabasas, where he worked toward the necessary licenses to become an advisor. Although he quickly outgrew this position, the size of the firm limited his advancement.
                                    </p>
                                    <p>
                                        Christian&apos;s next opportunity came at David Meltzer and Associates, a boutique firm led by David Meltzer, who also had an unconventional background. David&apos;s approach to wealth management was client-focused, with low fees and no minimum asset requirements. His philosophy was referral-based, prioritizing existing clients over chasing new business. David became Christian&apos;s mentor, supporting his goal to build a similar client-centered firm.
                                    </p>
                                </div>

                                {/* Mentorship */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Mentorship and Professional Growth</h3>
                                    <p className="mb-4">
                                        Three years later, when David Meltzer retired, Christian worried about the future. David reassured him that the firm&apos;s new owner, James &ldquo;Jim&rdquo; Regitz Jr. of Newport Advisory, LLC, would continue to guide Christian&apos;s development. Over the next seven years, Jim provided mentorship and opportunities for Christian to hone his skills as an advisor, equipping him to manage portfolios and client relationships at the highest level. Jim&apos;s gregarious personality, ability to relate to people from a myriad of backgrounds and vantage points and creative financial planning strategies were instrumental in Christian&apos;s growth.
                                    </p>
                                    <p>
                                        David Meltzer and Associates and Newport Advisory provided environments where decisions were made with the client&apos;s best interests in mind, much like the community-focused, service first philosophy Christian&apos;s parents had provided during his childhood. These experiences, however, shielded Christian from the harsher realities of the wealth management industry, where profit margins and sales growth often overshadow client-focused service.
                                    </p>
                                </div>

                                {/* Founding */}
                                <div>
                                    <h3 className="font-vanio text-2xl text-navy mb-4">Founding Richards, Lathrop and Associates</h3>
                                    <p>
                                        Richards, Lathrop and Associates was established in 2026, driven by the need to refocus the wealth management industry on serving clients rather than maximizing profits. Christian&apos;s journey, shaped by his upbringing, athletic and academic achievements, and mentorship, culminated in a firm dedicated to putting clients first and providing personalized, concierge-level service in an industry increasingly dominated by technology and scalability.
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
