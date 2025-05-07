
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jessica O.",
      role: "Freshman, Computer Science",
      quote: "As a new student, PathhFinder saved me from being late to classes during my first week. The voice navigation is like having a friend guide you everywhere!",
      avatar: "JO"
    },
    {
      id: 2,
      name: "Michael T.",
      role: "Senior, Engineering",
      quote: "The shortcut suggestions are amazing! PathhFinder showed me routes across campus I didn't know existed even after 3 years here.",
      avatar: "MT"
    },
    {
      id: 3,
      name: "Chinwe A.",
      role: "Visiting Lecturer",
      quote: "I was impressed by how accurate the ETAs are. The app accounts for busy periods between classes which other navigation apps miss.",
      avatar: "CA"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div id="testimonials" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-mapaccent1 mb-4">
            What Our <span className="text-primary">Users</span> Say
          </h2>
          <p className="font-inter text-gray-600">
            Join thousands of satisfied students and staff who navigate LASUSTECH with confidence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 relative">
            {/* Quote marks */}
            <div className="absolute top-6 left-6 text-primary/10 text-7xl font-serif">"</div>
            
            {/* Testimonial content */}
            <div className="relative z-10 text-center">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xl"
                  style={{background: `linear-gradient(45deg, #2F80ED, #56CCF2)`}}>
                  {testimonials[currentTestimonial].avatar}
                </div>
              </div>
              
              <p className="font-inter text-lg md:text-xl text-gray-700 mb-6">
                "{testimonials[currentTestimonial].quote}"
              </p>
              
              <h4 className="font-poppins font-semibold text-mapaccent1">
                {testimonials[currentTestimonial].name}
              </h4>
              
              <p className="text-sm text-gray-500">
                {testimonials[currentTestimonial].role}
              </p>
            </div>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-10 w-10 border-gray-300"
              >
                <ArrowLeft size={18} />
              </Button>
              
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentTestimonial ? "bg-primary" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  ></button>
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-10 w-10 border-gray-300"
              >
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
