import Link from 'next/link';
import {
    Mountain, Zap, Cable, Bike, Glasses, Footprints,
    RotateCcw, Building2, TramFront, ArrowRight, CheckCircle,
    ChevronRight, Shield, Award
} from 'lucide-react';

export const metadata = {
    title: 'Services',
    description: 'Explore Adventure Sewa\'s 11 adventure setup services in Nepal — Zipline, Giant Swing, Climbing Wall, Sky Cycle, Glass Bridge, Bungee, Transport Ropeway, Corporate Adventure & more.',
    openGraph: {
        title: 'Adventure Setup Services in Nepal | Adventure Sewa',
        description: 'Complete adventure tourism setup services: Zipline, Giant Swing, Climbing Wall, Sky Cycle, Glass Bridge, Bungee Slingshot, Transport Ropeway & Corporate Adventure programs.',
    },
};

export default function ServicesPage() {
    const services = [
        {
            id: 'giant-swing',
            title: 'Giant Swing',
            subtitle: 'Thrilling Swing Experience',
            desc: 'Giant Swings can add an element of fun and thrill to any resort, natural park, mall, holiday destination, or picnic spot. Our professionally engineered giant swings are designed for maximum excitement while maintaining the highest safety standards.',
            features: ['Suitable for resorts, parks, and malls', 'Custom height and arc configurations', 'International-grade safety harnesses', 'Low maintenance design', 'Suitable for all age groups'],
            icon: <Zap size={24} />,
            image: '/images/giant-swing.png',
        },
        {
            id: 'climbing-wall',
            title: 'Climbing Wall',
            subtitle: 'Indoor & Outdoor Setups',
            desc: 'Both indoor and outdoor wall climbing setups in Nepal. Our climbing walls are designed for all skill levels — from beginners to advanced climbers. Perfect for adventure parks, corporate team-building centers, schools, and resorts.',
            features: ['Custom wall heights and difficulty levels', 'Indoor and outdoor configurations', 'Auto-belay and manual belay options', 'Durable holds and panels', 'Safety certified equipment'],
            icon: <Mountain size={24} />,
            image: '/images/climbing-wall.png',
        },
        {
            id: 'zipline',
            title: 'Zipline',
            subtitle: 'Complete Zipline Solutions',
            desc: 'End-to-end zipline setup in Nepal — from site survey and feasibility analysis to installation, testing, and ongoing maintenance. We design ziplines that maximize the natural terrain and scenic beauty of your location.',
            features: ['Site survey and terrain analysis', 'Multiple zipline configurations', 'Dual cable safety systems', 'Speed control mechanisms', 'Regular maintenance packages'],
            icon: <Cable size={24} />,
            image: '/images/zipline.png',
        },
        {
            id: 'sky-cycle',
            title: 'Sky Cycle',
            subtitle: 'Aerial Cycling Adventure',
            desc: 'Sky Cycle installations at scenic locations across Nepal. This unique adventure activity offers a thrilling aerial cycling experience that attracts visitors and significantly boosts tourism revenue for your destination.',
            features: ['Scenic route planning', 'Stable rail and cable systems', 'Weather-resistant construction', 'Low operational costs', 'High tourism appeal'],
            icon: <Bike size={24} />,
            image: '/images/sky-cycle.png',
        },
        {
            id: 'roller-coaster-zipline',
            title: 'Roller Coaster Zipline',
            subtitle: 'The Ultimate Thrill Ride',
            desc: 'An exciting combination of roller coaster and zipline that delivers a unique, adrenaline-pumping experience. The varying heights, curves, and speeds create an unforgettable ride for adventure seekers.',
            features: ['Dynamic height variations', 'Curved and straight sections', 'Speed variation design', 'Gravity-powered system', 'High repeat visitor appeal'],
            icon: <Zap size={24} />,
            image: '/images/roller-coaster-zipline.png',
        },
        {
            id: 'glass-bridge',
            title: 'Glass Bridge / Glass Walk',
            subtitle: 'Premium Scenic Attractions',
            desc: 'Stunning glass bridge and glass walk installations at scenic viewpoints across Nepal. These premium attractions draw tourists from around the world and create iconic landmarks for your destination.',
            features: ['Tempered laminated glass panels', 'Structural engineering excellence', 'Scenic viewpoint optimization', 'Anti-slip surface treatment', 'Wind and load tested'],
            icon: <Glasses size={24} />,
            image: '/images/glass-bridge.png',
        },
        {
            id: 'sky-walk',
            title: 'Sky Walk',
            subtitle: 'Walk Among the Clouds',
            desc: 'Sky walk installations that offer breathtaking views from elevated walkways. Our sky walks are designed to seamlessly integrate with the natural landscape while providing visitors with unforgettable panoramic views.',
            features: ['Elevated walkway design', 'Panoramic viewing platforms', 'Reinforced steel structure', 'Glass and mesh options', 'Accessible for all ages'],
            icon: <Footprints size={24} />,
            image: '/images/sky-walk.png',
        },
        {
            id: 'bungee-slingshot',
            title: 'Bungee Slingshot',
            subtitle: 'High-Adrenaline Experience',
            desc: 'High-quality bungee slingshot setups with international-grade safety equipment. This exciting attraction launches participants into the air, creating an extremely thrilling experience.',
            features: ['Professional-grade bungee cords', 'Hydraulic or pneumatic launch', 'Multiple rider options', 'Comprehensive safety systems', 'High repeat customer rate'],
            icon: <ArrowRight size={24} />,
            image: '/images/bungee-slingshot.png',
        },
        {
            id: 'reverse-bungee',
            title: 'Reverse Bungee',
            subtitle: 'Launch Into the Sky',
            desc: 'Reverse bungee installations that launch riders upward, delivering an intense gravitational experience. A crowd-pleasing attraction that adds excitement to any adventure park or resort.',
            features: ['Upward launch mechanism', 'Dual safety cord system', 'Adjustable launch intensity', 'Spectator-friendly design', 'Quick turnaround time'],
            icon: <RotateCcw size={24} />,
            image: '/images/reverse-bungee.png',
        },
        {
            id: 'corporate-adventure',
            title: 'Corporate Adventure',
            subtitle: 'Team Building Programs',
            desc: 'Offers corporate programs that use adventure-based activities to build teamwork, leadership, and communication skills. Customized programs for companies, organizations, and institutions across Nepal.',
            features: ['Customized team programs', 'Leadership development activities', 'Communication exercises', 'Trust-building challenges', 'Indoor and outdoor options'],
            icon: <Building2 size={24} />,
            image: '/images/corporate-adventure.png',
        },
        {
            id: 'transport-ropeway',
            title: 'Transport Ropeway',
            subtitle: 'Lifeline for Remote Areas',
            desc: 'Transport ropeway systems designed to supply goods to the hills and Himalayas of Nepal. Our ropeway installation and consultation service provides a lifeline for goods logistics, agricultural transport, and essential supplies in remote areas.',
            features: ['Heavy load capacity', 'All-terrain installation', 'Low operational cost', 'Community benefit design', 'Government project experience'],
            icon: <TramFront size={24} />,
            image: '/images/transport-ropeway.png',
        },
    ];

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Adventure Sewa Services',
        description: 'Complete list of adventure setup services offered by Adventure Sewa in Nepal',
        numberOfItems: services.length,
        itemListElement: services.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Service',
                name: s.title,
                description: s.desc,
                provider: {
                    '@type': 'LocalBusiness',
                    name: 'Adventure Sewa',
                },
                areaServed: { '@type': 'Country', name: 'Nepal' },
            },
        })),
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-separator">›</span>
                        <span>Services</span>
                    </div>
                    <h1>Our Adventure Services</h1>
                    <p>
                        Complete adventure setup solutions — from concept and feasibility study
                        to professional installation and ongoing support across Nepal.
                    </p>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--surface-white)' }}>
                <div className="container">
                    <div className="services-detail-grid">
                        {services.map((service) => (
                            <div className="service-detail-card" key={service.id} id={service.id}>
                                <div className="service-detail-image">
                                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div className="service-detail-content">
                                    <div className="section-label">{service.subtitle}</div>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <div className="service-detail-features">
                                        {service.features.map((f, i) => (
                                            <div className="service-detail-feature" key={i}>
                                                <CheckCircle size={18} />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contact" className="btn btn-primary" style={{ marginTop: 'var(--space-xl)' }}>
                                        Enquire Now <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-banner">
                <div className="container cta-content">
                    <h2>Need a Custom Adventure Setup?</h2>
                    <p>
                        Every location is unique. Contact us for a personalized consultation
                        and feasibility study tailored to your specific needs.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Get Free Consultation <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </>
    );
}
