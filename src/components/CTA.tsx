
import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";

const CTA = () => {
  return (
    <div className="bg-background py-16 md:py-24 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition-all duration-300">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 animate-fade-in">
              <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-white mb-6">
                Ready to Navigate LASUSTECH Like a Pro?
              </h2>
              <p className="font-inter text-white/90 text-lg mb-8 max-w-md">
                Join thousands of students who are already saving time and discovering the best routes across campus.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" variant="secondary" className="bg-white hover:bg-white/90 text-primary rounded-full transition-all duration-300 hover:shadow-lg">
                  <Navigation className="mr-2 h-5 w-5" />
                  Get Started
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 relative">
              {/* Abstract pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-float"></div>
                <div className="absolute top-1/2 right-1/3 w-24 h-24 rounded-full bg-white animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-white animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* Decoration - Simple map illustration */}
              <div className="relative h-full min-h-[300px] flex items-center justify-center p-8">
                <div className="w-full max-w-sm aspect-square rounded-full border-4 border-white/30 flex items-center justify-center animate-pulse-soft">
                  <div className="w-3/4 h-3/4 rounded-full border-4 border-white/20 flex items-center justify-center">
                    <div className="w-1/2 h-1/2 rounded-full border-4 border-white/10 flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-full animate-ping"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center animate-float">
                    <Navigation className="h-5 w-5 text-primary" />
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

export default CTA;
