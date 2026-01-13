import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
            <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <div className="relative h-12 w-48">
                        <Image
                            src="/assets/img/logo.png"
                            alt="Richards, Lathrop & Associates"
                            fill
                            sizes="192px"
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                <nav className="hidden md:flex items-center space-x-8">
                    <Link href="#story" className="text-sm font-medium tracking-wide text-navy hover:text-gold transition-colors">
                        Our Story
                    </Link>
                    <Link href="#founders" className="text-sm font-medium tracking-wide text-navy hover:text-gold transition-colors">
                        The Founders
                    </Link>
                    <Link href="#approach" className="text-sm font-medium tracking-wide text-navy hover:text-gold transition-colors">
                        Our Approach
                    </Link>
                    <Link href="#contact" className="px-6 py-2 bg-navy text-white text-sm font-medium tracking-wide hover:bg-gold transition-colors">
                        Work With Us
                    </Link>
                </nav>

                {/* Mobile Menu Button (Placeholder) */}
                <button className="md:hidden text-navy">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
