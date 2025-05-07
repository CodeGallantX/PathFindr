
import { Search, Map, Navigation } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Enter Your Destination",
      description: "Type or speak your destination using natural language like 'Take me to the library'.",
      color: "bg-primary",
      number: 1
    },
    {
      icon: <Map className="h-8 w-8 text-white" />,
      title: "View Optimal Routes",
      description: "PathhFinder calculates the best route based on your preferences and current campus conditions.",
      color: "bg-mapaccent2",
      number: 2
    },
    {
      icon: <Navigation className="h-8 w-8 text-white" />,
      title: "Follow Voice Guidance",
      description: "Get turn-by-turn directions through our voice navigation system as you walk or ride.",
      color: "bg-mapaccent3",
      number: 3
    }
  ];

  return (
    <div id="how-it-works" className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-mapaccent1 mb-4">
            How PathhFinder <span className="text-primary">Works</span>
          </h2>
          <p className="font-inter text-gray-600">
            Getting around campus has never been easier. Just three simple steps to navigate LASUSTECH with confidence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start space-y-12 lg:space-y-0 lg:space-x-6 relative">
          {/* Connector line on desktop */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.666%-8px)] right-[calc(16.666%-8px)] h-0.5 bg-gray-200"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative">
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10`}>
                {step.icon}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white border border-gray-200 flex items-center justify-center text-sm font-medium text-mapaccent1">
                  {step.number}
                </div>
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-2 text-mapaccent1">{step.title}</h3>
              <p className="font-inter text-gray-600 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
