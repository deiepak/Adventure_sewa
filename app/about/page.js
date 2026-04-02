import Link from 'next/link';
import {
    Mountain, Shield, DollarSign, Users, Compass, Target,
    CheckCircle, Heart, Eye, Award, Lightbulb, ChevronRight, ArrowRight
} from 'lucide-react';

export const metadata = {
    title: 'About Us',
    description: 'Learn about Adventure Sewa — Nepal\'s leading adventure setup and consultancy company with 10+ years of experience in zipline, climbing wall, sky cycle, and glass bridge installations.',
    openGraph: {
        title: 'About Adventure Sewa — Nepal\'s #1 Adventure Setup Company',
        description: 'Youth-led adventure tourism consultancy with 10+ years of experience. Feasibility studies, ROI calculations, and end-to-end adventure park installations across Nepal.',
    },
};

export default function AboutPage() {
    const values = [
        { icon: <Shield size={24} />, title: 'Safety Excellence', desc: 'Every installation meets international safety standards using premium brands like Petzl and Mammut.' },
        { icon: <Heart size={24} />, title: 'Client First', desc: 'We provide honest, scientific suggestions tailored to each client\'s unique needs and budget.' },
        { icon: <Eye size={24} />, title: 'Transparency', desc: 'Detailed feasibility studies and ROI projections so you make informed investment decisions.' },
        { icon: <Lightbulb size={24} />, title: 'Innovation', desc: 'We continuously adopt new technologies and global best practices in adventure setup.' },
    ];

    const approach = [
        { step: '01', title: 'Consultation', desc: 'Understanding your vision, location, and requirements' },
        { step: '02', title: 'Feasibility Study', desc: 'Site survey, ROI analysis, and SWOT assessment' },
        { step: '03', title: 'Installation', desc: 'Professional setup with international-grade equipment' },
        { step: '04', title: 'Support', desc: 'Ongoing maintenance, training, and technical support' },
    ];

    return (
        <>
            {/* Page Hero */}
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-separator">›</span>
                        <span>About Us</span>
                    </div>
                    <h1>About Adventure Sewa</h1>
                    <p>
                        Nepal&apos;s youth-led adventure setup company with over 10 years of experience
                        in transforming locations into world-class adventure destinations.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="section about-mission">
                <div className="container">
                    <div className="about-mission-grid">
                        <div>
                            <div className="section-label">Our Story</div>
                            <h2 className="section-title">Building Nepal&apos;s Adventure Future</h2>
                            <p className="about-text">
                                Adventure Sewa was founded with a simple yet powerful vision — to make Nepal a
                                global hub for adventure tourism. As a youth-led company, we bring fresh energy,
                                innovative thinking, and relentless dedication to every project we undertake.
                            </p>
                            <p className="about-text">
                                Over the last decade, we have established ourselves as Nepal&apos;s most trusted
                                adventure setup and consultancy company. We prepare comprehensive feasibility studies,
                                detailed ROI calculations, SWOT analysis reports, and provide honest, scientific
                                suggestions as per each client&apos;s requirement.
                            </p>
                            <p className="about-text">
                                Whether it&apos;s setting up a zipline at a hilltop resort, installing a glass bridge
                                at a scenic viewpoint, or building a complete adventure amusement park — we deliver
                                excellence from concept to completion.
                            </p>
                            <Link href="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                                Work With Us <ArrowRight size={18} />
                            </Link>
                        </div>
                        <div className="about-image-wrapper">
                            <div className="about-image">
                                <img src="/images/adventure-team.png" alt="Adventure Sewa team installing equipment in Nepal mountains" style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover' }} />
                            </div>
                            <div className="about-experience-badge">
                                <div className="number">10+</div>
                                <div className="label">Years of<br />Experience</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <div className="services-header">
                        <div className="section-label">Our Values</div>
                        <h2 className="section-title">What Drives Us</h2>
                        <p className="section-subtitle">
                            Our core values guide every decision we make and every project we deliver.
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((v, i) => (
                            <div className="value-card" key={i}>
                                <div className="value-card-icon">{v.icon}</div>
                                <h4>{v.title}</h4>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="section about-mission">
                <div className="container">
                    <div className="services-header">
                        <div className="section-label">Our Process</div>
                        <h2 className="section-title">How We Work</h2>
                        <p className="section-subtitle">
                            A proven 4-step approach that ensures every project is delivered
                            on time, on budget, and to the highest standards.
                        </p>
                    </div>
                    <div className="approach-steps">
                        {approach.map((a, i) => (
                            <div className="approach-step" key={i}>
                                <div className="approach-step-number">{a.step}</div>
                                <h4>{a.title}</h4>
                                <p>{a.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-banner">
                <div className="container cta-content">
                    <h2>Ready to Build Your Adventure Destination?</h2>
                    <p>Get in touch today for a free consultation and feasibility assessment.</p>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link href="/contact" className="btn btn-primary">
                            Get Free Consultation <ArrowRight size={18} />
                        </Link>
                        <Link href="/services" className="btn btn-secondary">
                            Explore Services
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
