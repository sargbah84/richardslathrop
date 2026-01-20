"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function MichaelLathrop() {
    const [currentImage, setCurrentImage] = useState(0);
    const videoUrl: string | null = null;

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
                        {/* Video Section */}
                        <div className="mb-16">
                            <h2 className="font-vanio text-2xl text-navy mb-6">Meet Michael</h2>
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

                            {/* Quote + Full Bio */}
                            <div className="w-full lg:w-1/2">
                                <div className="bg-cream p-8 border-l-4 border-gold mb-8 italic text-gray-600 text-lg">
                                    &ldquo;We recognize that success is built on the combination of disciplined investment processes that are tailored to fit the specific needs and preferences of clients rather than a detached and distant decisionmaker. While market volatility will remain constant, and one trend gives way to another, we work to provide you with structure and confidence that you will achieve your financial goals.&rdquo;
                                </div>

                                <div className="space-y-6 text-gray-600 leading-relaxed">
                                    <p>
                                        With over 14 years of experience in investment management, he specializes in constructing multi-asset portfolios and has led the creation and management of specialty strategies focused on current income and aggressive growth. Michael has also managed strategies for a diverse range of mandates and clients, including high-net-worth individuals and institutions.
                                    </p>
                                    <p>
                                        Throughout his career, he has witnessed the profound impact of tax outcomes on client success, prompting him to make taxation a key focus area due to its critical role in optimizing financial results. Michael earned a Master of Taxation from Villanova Law School and a Bachelor of Arts in Economics from Chapman University. He also holds the CIMA® designation.
                                    </p>
                                    <p>
                                        Prior to his career in finance, he served in the United States Marine Corps as a Field Radio Operator based out of Camp Pendleton, California. An avid reader and student of history, Michael views it as a valuable tool for anticipating future trends and has a passion for developing actionable insights at the intersection of seemingly unrelated disciplines.
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
