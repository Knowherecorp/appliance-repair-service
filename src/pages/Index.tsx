import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      const staggerReveals = document.querySelectorAll('.stagger-reveal');
      
      const revealElements = (elements: NodeListOf<Element>, threshold = 150) => {
        elements.forEach((element) => {
          const windowHeight = window.innerHeight;
          const elementTop = element.getBoundingClientRect().top;
          
          if (elementTop < windowHeight - threshold) {
            element.classList.add('active');
          }
        });
      };
      
      revealElements(reveals);
      revealElements(staggerReveals);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check on page load
    setTimeout(handleScroll, 300);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Appliance Care - Expert Appliance Repair Services</title>
        <meta name="description" content="Professional repair services for washing machines, refrigerators, ACs, TVs, and microwaves. Fast, reliable service with certified technicians." />
        <meta name="keywords" content="appliance repair, washing machine repair, refrigerator repair, AC repair, TV repair, microwave repair" />
        <link rel="canonical" href="https://www.customercareservice.co" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.customercareservice.co" />
        <meta property="og:title" content="Appliance Care - Expert Appliance Repair Services" />
        <meta property="og:description" content="Professional repair services for washing machines, refrigerators, ACs, TVs, and microwaves." />
        <meta property="og:image" content="https://www.customercareservice.co/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.customercareservice.co" />
        <meta property="twitter:title" content="Appliance Care - Expert Appliance Repair Services" />
        <meta property="twitter:description" content="Professional repair services for washing machines, refrigerators, ACs, TVs, and microwaves." />
        <meta property="twitter:image" content="https://www.customercareservice.co/og-image.jpg" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Appliance Care Appliance Repair",
            "image": "https://www.customercareservice.co/logo.jpg",
            "url": "https://www.customercareservice.co",
            "telephone": "(888) 555-HELP",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Repair Avenue, Suite 101",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10001",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 40.7128,
              "longitude": -74.0060
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "20:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "10:00",
                "closes": "16:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/#",
              "https://www.twitter.com/#",
              "https://www.instagram.com/#"
            ]
          }
        `}</script>
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Services />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
