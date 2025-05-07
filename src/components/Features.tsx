
import { Map, Search, Navigation, Clock, Compass, MessageSquare } from "lucide-react";

const Features = () => {
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
    <div id="features" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-mapaccent1 mb-4">
            Navigate With <span className="text-primary">Confidence</span>
          </h2>
          <p className="font-inter text-gray-600">
            PathhFinder combines cutting-edge technology with student-centric design to create 
            the ultimate campus navigation experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col"
            >
              <div className={`${feature.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-mapaccent1">{feature.title}</h3>
              <p className="font-inter text-gray-600 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
