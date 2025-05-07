
import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 space-y-6 mb-10 lg:mb-0 animate-fade-in">
            <div className="flex items-center space-x-2 bg-gradient-to-r from-background to-background/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit shadow-md">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="font-medium text-sm">Campus Navigation Reimagined</span>
            </div>
            
            <h1 className="font-dm-sans font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-mapaccent1">
              Never Get Lost On <span className="gradient-blue text-transparent bg-clip-text">Campus</span> Again
            </h1>
            
            <p className="font-roboto text-lg text-gray-700 dark:text-gray-300 max-w-xl">
              Walk smarter, ride faster, and explore LASUSTECH like a pro — all with one tap. 
              PathhFinder is your intelligent campus navigation assistant.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-medium text-base px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Navigation className="mr-2 h-5 w-5" />
                Start Navigating
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-xl transition-all duration-300">
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
              <p className="text-sm text-gray-600 dark:text-gray-400 font-roboto">
                Joined by <span className="font-medium">2,000+</span> students
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              {/* Phone outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[52px] blur-lg opacity-30"></div>
              
              {/* iPhone 15 Pro Max mockup */}
              <div className="relative">
                {/* Device frame */}
                <div className="w-[290px] h-[580px] rounded-[40px] bg-gradient-to-b from-[#1A1A1A] to-[#2A2A2A] p-3 shadow-2xl border border-[#333] relative overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[34px] bg-black rounded-b-2xl z-10"></div>
                  
                  {/* Screen */}
                  <div className="w-full h-full rounded-[33px] overflow-hidden bg-appbg">
                    {/* Status Bar */}
                    <div className="h-14 bg-gradient-to-r from-primary/30 to-secondary/30 flex items-center justify-center relative">
                      <div className="absolute top-4 left-6 text-xs font-medium text-mapaccent1 dark:text-white">9:41</div>
                      <div className="absolute top-4 right-6 flex items-center space-x-1">
                        <div className="w-4 h-3 bg-mapaccent1 dark:bg-white rounded-sm opacity-80"></div>
                        <div className="w-3 h-3 bg-mapaccent1 dark:bg-white rounded-full opacity-80"></div>
                        <div className="text-xs font-medium text-mapaccent1 dark:text-white">82%</div>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="p-4">
                      {/* Search Bar */}
                      <div className="bg-white dark:bg-[#2A2A2A] rounded-xl shadow-sm p-4">
                        <h3 className="font-dm-sans font-medium text-sm text-mapaccent1 dark:text-white">Navigate to:</h3>
                        <div className="flex items-center mt-2 bg-gray-100 dark:bg-[#3A3A3A] rounded-lg p-2">
                          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-xs">
                            <MapPin size={14} />
                          </div>
                          <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">ICT Center</span>
                        </div>
                      </div>
                      
                      {/* Map View */}
                      <div className="mt-3 bg-white dark:bg-[#2A2A2A] rounded-xl shadow-md h-[340px] relative overflow-hidden">
                        {/* Map Background with gradient overlay */}
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800">
                          {/* Map Grid Lines */}
                          <div className="absolute inset-0 grid grid-cols-4 grid-rows-6">
                            {Array(24).fill(0).map((_, i) => (
                              <div key={i} className="border border-gray-300/30 dark:border-gray-600/30"></div>
                            ))}
                          </div>
                          
                          {/* Map Route with glow effect */}
                          <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 flex items-center justify-center">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary transform -rotate-45 shadow-lg"></div>
                            <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 animate-pulse"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-mapaccent3 shadow-lg shadow-mapaccent3/50 animate-pulse"></div>
                          </div>
                          
                          {/* Buildings with shadow */}
                          <div className="absolute top-1/5 left-1/4 w-12 h-12 bg-gray-400/50 dark:bg-gray-600/50 rounded shadow-md"></div>
                          <div className="absolute top-1/2 right-1/4 w-14 h-10 bg-gray-400/50 dark:bg-gray-600/50 rounded shadow-md"></div>
                          <div className="absolute bottom-1/4 left-1/3 w-10 h-14 bg-gray-400/50 dark:bg-gray-600/50 rounded shadow-md"></div>
                        </div>
                        
                        {/* Route Info Card */}
                        <div className="absolute bottom-0 inset-x-0 h-24 bg-white dark:bg-[#2A2A2A] rounded-t-xl shadow-lg p-4">
                          <h4 className="font-dm-sans font-medium text-sm">Faculty of Science</h4>
                          <p className="text-xs text-gray-500 dark:text-gray-400">5 min walk from current location</p>
                          <div className="mt-2 flex justify-between">
                            <div className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Fastest route</div>
                            <div className="text-xs flex items-center text-mapaccent3">
                              <span className="font-medium">Start</span>
                              <Navigation size={12} className="ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom Navigation */}
                      <div className="mt-3 flex justify-between">
                        <div className="w-10 h-10 bg-white dark:bg-[#3A3A3A] rounded-full shadow-sm flex items-center justify-center">
                          <div className="w-5 h-5 rounded-full bg-mapaccent1 dark:bg-white/80"></div>
                        </div>
                        <div className="w-14 h-14 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md -mt-4 flex items-center justify-center text-white">
                          <Navigation size={24} />
                        </div>
                        <div className="w-10 h-10 bg-white dark:bg-[#3A3A3A] rounded-full shadow-sm flex items-center justify-center">
                          <div className="flex space-x-0.5">
                            <div className="w-1 h-1 rounded-full bg-mapaccent1 dark:bg-white/80"></div>
                            <div className="w-1 h-1 rounded-full bg-mapaccent1 dark:bg-white/80"></div>
                            <div className="w-1 h-1 rounded-full bg-mapaccent1 dark:bg-white/80"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Phone side buttons */}
                <div className="absolute top-[120px] left-[-2px] w-[2px] h-[60px] bg-gradient-to-b from-[#333] to-[#222] rounded-l"></div>
                <div className="absolute top-[200px] left-[-2px] w-[2px] h-[80px] bg-gradient-to-b from-[#333] to-[#222] rounded-l"></div>
                <div className="absolute top-[120px] right-[-2px] w-[2px] h-[40px] bg-gradient-to-b from-[#333] to-[#222] rounded-r"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
