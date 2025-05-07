
import { Map, Search, Navigation, Clock, Compass, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";

const Features = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("features-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const features = [
    {
      icon: <Map className="h-6 w-6 text-white" />,
      title: "3D Campus Map",
      description: "Interactive, zoomable map with 3D-rendered buildings and highlighted shortcuts.",
      color: "bg-primary"
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "NLP Location Search",
      description: "Find locations using natural language — no need for exact spellings.",
      color: "bg-mapaccent2"
    },
    {
      icon: <Navigation className="h-6 w-6 text-white" />,
      title: "Voice Navigation",
      description: "Turn-by-turn audio directions with switchable voices.",
      color: "bg-secondary"
    },
    {
      icon: <Clock className="h-6 w-6 text-white" />,
      title: "Smart ETA",
      description: "Accurate arrival times based on mode of transportation and campus activity.",
      color: "bg-mapaccent3"
    },
    {
      icon: <Compass className="h-6 w-6 text-white" />,
      title: "Predictive Routes",
      description: "AI suggests faster paths based on time of day and learned patterns.",
      color: "bg-mapaccent1"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Activity History",
      description: "View and repeat your previously visited locations with one tap.",
      color: "bg-primary"
    }
  ];

  return (
    <div id="features" className="bg-background py-16 md:py-24 transition-colors duration-300">
      <div id="features-section" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-foreground mb-4 transition-colors duration-300">
            Navigate With <span className="text-primary">Confidence</span>
          </h2>
          <p className="font-inter text-muted-foreground transition-colors duration-300">
            PathhFinder combines cutting-edge technology with student-centric design to create 
            the ultimate campus navigation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg transition-all duration-400 p-6 flex flex-col transform ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-foreground transition-colors duration-300">{feature.title}</h3>
              <p className="font-inter text-muted-foreground flex-grow transition-colors duration-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
