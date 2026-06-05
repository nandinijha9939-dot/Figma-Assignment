// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';

// ========== REUSABLE COMPONENTS ==========
const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:ring-primary-500',
    secondary: 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm hover:shadow focus:ring-primary-500',
    outline: 'bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 hover:border-primary-700'
  };
  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
      <div className={`w-20 h-1 bg-primary-500 rounded-full ${centered ? 'mx-auto' : ''} mb-6`}></div>
      <p className="text-lg text-gray-600 max-w-2xl ${centered ? 'mx-auto' : ''}">{subtitle}</p>
    </div>
  );
};

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Card className="p-6 text-center group">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:bg-primary-200 group-hover:scale-110">
        <span className="text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
};

const PricingCard = ({ title, price, features, buttonText, isPopular = false }) => {
  return (
    <Card className={`p-8 flex flex-col h-full relative ${isPopular ? 'border-2 border-primary-500 shadow-xl' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-primary-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
          Popular
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="flex items-baseline justify-center">
          <span className="text-5xl font-extrabold text-gray-900">${price}</span>
          <span className="text-gray-600 ml-2">/month</span>
        </div>
      </div>
      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Button variant={isPopular ? 'primary' : 'secondary'} className="w-full justify-center">
        {buttonText}
      </Button>
    </Card>
  );
};

const TestimonialCard = ({ quote, name, role, avatar }) => {
  return (
    <Card className="p-6">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </Card>
  );
};

// ========== MAIN APP ==========
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Features', 'Pricing', 'Testimonials', 'Contact'];

  return (
    <div className="font-sans antialiased">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-gray-800">Agency</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
          
          <div className="hidden md:block">
            <Button variant="primary">Get Started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-white shadow-lg transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 py-4 space-y-3">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors" onClick={() => setIsMenuOpen(false)}>
                {link}
              </a>
            ))}
            <Button variant="primary" className="w-full justify-center mt-4">Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-4 py-1 rounded-full mb-6 animate-pulse">
                Welcome to the future
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                We Build Digital<br />
                <span className="text-primary-600">Experiences That Matter</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Transform your business with our cutting-edge solutions. We combine creativity and technology to deliver exceptional results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" className="px-8">Get Started</Button>
                <Button variant="secondary" className="px-8">Learn More</Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-primary-400 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl">
                  <svg className="w-24 h-24 opacity-20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full filter blur-2xl opacity-60 -z-10"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-indigo-200 rounded-full filter blur-2xl opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Powerful Features" 
            subtitle="Everything you need to succeed in one platform. Designed to help you grow and scale." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon="🚀" title="Lightning Fast" description="Optimized performance with blazing fast load times and smooth interactions." />
            <FeatureCard icon="🔒" title="Secure Platform" description="Enterprise-grade security to keep your data and users completely safe." />
            <FeatureCard icon="🎨" title="Beautiful Design" description="Stunning visuals and intuitive interface crafted for the best experience." />
            <FeatureCard icon="📱" title="Fully Responsive" description="Perfect experience across all devices from mobile to desktop." />
            <FeatureCard icon="🔧" title="Easy Customization" description="Flexible tools to customize and adapt to your specific needs." />
            <FeatureCard icon="📊" title="Analytics Dashboard" description="Deep insights with comprehensive analytics and reporting tools." />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square bg-gradient-to-tr from-primary-500 to-primary-700"></div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                  <div className="aspect-square bg-gradient-to-bl from-indigo-500 to-primary-600"></div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg transform -translate-y-4">
                  <div className="aspect-square bg-gradient-to-r from-primary-400 to-indigo-500"></div>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <div className="aspect-square bg-gradient-to-tl from-primary-600 to-indigo-700"></div>
                </div>
              </div>
            </div>
            <div className="flex-1 order-1 lg:order-2">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">We're on a mission to transform digital experiences</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, we've helped over 500+ businesses achieve their digital goals. Our team of experts combines creativity with technical excellence to deliver outstanding results.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We believe in building lasting partnerships and creating solutions that drive real business value. Let us help you turn your vision into reality.
              </p>
              <div className="flex gap-8 mb-8">
                <div>
                  <div className="text-3xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-500">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-gray-500">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">24/7</div>
                  <div className="text-gray-500">Support</div>
                </div>
              </div>
              <Button variant="primary">Learn More About Us</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="Simple, Transparent Pricing" 
            subtitle="Choose the perfect plan for your needs. No hidden fees, cancel anytime." 
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Starter" 
              price="29" 
              features={["Up to 1,000 users", "10GB storage", "Basic analytics", "Email support", "API access"]}
              buttonText="Get Started"
            />
            <PricingCard 
              title="Professional" 
              price="79" 
              features={["Up to 10,000 users", "100GB storage", "Advanced analytics", "Priority support", "API access", "Custom integrations"]}
              buttonText="Start Free Trial"
              isPopular={true}
            />
            <PricingCard 
              title="Enterprise" 
              price="199" 
              features={["Unlimited users", "1TB storage", "Real-time analytics", "Dedicated support", "API access", "Custom integrations", "SLA guarantee"]}
              buttonText="Contact Sales"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeader 
            title="What Our Clients Say" 
            subtitle="Trusted by businesses worldwide. Here's what they have to say about working with us." 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="The team transformed our digital presence completely. Our conversion rates have doubled since launch. Highly recommend!"
              name="Sarah Johnson"
              role="CEO, TechStart"
              avatar="SJ"
            />
            <TestimonialCard 
              quote="Incredible attention to detail and customer support. They went above and beyond to ensure our success."
              name="Michael Chen"
              role="Product Manager, InnovateCo"
              avatar="MC"
            />
            <TestimonialCard 
              quote="Best decision we made for our business. The platform is robust, scalable, and beautifully designed."
              name="Emily Rodriguez"
              role="Founder, CreativeLab"
              avatar="ER"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-primary-600 to-indigo-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 p-8 lg:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to get started?</h2>
                <p className="text-primary-100 mb-6 text-lg">Join thousands of satisfied customers who trust us with their digital success.</p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>hello@agency.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white p-8 lg:p-12">
                <form className="space-y-4">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all" />
                  </div>
                  <div>
                    <textarea rows="4" placeholder="Tell us about your project..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all"></textarea>
                  </div>
                  <Button variant="primary" className="w-full justify-center">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="text-xl font-bold">Agency</span>
              </div>
              <p className="text-gray-400 text-sm">Creating digital experiences that inspire and deliver results.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;