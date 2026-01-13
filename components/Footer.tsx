import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0f1a2e] text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>Richards, Lathrop &amp; Associates</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            An independently owned boutique wealth management firm dedicated to client prosperity above all else. No corporate agendas.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Navigation</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="#story" className="hover:text-gold transition-colors">Our Story</Link></li>
                            <li><Link href="#founders" className="hover:text-gold transition-colors">The Founders</Link></li>
                            <li><Link href="#approach" className="hover:text-gold transition-colors">Our Approach</Link></li>
                            <li><Link href="#contact" className="hover:text-gold transition-colors">Work With Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="#" className="hover:text-gold transition-colors">Wealth Management</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Portfolio Construction</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Tax Optimization</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Estate Planning</Link></li>
                            <li><Link href="#" className="hover:text-gold transition-colors">Succession Planning</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Get In Touch */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Get In Touch</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>Email: info@rlassociates.com</li>
                            <li>Phone: (555) 123-4567</li>
                            <li><Link href="#contact" className="hover:text-gold transition-colors">Schedule a consultation →</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Richards, Lathrop & Associates. Independently owned and operated. Investment advisory services offered through RL&A.</p>
                </div>
            </div>
        </footer>
    );
}
