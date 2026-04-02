import Link from 'next/link';
import {
  Mountain, ArrowRight, Phone, Mail, Star, Quote,
  Shield, DollarSign, Users, Compass, Zap, Cable,
  Bike, Glasses, Footprints, RotateCcw, Building2,
  TramFront, CheckCircle, ChevronRight, Award, MapPin
} from 'lucide-react';

export default function HomePage() {
  const services = [
    { id: 'giant-swing', title: 'Giant Swing', desc: 'Add an element of thrill and fun to any resort, natural park, mall, or holiday destination with our professionally engineered giant swings.', icon: <Zap size={20} />, image: '/images/giant-swing.png' },
    { id: 'climbing-wall', title: 'Climbing Wall', desc: 'Indoor and outdoor wall climbing setups designed for all skill levels. Perfect for adventure parks, resorts, corporate centers, and schools across Nepal.', icon: <Mountain size={20} />, image: '/images/climbing-wall.png' },
    { id: 'zipline', title: 'Zipline', desc: 'End-to-end zipline setup in Nepal — from site survey and feasibility analysis to installation, testing, and ongoing maintenance support.', icon: <Cable size={20} />, image: '/images/zipline.png' },
    { id: 'sky-cycle', title: 'Sky Cycle', desc: 'Thrilling sky cycle installations at scenic locations. A unique adventure activity that attracts visitors and boosts tourism revenue.', icon: <Bike size={20} />, image: '/images/sky-cycle.png' },
    { id: 'roller-coaster-zipline', title: 'Roller Coaster Zipline', desc: 'An exciting blend of roller coaster and zipline, delivering a unique adrenaline-pumping experience for adventure seekers.', icon: <Zap size={20} />, image: '/images/roller-coaster-zipline.png' },
    { id: 'glass-bridge', title: 'Glass Bridge / Walk', desc: 'Stunning glass bridge and glass walk installations at scenic viewpoints. A premium attraction that draws tourists from around the world.', icon: <Glasses size={20} />, image: '/images/glass-bridge.png' },
    { id: 'bungee-slingshot', title: 'Bungee Slingshot', desc: 'High-quality bungee slingshot setups with international-grade safety equipment. An exciting attraction for any adventure destination.', icon: <ArrowRight size={20} />, image: '/images/bungee-slingshot.png' },
    { id: 'transport-ropeway', title: 'Transport Ropeway', desc: 'Ropeway systems designed to transport goods across the hilly and mountainous terrain of Nepal — a lifeline for remote communities.', icon: <TramFront size={20} />, image: '/images/transport-ropeway.png' },
  ];

  const whyUs = [
    { icon: <Shield size={28} />, title: 'Safety First', desc: 'We use only international-grade safety equipment from trusted brands like Petzl, Mammut, and Skylotec.' },
    { icon: <Award size={28} />, title: '10+ Years Experience', desc: 'Our team has been developing adventure activities for over a decade with expertise in all terrains.' },
    { icon: <DollarSign size={28} />, title: 'Best Value', desc: 'Competitive pricing with detailed ROI calculations and feasibility studies to maximize your investment.' },
    { icon: <Users size={28} />, title: 'End-to-End Service', desc: 'From planning and design to installation, testing, and ongoing support — we handle everything.' },
    { icon: <Compass size={28} />, title: 'All Terrain Experts', desc: 'Our team is experienced in performing offbeat work across all locations in Nepal, from hills to plains.' },
    { icon: <CheckCircle size={28} />, title: 'Proven Results', desc: '100+ successful installations at resorts, parks, and tourist destinations across Nepal.' },
  ];

  const brands = ['Petzl', 'Mammut', 'Skylotec', 'Head Rush', 'Usha Martin', 'Camp', 'Cassin', 'Edelrid'];

  const testimonials = [
    { name: 'Rajesh Shrestha', role: 'Resort Owner, Pokhara', text: 'Adventure Sewa transformed our resort with a world-class zipline installation. The professionalism and safety standards were exceptional. Our bookings have increased by 60% since the installation.', initials: 'RS' },
    { name: 'Sunita Gurung', role: 'Tourism Developer', text: 'The feasibility study and ROI projections provided by Adventure Sewa were incredibly thorough. They helped us make an informed decision about our adventure park investment in Chitwan.', initials: 'SG' },
    { name: 'Ankit Tamang', role: 'Park Manager, Nagarkot', text: 'From climbing walls to sky cycles, Adventure Sewa delivered everything on time and within budget. Their use of international safety brands gives us complete confidence in the installations.', initials: 'AT' },
  ];

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-grid">
            <div>
              <div className="hero-badge">
                <Mountain size={14} />
                Nepal&apos;s #1 Adventure Setup Company
              </div>
              <h1>
                Build Your Dream <span className="highlight">Adventure Park</span> in Nepal
              </h1>
              <p className="hero-description">
                From feasibility studies to full installation — we help you plan, develop,
                and launch world-class adventure tourism activities with international safety standards.
              </p>
              <div className="hero-buttons">
                <Link href="/contact" className="btn btn-primary">
                  Get Free Consultation <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn btn-secondary">
                  Explore Services
                </Link>
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-number">10+</div>
                  <div className="hero-stat-label">Years Experience</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">100+</div>
                  <div className="hero-stat-label">Projects Done</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-number">11</div>
                  <div className="hero-stat-label">Services Offered</div>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-grid">
                <div className="hero-image-card">
                  <img src="/images/zipline.png" alt="Zipline setup in Nepal mountains" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="hero-image-label">Zipline Setup</div>
                </div>
                <div className="hero-image-card">
                  <img src="/images/climbing-wall.png" alt="Outdoor climbing wall adventure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="hero-image-label">Climbing Wall</div>
                </div>
                <div className="hero-image-card">
                  <img src="/images/sky-cycle.png" alt="Sky cycle aerial adventure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="hero-image-label">Sky Cycle</div>
                </div>
                <div className="hero-image-card">
                  <img src="/images/glass-bridge.png" alt="Glass bridge with mountain views" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="hero-image-label">Glass Bridge</div>
                </div>
              </div>
              <div className="hero-floating">
                <div className="hero-floating-title">Trusted Safety Brands</div>
                <div className="hero-floating-brands">Petzl · Mammut · Skylotec</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="services-header">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our Adventure Services</h2>
            <p className="section-subtitle">
              Complete adventure setup solutions — from concept and feasibility study
              to installation and ongoing support across Nepal.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <Link href={`/services#${service.id}`} key={service.id} style={{ textDecoration: 'none' }}>
                <div className="service-card">
                  <div className="service-card-image">
                    <img src={service.image} alt={service.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div className="service-card-icon">{service.icon}</div>
                  </div>
                  <div className="service-card-body">
                    <h3 className="service-card-title">{service.title}</h3>
                    <p className="service-card-desc">{service.desc}</p>
                    <div className="service-card-link">Learn More <ChevronRight size={14} /></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper">
              <div className="about-image">
                <img src="/images/adventure-team.png" alt="Adventure Sewa team installing equipment in Nepal mountains" style={{ width: '100%', height: '100%', minHeight: '350px', objectFit: 'cover' }} />
              </div>
              <div className="about-experience-badge">
                <div className="number">10+</div>
                <div className="label">Years of<br />Experience</div>
              </div>
            </div>
            <div>
              <div className="section-label">About Us</div>
              <h2 className="section-title">Nepal&apos;s Leading Adventure Setup &amp; Consultant</h2>
              <p className="about-text">
                Adventure Sewa is a youth-led company ready to undertake any job related to adventure
                and tourism setup in Nepal. We prepare comprehensive feasibility studies, detailed ROI
                calculations, SWOT analysis reports, and provide honest, scientific suggestions tailored
                to each client&apos;s requirements.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <div className="about-feature-icon"><Shield size={22} /></div>
                  <div>
                    <h4>Quality Materials</h4>
                    <p>International-grade safety equipment</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><DollarSign size={22} /></div>
                  <div>
                    <h4>Best Price</h4>
                    <p>Competitive &amp; transparent pricing</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><Compass size={22} /></div>
                  <div>
                    <h4>Risk Assessment</h4>
                    <p>Thorough safety evaluations</p>
                  </div>
                </div>
                <div className="about-feature">
                  <div className="about-feature-icon"><Users size={22} /></div>
                  <div>
                    <h4>Logistical Planning</h4>
                    <p>End-to-end project management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="section why-section">
        <div className="container">
          <div className="services-header">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-title">What Sets Us Apart</h2>
            <p className="section-subtitle">
              We bring together expertise, quality, and commitment to deliver the best
              adventure setup experience in Nepal.
            </p>
          </div>
          <div className="why-grid">
            {whyUs.map((item, i) => (
              <div className="why-card" key={i}>
                <div className="why-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section cta-banner">
        <div className="container cta-content">
          <h2>Need Help Setting Up Your Adventure Park?</h2>
          <p>
            Call us anytime for a free consultation. Our experts are ready to help
            you turn your vision into reality.
          </p>
          <div className="cta-contacts">
            <a href="tel:+9779860133347" className="cta-contact-item">
              <div className="cta-contact-icon"><Phone size={22} /></div>
              <div>
                <div className="cta-contact-label">Call Us</div>
                <div className="cta-contact-value">9860133347</div>
              </div>
            </a>
            <a href="tel:+9779808451232" className="cta-contact-item">
              <div className="cta-contact-icon"><Phone size={22} /></div>
              <div>
                <div className="cta-contact-label">Call Us</div>
                <div className="cta-contact-value">9808451232</div>
              </div>
            </a>
            <a href="mailto:adventuresewa@gmail.com" className="cta-contact-item">
              <div className="cta-contact-icon"><Mail size={22} /></div>
              <div>
                <div className="cta-contact-label">Email Us</div>
                <div className="cta-contact-value">adventuresewa@gmail.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="services-header">
            <div className="section-label" style={{ color: 'var(--accent-light)' }}>Testimonials</div>
            <h2 className="section-title section-title-light">What Our Clients Say</h2>
            <p className="section-subtitle" style={{ color: 'var(--text-on-dark-muted)', margin: '0 auto' }}>
              Trusted by resort owners, tourism developers, and park managers across Nepal.
            </p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRANDS ===== */}
      <section className="section brands-section">
        <div className="container">
          <div className="section-label" style={{ justifyContent: 'center' }}>Trusted Partners</div>
          <h2 className="section-title" style={{ textAlign: 'center' }}>International Safety Brands We Use</h2>
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            We use only the finest international safety equipment brands, ensuring the highest level
            of confidence and safety standards for every installation.
          </p>
          <div className="brands-grid">
            {brands.map((brand) => (
              <div className="brand-card" key={brand}>
                <span>{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
