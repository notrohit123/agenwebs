import React, { useState, useEffect } from 'react';
import './landingpage.css';

const LandingPage = () => {
  const [displayText, setDisplayText] = useState('');
  const [changingWord, setChangingWord] = useState('faster');
  const words = ['Faster', 'Smart', 'Talent'];
  
  useEffect(() => {
    let wordIndex = 0;
    const wordInterval = setInterval(() => {
      wordIndex = (wordIndex + 1) % words.length;
      setChangingWord(words[wordIndex]);
    }, 2000);

    return () => clearInterval(wordInterval);
  }, []);

  const profiles = [
    {
      name: "James Samerton",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&dpr=2&q=80",
    },
    {
      name: "Queen Raturly",
      role: "Digital Marketing",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&dpr=2&q=80",
    },
    {
      name: "Wanderson James",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&dpr=2&q=80",
    },
    {
      name: "Sabrina Ulyana",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&dpr=2&q=80",
    },
    {
      name: "Alex Chen",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&dpr=2&q=80",
    },
    {
      name: "Sarah Miller",
      role: "Data Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&dpr=2&q=80",
    },
    {
      name: "Michael Park",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&dpr=2&q=80",
    },
    {
      name: "Emma Wilson",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&dpr=2&q=80",
    }
  ];

  const [activeTab, setActiveTab] = useState('recruiter');

  // Separate testimonials for recruiters and freelancers
  const recruiterTestimonials = [
    {
      text: "Exceeded our hiring expectations. Found top talent quickly and efficiently - a game-changer for our recruitment process.",
      author: "Sarah Mitchell",
      role: "Head of Talent Acquisition"
    },
    {
      text: "The AI matching algorithm saves us countless hours. Quality candidates, faster hiring, better results.",
      author: "James Wilson",
      role: "HR Director"
    },
    {
      text: "Streamlined our entire recruitment process. The quality of candidates has been consistently outstanding.",
      author: "Emily Chen",
      role: "Technical Recruiter"
    },
    {
      text: "Revolutionary platform for modern hiring. We've reduced time-to-hire by 60% with better matches.",
      author: "Michael Park",
      role: "Recruitment Lead"
    },
    {
      text: "Perfect balance of technology and human touch. Makes finding the right talent effortless.",
      author: "Lisa Thompson",
      role: "Hiring Manager"
    },
    {
      text: "The best recruitment platform we've used. Intuitive, efficient, and delivers results.",
      author: "David Rodriguez",
      role: "VP of Human Resources"
    }
  ];

  const freelancerTestimonials = [
    {
      text: "Found amazing clients that align with my skills. My freelance career has grown exponentially.",
      author: "Alex Chen",
      role: "Full Stack Developer"
    },
    {
      text: "The platform understands my expertise perfectly. High-quality project matches every time.",
      author: "Maria Garcia",
      role: "UX Designer"
    },
    {
      text: "Transformed my freelancing journey. Better clients, better projects, better income.",
      author: "John Smith",
      role: "Digital Marketing Specialist"
    },
    {
      text: "Finally, a platform that truly values freelancer skills. The opportunities are outstanding.",
      author: "Sophie Williams",
      role: "Content Strategist"
    },
    {
      text: "Seamless experience from project matching to payment. Best freelancing platform hands down.",
      author: "Ryan Taylor",
      role: "Mobile Developer"
    },
    {
      text: "The AI matching is spot-on. I get projects that perfectly match my expertise.",
      author: "Emma Brown",
      role: "Data Scientist"
    }
  ];

  const handleScroll = (direction) => {
    const container = document.querySelector('.blogs-grid');
    const scrollAmount = 300; // Adjust based on card width + gap
    
    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="landing-container">
      <header className="site-header">
        <div className="header-content">
          <a href="#" className="logo">
            roco
          </a>
          
          <nav className="main-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="auth-buttons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
      </header>
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Hiring with <span className="gradient-text">AI-Powered</span> Talent Matching
          </h1>
          <p className="hero-subtitle">
            Find exceptional talent in minutes, not days. Our intelligent platform matches you with verified experts who align perfectly with your project needs and company culture.
          </p>

          <div className="hero-buttons">
            <button className="get-started-btn">Get Started</button>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>

        <div className="profile-scroll">
          <div className="profile-track">
            {[...profiles, ...profiles].map((profile, index) => (
              <div key={index} className="profile-card">
                <img 
                  src={profile.image} 
                  alt={profile.role} 
                  className="profile-image" 
                />
                <div className="profile-info">
                  <p>{profile.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="features-new-section">
        <div className="features-new-container">
          <div className="features-new-header">
            <div className="section-badge">Why Roco?</div>
            <h2>Our features</h2>
            <p className="features-subtitle">
              Empowering recruiters and freelancers with AI-driven tools for seamless hiring and collaboration
            </p>
          </div>

          <div className="features-new-grid">
            <div className="feature-new-card">
              <div className="feature-icon">
                <i className="fas fa-brain"></i>
              </div>
              <span className="caption">Smart Matching</span>
              <h3>AI-Powered Matching</h3>
              <p>Instantly connect with ideal candidates using our advanced AI matching algorithm.</p>
            </div>

            <div className="feature-new-card">
              <div className="feature-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <span className="caption">Quality Assurance</span>
              <h3>Verified Talent</h3>
              <p>Access pre-vetted professionals with verified skills and proven experience.</p>
            </div>

            <div className="feature-new-card">
              <div className="feature-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <span className="caption">Smart Pricing</span>
              <h3>Market-Driven Rates</h3>
              <p>AI-driven pricing recommendations ensure fair rates and market competitiveness.</p>
            </div>

            <div className="feature-new-card">
              <div className="feature-icon">
                <i className="fas fa-comments"></i>
              </div>
              <span className="caption">Communication</span>
              <h3>Seamless Interaction</h3>
              <p>Built-in tools for efficient collaboration and real-time communication.</p>
            </div>

            <div className="feature-new-card">
              <div className="feature-icon">
                <i className="fas fa-project-diagram"></i>
              </div>
              <span className="caption">Management</span>
              <h3>Project Management</h3>
              <p>Comprehensive tools for contracts, milestones, and payment management.</p>
            </div>

            <div className="feature-new-card">
              <div className="feature-icon">
                <i className="fas fa-chart-bar"></i>
              </div>
              <span className="caption">Analytics</span>
              <h3>Performance Insights</h3>
              <p>Detailed analytics and insights for better hiring decisions and career growth.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="stats-header">
          <h2 className="stats-title">Our Impact in Numbers</h2>
          <p className="stats-subtitle">
            Transforming the hiring landscape with proven results and measurable success across our platform
          </p>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">4x</div>
            <div className="stat-label">Faster Hiring</div>
            <p className="stat-description">Average time to hire reduced from weeks to days</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">95%</div>
            <div className="stat-label">Match Rate</div>
            <p className="stat-description">AI-powered matching accuracy</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">50K+</div>
            <div className="stat-label">Talents</div>
            <p className="stat-description">Verified professionals ready to work</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">32%</div>
            <div className="stat-label">Cost Savings</div>
            <p className="stat-description">Average reduction in hiring costs</p>
          </div>

          <div className="stat-card">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Projects</div>
            <p className="stat-description">Successfully completed projects</p>
          </div>
        </div>
      </section>
      <section className="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Process</div>
            <h2>How It Works</h2>
            <p className="section-subheading">4 Simple steps to connect talent with opportunity</p>
          </div>

          <div className="workflow-tabs">
            <button 
              className={`tab-btn ${activeTab === 'recruiter' ? 'active' : ''}`}
              onClick={() => setActiveTab('recruiter')}
              data-type="recruiter"
            >
              For Recruiters
            </button>
            <button 
              className={`tab-btn ${activeTab === 'freelancer' ? 'active' : ''}`}
              onClick={() => setActiveTab('freelancer')}
              data-type="freelancer"
            >
              For Freelancers
            </button>
          </div>

          <div className="workflow-content">
            {activeTab === 'recruiter' ? (
              <div className="workflow-grid">
                <div className="workflow-card">
                  <div className="step-number">1</div>
                  <div className="workflow-icon">
                    <i className="fas fa-file-alt"></i>
                  </div>
                  <h3>Post a Job</h3>
                  <p>Share your project requirements, timeline, and budget details. Be specific to attract the right talent.</p>
                </div>

                <div className="workflow-card">
                  <div className="step-number">2</div>
                  <div className="workflow-icon">
                    <i className="fas fa-magic"></i>
                  </div>
                  <h3>Get Matched Instantly</h3>
                  <p>Roco's AI analyzes your project needs and recommends the most qualified freelancers from our vetted talent pool.</p>
                </div>

                <div className="workflow-card">
                  <div className="step-number">3</div>
                  <div className="workflow-icon">
                    <i className="fas fa-comments"></i>
                  </div>
                  <h3>Collaborate Effortlessly</h3>
                  <p>Use our platform to communicate, share files, and track progress in real-time. Manage contracts and payments securely.</p>
                </div>

                <div className="workflow-card">
                  <div className="step-number">4</div>
                  <div className="workflow-icon">
                    <i className="fas fa-check-circle"></i>
                  </div>
                  <h3>Complete with Confidence</h3>
                  <p>Review and approve deliverables, provide feedback, and close the project efficiently.</p>
                </div>
              </div>
            ) : (
              <div className="workflow-grid">
                <div className="workflow-card">
                  <div className="step-number">1</div>
                  <div className="workflow-icon">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <h3>Create Your Profile</h3>
                  <p>Showcase your skills, portfolio, and expertise. Get verified and stand out to recruiters.</p>
                </div>

                <div className="workflow-card">
                  <div className="step-number">2</div>
                  <div className="workflow-icon">
                    <i className="fas fa-bullseye"></i>
                  </div>
                  <h3>Get Matched to Projects</h3>
                  <p>Roco's AI suggests tailored job opportunities based on your skills and experience. Focus on work that matches your strengths.</p>
                </div>

                <div className="workflow-card">
                  <div className="step-number">3</div>
                  <div className="workflow-icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3>Collaborate with Ease</h3>
                  <p>Communicate with clients directly through the platform. Deliver work, track milestones, and stay organized.</p>
                </div>

                <div className="workflow-card">
                  <div className="step-number">4</div>
                  <div className="workflow-icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Grow Your Career</h3>
                  <p>Earn consistent ratings, build your reputation, and get access to premium job opportunities.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="trusted-by-section">
        <div className="container">
          <h2 className="trusted-by-title">Trusted by leading companies</h2>
          
          <div className="logo-carousel">
            <div className="logo-track">
              {/* First set of logos */}
              <div className="logo-slide">
                <img src="/company-logos/google.svg" alt="Google" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/microsoft.svg" alt="Microsoft" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/amazon.svg" alt="Amazon" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/meta.svg" alt="Meta" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/apple.svg" alt="Apple" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/netflix.svg" alt="Netflix" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="logo-slide">
                <img src="/company-logos/google.svg" alt="Google" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/microsoft.svg" alt="Microsoft" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/amazon.svg" alt="Amazon" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/meta.svg" alt="Meta" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/apple.svg" alt="Apple" />
              </div>
              <div className="logo-slide">
                <img src="/company-logos/netflix.svg" alt="Netflix" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Pricing</div>
            <h2>Pay only for what you need</h2>
            <p className="section-subheading">Join thousands of successful recruiters and freelancers.</p>
          </div>

          <div className="billing-toggle">
            <span 
              className={`toggle-label ${activeTab === 'recruiter' ? 'active' : ''}`}
              onClick={() => setActiveTab('recruiter')}
            >
              For Business
            </span>
            <span 
              className={`toggle-label ${activeTab === 'freelancer' ? 'active' : ''}`}
              onClick={() => setActiveTab('freelancer')}
            >
              For Freelancers
            </span>
          </div>

          <div className="pricing-container">
            {activeTab === 'recruiter' ? (
              // Business/Recruiter Pricing
              <div className="pricing-cards">
                <div className="pricing-card">
                  <div className="plan-badge">Free</div>
                  
                  <p className="plan-description">
                    Perfect for small businesses exploring recruitment solutions
                  </p>

                  <div className="price">
                    $0
                    <span className="price-period">/month</span>
                  </div>

                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>3 job postings/month</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Basic AI matching</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Standard support</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Basic analytics</span>
                    </div>
                  </div>

                  <button className="pricing-cta">Get started</button>
                </div>

                <div className="pricing-card">
                  <div className="plan-badge">Pro</div>
                  
                  <p className="plan-description">
                    For growing teams with active hiring needs
                  </p>

                  <div className="price">
                    $199
                    <span className="price-period">/month</span>
                  </div>

                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>20 job postings/month</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Advanced AI screening</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Priority support</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Advanced analytics dashboard</span>
                    </div>
                  </div>

                  <button className="pricing-cta">Get started</button>
                </div>

                <div className="pricing-card featured">
                  <div className="plan-badge">Enterprise</div>
                  
                  <p className="plan-description">
                    Custom solutions for large organizations
                  </p>

                  <div className="price">
                    Let's Talk!
                  </div>

                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Unlimited job postings</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Custom AI solutions</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Dedicated account manager</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>API access & integrations</span>
                    </div>
                  </div>

                  <button className="pricing-cta">Book a Call</button>
                </div>
              </div>
            ) : (
              // Freelancer Pricing
              <div className="pricing-cards">
                <div className="pricing-card">
                  <div className="plan-badge">Free</div>
                  
                  <p className="plan-description">
                    Perfect for freelancers just getting started
                  </p>

                  <div className="price">
                    $0
                    <span className="price-period">/month</span>
                  </div>

                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Basic profile visibility</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Basic AI matching</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Standard support</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Up to 5 job applications/month</span>
                    </div>
                  </div>

                  <button className="pricing-cta">Get started</button>
                </div>

                <div className="pricing-card">
                  <div className="plan-badge">Pro</div>
                  
                  <p className="plan-description">
                    For active freelancers seeking more opportunities
                  </p>

                  <div className="price">
                    $29
                    <span className="price-period">/month</span>
                  </div>

                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Enhanced profile visibility</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Advanced AI matching</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Priority support</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Unlimited job applications</span>
                    </div>
                  </div>

                  <button className="pricing-cta">Get started</button>
                </div>

                <div className="pricing-card featured">
                  <div className="plan-badge">Elite</div>
                  
                  <p className="plan-description">
                    For top freelancers wanting premium features
                  </p>

                  <div className="price">
                    $99
                    <span className="price-period">/month</span>
                  </div>

                  <div className="card-features">
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Featured profile placement</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Premium AI tools & insights</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Dedicated account manager</span>
                    </div>
                    <div className="feature-item">
                      <i className="fas fa-check"></i>
                      <span>Early access to top jobs</span>
                    </div>
                  </div>

                  <button className="pricing-cta">Get Elite</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Testimonies</div>
            <h2>Why Businesses and Freelancers <span className="love-emoji">❤️</span> Roco</h2>
          </div>

          <div className="testimonials-grid">
            {/* First Row - Recruiters - Sliding Right */}
            <div className="testimonials-row">
              {[...recruiterTestimonials, ...recruiterTestimonials].map((testimonial, i) => (
                <div className="testimonial-card" key={`recruiter-${i}`}>
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Row - Freelancers - Sliding Left */}
            <div className="testimonials-row">
              {[...freelancerTestimonials, ...freelancerTestimonials].map((testimonial, i) => (
                <div className="testimonial-card" key={`freelancer-${i}`}>
                  <div className="quote-icon">❝</div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <h4>{testimonial.author}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="blogs-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Resources</div>
            <h2>Blogs and Resources</h2>
            <p className="section-subheading">Stay ahead with our latest insights and guides</p>
          </div>

          <button 
            className="blog-nav-button blog-nav-prev" 
            onClick={() => handleScroll('left')}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="blogs-grid">
            {/* Card 1 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800"
                alt="AI and Freelancing"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">AI</span>
                  <span className="tag">Freelancing</span>
                </div>
                <h3>The Future of AI in Freelance Work: 2024 Trends</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                alt="Skills"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">Skills</span>
                  <span className="tag">Future</span>
                </div>
                <h3>Essential Skills for the AI-Driven Workplace</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800"
                alt="AI Tools"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">AI</span>
                  <span className="tag">Tools</span>
                </div>
                <h3>Mastering AI Tools for Better Job Descriptions</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800"
                alt="Success Stories"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">Success</span>
                  <span className="tag">Career</span>
                </div>
                <h3>From Novice to Pro: Freelancer Success Stories</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 5 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
                alt="Remote Teams"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">Teams</span>
                  <span className="tag">Remote</span>
                </div>
                <h3>Building High-Performance Remote Teams</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 6 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
                alt="Project Management"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">AI</span>
                  <span className="tag">Management</span>
                </div>
                <h3>AI-Powered Project Management Solutions</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 7 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800"
                alt="Remote Work"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">Remote</span>
                  <span className="tag">Tech</span>
                </div>
                <h3>The Evolution of Remote Work Technologies</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>

            {/* Card 8 */}
            <div className="blog-card">
              <img 
                src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=800"
                alt="Future of Work"
                className="blog-image"
              />
              <div className="blog-content">
                <div className="blog-tags">
                  <span className="tag">Future</span>
                  <span className="tag">AI</span>
                </div>
                <h3>Navigating the Future of Work with AI</h3>
                <a href="#" className="read-more">Read more</a>
              </div>
            </div>
          </div>

          <button 
            className="blog-nav-button blog-nav-next" 
            onClick={() => handleScroll('right')}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
                Roco
              </div>
              <div className="footer-social">
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-peace"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>

            <div className="footer-nav-section">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Overview</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Solutions</a></li>
                <li><a href="#">Tutorials</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Releases</a></li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Media kit</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="footer-nav-section">
              <h4>Subscribe</h4>
              <p className="subscribe-text">Stay up to date with our latest developments.</p>
              <form className="subscribe-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="subscribe-input"
                />
                <button type="submit" className="subscribe-button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2024 Roco Inc.
            </div>
            <div className="footer-legal">
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
