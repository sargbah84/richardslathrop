"use client";

import dynamic from "next/dynamic";
import AnimateOnScroll from "./AnimateOnScroll";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function OriginStory() {
    // Supports YouTube URLs (e.g., "https://www.youtube.com/watch?v=VIDEO_ID")
    // or MP4 files (e.g., "/videos/intro.mp4" or "https://example.com/video.mp4")
    const videoUrl = "";

    return (
        <section id="story" className="py-24 bg-navy text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <AnimateOnScroll animation="fadeUp">
                        <h2 className="font-vanio text-4xl md:text-5xl mb-8 text-center">Who we are (the firm)</h2>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={100}>
                        <p className="text-xl text-center text-gray-300 leading-relaxed mb-12">
                            Welcome to Richards, Lathrop &amp; Associates. We&apos;re small by choice. Personal by design. And here for the long haul.
                        </p>
                    </AnimateOnScroll>

                    <AnimateOnScroll animation="fadeUp" delay={200}>
                        <div className="aspect-video bg-black/30 rounded-lg overflow-hidden">
                            <ReactPlayer
                                url={videoUrl}
                                width="100%"
                                height="100%"
                                controls
                                playing={false}
                            />
                        </div>
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}
