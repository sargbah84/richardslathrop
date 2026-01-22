import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0f1a2e] text-white py-16">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_1.5fr] gap-12 mb-12">
                    {/* Column 1: Brand */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase" style={{ fontFamily: 'Georgia, serif' }}>Richards, Lathrop &amp; Associates</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            An independently owned boutique wealth management firm dedicated to client prosperity above all else.
                        </p>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Navigation</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/story" className="hover:text-gold transition-colors">Our Story</Link></li>
                            <li><Link href="/team" className="hover:text-gold transition-colors">Our Team</Link></li>
                            <li><Link href="/#approach" className="hover:text-gold transition-colors">Our Approach</Link></li>
                            <li><Link href="/#contact" className="hover:text-gold transition-colors">Work With Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link href="/services#financial-planning" className="hover:text-gold transition-colors">Financial Planning</Link></li>
                            <li><Link href="/services#tax-optimization" className="hover:text-gold transition-colors">Tax Optimization</Link></li>
                            <li><Link href="/services#asset-protection" className="hover:text-gold transition-colors">Asset Protection</Link></li>
                            <li><Link href="/services#estate-planning" className="hover:text-gold transition-colors">Estate Planning</Link></li>
                            <li><Link href="/services#philanthropic-giving" className="hover:text-gold transition-colors">Philanthropic Giving</Link></li>
                            <li><Link href="/services#investment-management" className="hover:text-gold transition-colors">Investment Management</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Get In Touch */}
                    <div className="space-y-6">
                        <h4 className="text-gold text-sm font-bold tracking-widest uppercase">Get In Touch</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li>Email: <a href="mailto:Info@richardslathrop.com" className="hover:text-gold transition-colors">Info@richardslathrop.com</a></li>
                            <li>Phone: <a href="tel:323-426-7003" className="hover:text-gold transition-colors">323-426-7003</a></li>
                            <li className="whitespace-nowrap">9870 Research Drive<br />Irvine, CA 92618</li>
                            <li className="whitespace-nowrap">6320 Canoga Avenue, Suite 1480<br />Woodland Hills, CA 91367</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 text-center text-xs text-gray-500 space-y-4">
                    <p>&copy; {new Date().getFullYear()} Richards, Lathrop & Associates.</p>
                    <p>Check the background of your financial professional on FINRA&apos;s <a href="https://brokercheck.finra.org/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">BrokerCheck</a>.</p>
                    <p>The content is developed from sources believed to be providing accurate information. The information in this material is not intended as tax or legal advice. Please consult legal or tax professionals for specific information regarding your individual situation. Some of this material was developed and produced by FMG Suite to provide information on a topic that may be of interest. FMG Suite is not affiliated with the named representative, broker - dealer, state - or SEC - registered investment advisory firm. The opinions expressed and material provided are for general information, and should not be considered a solicitation for the purchase or sale of any security.</p>
                    <p>We take protecting your data and privacy very seriously. As of January 1, 2020 the California Consumer Privacy Act (CCPA) suggests the following link as an extra measure to safeguard your data: Do not sell my personal information.</p>
                    <p>Cooper McManus is a SEC Registered Investment Advisory Firm. Securities offered through Cambridge Investment Research Inc., a Registered Broker Dealer, Member FINRA/SIPC. Cooper McManus and Cambridge Investment Research, Inc. are not affiliated. This site is published for the residents of the United States and is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security or product that may be referenced herein. Persons mentioned on this website may only offer services, transact business and/or respond to inquiries in states or jurisdictions in which they have been properly registered or are exempt from registration. Not all products and services referenced on this site are available in every state, jurisdiction or from every person listed. The third-party comments displayed are not verified, may not be accurate and are not necessarily representative of our client experience. Cambridge Investment Research, Inc. and its representatives do not provide tax or legal advice.</p>
                    <p>Cooper Financial Group dba Cooper McManus is a Registered Investment Adviser. Advisory services are only offered to clients or prospective clients where Cooper McManus and its representatives are properly licensed or exempt from licensure. This website is solely for informational purposes. Past performance is no guarantee of future returns. Investing involves risk and possible loss of principal capital. No advice may be rendered by Cooper McManus unless a client service agreement is in place.</p>
                    <p>The presentations and videos on this website are for general informational purposes only and are not intended to provide specific advice or recommendations for any individual or on any specific security. They are only intended to provide education about the financial industry. To determine which investments may be appropriate for you, consult your financial advisor prior to investing. Any past performance discussed during this program is no guarantee of future results. Any indices referenced for comparison are unmanaged and cannot be invested into directly. As always please remember investing involves risk and possible loss of principal capital; please seek advice from a licensed professional. Cooper Financial Group dba Cooper McManus is a registered investment adviser. Advisory services are only offered to clients or prospective clients where Cooper McManus and its representatives are properly licensed or exempt from licensure. No advice may be rendered by Cooper McManus unless a client service agreement is in place.</p>
                </div>
            </div>
        </footer>
    );
}
