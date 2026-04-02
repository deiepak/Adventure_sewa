import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react';

export const metadata = {
    title: 'Contact Us',
    description: 'Get in touch with Adventure Sewa for adventure setup consultation, feasibility studies, and project inquiries. Located in Balaju, Kathmandu, Nepal. Call: 9860133347, 9808451232.',
    openGraph: {
        title: 'Contact Adventure Sewa — Get a Free Consultation',
        description: 'Reach out for adventure setup consultation and quotes. Balaju, Kathmandu, Nepal. Phone: 9860133347, 9808451232. Email: adventuresewa@gmail.com.',
    },
};

export default function ContactPage() {
    const contactInfo = [
        { icon: <MapPin size={20} />, label: 'Our Office', value: 'Balaju, Kathmandu, Nepal' },
        { icon: <Phone size={20} />, label: 'Phone', value: '9860133347, 9808451232' },
        { icon: <Mail size={20} />, label: 'Email', value: 'adventuresewa@gmail.com' },
        { icon: <Clock size={20} />, label: 'Open Hours', value: 'All Day: 8 AM – 8 PM' },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Adventure Sewa',
        description: 'Contact page for Adventure Sewa adventure setup company in Nepal',
        url: 'https://adventuresewa.com/contact',
        mainEntity: {
            '@type': 'LocalBusiness',
            name: 'Adventure Sewa',
            telephone: ['+977-9860133347', '+977-9808451232'],
            email: 'adventuresewa@gmail.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'Balaju',
                addressLocality: 'Kathmandu',
                addressCountry: 'NP',
            },
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-separator">›</span>
                        <span>Contact</span>
                    </div>
                    <h1>Get in Touch</h1>
                    <p>
                        Ready to start your adventure project? Contact us for a free consultation
                        and let&apos;s discuss how we can bring your vision to life.
                    </p>
                </div>
            </section>

            <section className="section contact-section">
                <div className="container">
                    <div className="contact-grid">
                        <div>
                            <div className="section-label">Contact Information</div>
                            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: 'var(--space-lg)' }}>
                                Let&apos;s Discuss Your Project
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-2xl)', lineHeight: '1.8' }}>
                                Whether you need a feasibility study, cost estimation, or a complete adventure
                                park installation — we&apos;re here to help. Reach out to us through any of the
                                channels below.
                            </p>

                            <div className="contact-info-cards">
                                {contactInfo.map((info, i) => (
                                    <div className="contact-info-card" key={i}>
                                        <div className="contact-info-card-icon">{info.icon}</div>
                                        <h4>{info.label}</h4>
                                        <p>{info.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="contact-map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.5!2d85.3032!3d27.7284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQzJzQyLjIiTiA4NcKwMTgnMTEuNSJF!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Adventure Sewa Office Location — Balaju, Kathmandu, Nepal"
                                ></iframe>
                            </div>
                        </div>

                        <div className="contact-form">
                            <h3>Request a Service</h3>
                            <p>Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                            <form action="https://formsubmit.co/adventuresewa@gmail.com" method="POST">
                                <input type="hidden" name="_subject" value="New enquiry from Adventure Sewa website" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="hidden" name="_next" value="https://adventuresewa.com/contact?success=true" />

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name *</label>
                                        <input type="text" id="name" name="name" className="form-input" placeholder="Your full name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone" className="form-input" placeholder="+977 98XXXXXXXX" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email Address *</label>
                                    <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="service">Service Interested In</label>
                                    <select id="service" name="service" className="form-select">
                                        <option value="">Select a service</option>
                                        <option value="Giant Swing">Giant Swing</option>
                                        <option value="Climbing Wall">Climbing Wall</option>
                                        <option value="Zipline">Zipline</option>
                                        <option value="Sky Cycle">Sky Cycle</option>
                                        <option value="Roller Coaster Zipline">Roller Coaster Zipline</option>
                                        <option value="Glass Bridge / Walk">Glass Bridge / Glass Walk</option>
                                        <option value="Sky Walk">Sky Walk</option>
                                        <option value="Bungee Slingshot">Bungee Slingshot</option>
                                        <option value="Reverse Bungee">Reverse Bungee</option>
                                        <option value="Corporate Adventure">Corporate Adventure</option>
                                        <option value="Transport Ropeway">Transport Ropeway</option>
                                        <option value="Feasibility Study">Feasibility Study / Consultancy</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="location">Project Location</label>
                                    <input type="text" id="location" name="location" className="form-input" placeholder="e.g., Pokhara, Nepal" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Your Message *</label>
                                    <textarea id="message" name="message" className="form-input" placeholder="Tell us about your project requirements..." rows="5" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                                    <Send size={18} /> Submit Enquiry
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
