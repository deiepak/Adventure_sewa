import Link from 'next/link';
import { Mountain, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, ArrowUpRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-about">
                        <Link href="/" className="logo">
                            <span className="logo-icon"><Mountain size={20} /></span>
                            Adventure<span>Sewa</span>
                        </Link>
                        <p>
                            Nepal&apos;s leading adventure setup and consultancy company. We specialize in planning,
                            development, installation, and support for adventure tourism activities across Nepal.
                        </p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/adventuresewa" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://www.instagram.com/adventuresewa" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" aria-label="YouTube">
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4>Our Services</h4>
                        <div className="footer-links">
                            <Link href="/services#giant-swing">Giant Swing</Link>
                            <Link href="/services#zipline">Zipline Setup</Link>
                            <Link href="/services#climbing-wall">Climbing Wall</Link>
                            <Link href="/services#sky-cycle">Sky Cycle</Link>
                            <Link href="/services#glass-bridge">Glass Bridge</Link>
                            <Link href="/services#transport-ropeway">Transport Ropeway</Link>
                        </div>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <div className="footer-links">
                            <Link href="/about">About Company</Link>
                            <Link href="/services">Our Services</Link>
                            <Link href="/projects">Projects</Link>
                            <Link href="/contact">Contact Us</Link>
                        </div>
                    </div>

                    <div>
                        <h4>Contact Info</h4>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon"><MapPin size={16} /></div>
                            <div className="footer-contact-text">Balaju, Kathmandu, Nepal</div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon"><Phone size={16} /></div>
                            <div className="footer-contact-text">
                                <a href="tel:+9779860133347">9860133347</a><br />
                                <a href="tel:+9779808451232">9808451232</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon"><Mail size={16} /></div>
                            <div className="footer-contact-text">
                                <a href="mailto:adventuresewa@gmail.com">adventuresewa@gmail.com</a>
                            </div>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon"><Clock size={16} /></div>
                            <div className="footer-contact-text">All Day: 8:00 AM – 8:00 PM</div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Adventure Sewa. All Rights Reserved.</p>
                    <div className="footer-bottom-links">
                        <Link href="/about">About</Link>
                        <Link href="/services">Services</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
