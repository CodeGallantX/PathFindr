
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0 animate-fade-in">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-primary px-4 py-2 rounded-full w-fit">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-medium text-sm">Campus Navigation Reimagined</span>
            </div>
            
            <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-mapaccent1">
              Never Get Lost On <span className="text-primary">Campus</span> Again
            </h1>
            
            <p className="font-inter text-lg text-gray-700 max-w-xl">
              Walk smarter, ride faster, and explore LASUSTECH like a pro — all with one tap. 
              PathhFinder is your intelligent campus navigation assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-medium text-base px-6">
                <Navigation className="mr-2 h-5 w-5" />
                Start Navigating
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <MapPin className="mr-2 h-5 w-5" />
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-mapaccent1 flex items-center justify-center text-white text-xs">JD</div>
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">KL</div>
                <div className="w-8 h-8 rounded-full bg-mapaccent3 flex items-center justify-center text-white text-xs">MN</div>
                <div className="w-8 h-8 rounded-full bg-mapaccent2 flex items-center justify-center text-white text-xs">+</div>
              </div>
              <p className="text-sm text-gray-600 font-inter">
                Joined by <span className="font-medium">2,000+</span> students
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-lg opacity-30"></div>
              <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 max-w-xs">
                <div className="h-[500px] w-[250px] bg-appbg">
                  {/* Mocked App Screen */}
                  <div className="h-10 bg-white flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="p-2">
                    <div className="bg-white rounded-lg shadow-sm p-3">
                      <h3 className="font-poppins font-medium text-sm text-mapaccent1">Navigate to:</h3>
                      <div className="flex items-center mt-2 bg-gray-100 rounded-lg p-2">
                        <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                          <MapPin size={14} />
                        </div>
                        <span className="ml-2 text-sm text-gray-600">ICT Center</span>
                      </div>
                    </div>
                    
                    <div className="mt-2 bg-white rounded-lg shadow-sm h-[300px] relative overflow-hidden">
                      {/* Map Background */}
                      <div className="absolute inset-0 bg-gray-200">
                        {/* Map Grid Lines */}
                        <div className="absolute inset-0 grid grid-cols-4 grid-rows-6">
                          {Array(24).fill(0).map((_, i) => (
                            <div key={i} className="border border-gray-300/30"></div>
                          ))}
                        </div>
                        
                        {/* Map Route */}
                        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 flex items-center justify-center">
                          <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform -rotate-45"></div>
                          <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-primary"></div>
                          <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-mapaccent3"></div>
                        </div>
                        
                        {/* Buildings */}
                        <div className="absolute top-1/5 left-1/4 w-10 h-10 bg-gray-400/50 rounded"></div>
                        <div className="absolute top-1/2 right-1/4 w-12 h-8 bg-gray-400/50 rounded"></div>
                        <div className="absolute bottom-1/4 left-1/3 w-8 h-12 bg-gray-400/50 rounded"></div>
                      </div>
                      
                      <div className="absolute bottom-0 inset-x-0 h-20 bg-white rounded-t-lg shadow-lg p-3">
                        <h4 className="font-medium text-sm">Faculty of Science</h4>
                        <p className="text-xs text-gray-500">5 min walk from current location</p>
                        <div className="mt-2 flex justify-between">
                          <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Fastest route</div>
                          <div className="text-xs flex items-center text-mapaccent3">
                            <span className="font-medium">Start</span>
                            <Navigation size={12} className="ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-2 flex justify-between">
                      <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-mapaccent1"></div>
                      </div>
                      <div className="w-10 h-10 bg-primary rounded-full shadow-sm flex items-center justify-center text-white">
                        <Navigation size={18} />
                      </div>
                      <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-mapaccent1"></div>
                        <div className="w-1 h-1 rounded-full bg-mapaccent1 ml-1"></div>
                        <div className="w-1 h-1 rounded-full bg-mapaccent1 ml-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
