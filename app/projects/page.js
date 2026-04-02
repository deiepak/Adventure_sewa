import Link from 'next/link';
import { MapPin, ArrowRight, Cable, Mountain, Bike, Glasses, Zap, TramFront } from 'lucide-react';

export const metadata = {
    title: 'Projects',
    description: 'View Adventure Sewa\'s portfolio of completed adventure setup projects across Nepal — ziplines, climbing walls, sky cycles, glass bridges, and more.',
    openGraph: {
        title: 'Our Projects — Adventure Sewa Nepal',
        description: 'Explore our portfolio of adventure tourism projects across Nepal. From ziplines in Pokhara to glass bridges in the Himalayas.',
    },
};

export default function ProjectsPage() {
    const projects = [
        {
            title: 'Zipline Installation — Pokhara Lakeside',
            location: 'Pokhara, Nepal',
            desc: 'A 500-meter dual zipline installation overlooking Phewa Lake with panoramic views of the Annapurna range. Designed for high tourist throughput with dual-cable safety systems.',
            tags: ['Zipline', 'Tourism', 'Lakeside'],
            icon: <Cable size={40} />,
            image: '/images/zipline.png',
        },
        {
            title: 'Adventure Park Setup — Nagarkot',
            location: 'Nagarkot, Bhaktapur',
            desc: 'Complete adventure park with climbing wall, giant swing, and sky cycle installations. A multi-activity destination attracting both domestic and international tourists.',
            tags: ['Climbing Wall', 'Giant Swing', 'Sky Cycle'],
            icon: <Mountain size={40} />,
            image: '/images/climbing-wall.png',
        },
        {
            title: 'Glass Bridge — Parbat',
            location: 'Parbat, Nepal',
            desc: 'A stunning 60-meter glass bridge spanning a deep gorge with views of the Dhaulagiri range. Built with tempered laminated glass panels and anti-slip surface treatment.',
            tags: ['Glass Bridge', 'Tourism', 'Scenic'],
            icon: <Glasses size={40} />,
            image: '/images/glass-bridge.png',
        },
        {
            title: 'Sky Cycle — Dhulikhel Resort',
            location: 'Dhulikhel, Kavre',
            desc: 'Sky cycle installation at a premier hillside resort. The 200-meter aerial track offers thrilling views of the Himalayan panorama and Kathmandu valley.',
            tags: ['Sky Cycle', 'Resort', 'Hilltop'],
            icon: <Bike size={40} />,
            image: '/images/sky-cycle.png',
        },
        {
            title: 'Transport Ropeway — Gorkha',
            location: 'Gorkha, Nepal',
            desc: 'A transport ropeway system connecting a remote hillside community to the nearest road. Designed to carry essential supplies, agricultural goods, and materials across challenging terrain.',
            tags: ['Ropeway', 'Community', 'Transport'],
            icon: <TramFront size={40} />,
            image: '/images/transport-ropeway.png',
        },
        {
            title: 'Corporate Adventure Center — Kathmandu',
            location: 'Kathmandu, Nepal',
            desc: 'An indoor-outdoor corporate adventure facility featuring climbing walls, rope courses, and team-building activities. Designed for companies and organizations seeking unique team experiences.',
            tags: ['Corporate', 'Indoor', 'Team Building'],
            icon: <Zap size={40} />,
            image: '/images/corporate-adventure.png',
        },
    ];

    return (
        <>
            <section className="page-hero">
                <div className="container">
                    <div className="breadcrumb">
                        <Link href="/">Home</Link>
                        <span className="breadcrumb-separator">›</span>
                        <span>Projects</span>
                    </div>
                    <h1>Our Projects</h1>
                    <p>
                        Explore our portfolio of completed adventure installations across Nepal —
                        each project built with precision, safety, and a passion for adventure.
                    </p>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--surface-white)' }}>
                <div className="container">
                    <div className="projects-grid">
                        {projects.map((project, i) => (
                            <div className="project-card" key={i}>
                                <div className="project-card-image">
                                    <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className="project-card-overlay">
                                        <div className="project-card-location">
                                            <MapPin size={12} /> {project.location}
                                        </div>
                                    </div>
                                </div>
                                <div className="project-card-body">
                                    <h3>{project.title}</h3>
                                    <p>{project.desc}</p>
                                    <div className="project-card-tags">
                                        {project.tags.map((tag, j) => (
                                            <span className="project-tag" key={j}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section cta-banner">
                <div className="container cta-content">
                    <h2>Want Your Project Featured Here?</h2>
                    <p>
                        Let&apos;s discuss your adventure project. Our team will help you plan,
                        design, and build a world-class adventure destination.
                    </p>
                    <Link href="/contact" className="btn btn-primary">
                        Start Your Project <ArrowRight size={18} />
                    </Link>
                </div>
            </section>
        </>
    );
}
