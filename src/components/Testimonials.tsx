import React, { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    content: "Syed Huzaifa delivered exceptional results for our web application project. His attention to detail and technical expertise made a significant impact on our business.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with Huzaifa was a great experience. He not only met our technical requirements but also provided valuable insights that improved our product.",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Digital Solutions",
    content: "The website Huzaifa developed for us exceeded our expectations. His understanding of both design and functionality resulted in a perfect solution.",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
  },
  {
    name: "David Kim",
    role: "Startup Founder",
    company: "NextGen Apps",
    content: "Huzaifa's expertise in full-stack development helped us launch our MVP ahead of schedule. His problem-solving skills are truly impressive.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg"
  },
  {
    name: "Lisa Thompson",
    role: "UX Designer",
    company: "Creative Hub",
    content: "Collaborating with Huzaifa was seamless. He has a great eye for design implementation and ensures the best user experience.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonialRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              entry.target.classList.add('animate-fadeIn');
            } else {
              entry.target.classList.add('animate-slideUp');
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    testimonialRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      testimonialRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 bg-white opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client Testimonials
            </h2>
            <div className="w-20 h-1 bg-teal-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-gray-600 text-lg">
              What my clients say about my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                ref={el => testimonialRefs.current[index] = el}
                className="bg-gray-50 rounded-lg p-6 shadow-sm opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="mb-6">
                  <Quote size={32} className="text-teal-600 opacity-20" />
                </div>
                
                <p className="text-gray-600 mb-6 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-gray-800 font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;