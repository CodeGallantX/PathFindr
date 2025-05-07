
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-background/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <h1 className="font-poppins font-bold text-2xl text-primary">
                Pathh<span className="text-mapaccent3">Finder</span>
              </h1>
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 font-inter">
              <a href="#features" className="text-foreground hover:text-primary transition-colors duration-300">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-300">
                How It Works
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary transition-colors duration-300">
                Testimonials
              </a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors duration-300">
                FAQ
              </a>
              <ThemeToggle />
              <Button className="bg-primary hover:bg-primary/90 rounded-full transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-full text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg rounded-b-2xl transition-all duration-300 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 font-inter">
            <a 
              href="#features" 
              className="block px-3 py-2 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="block px-3 py-2 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="block px-3 py-2 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="block px-3 py-2 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <div className="px-3 py-2">
              <Button className="w-full bg-primary hover:bg-primary/90 rounded-full transition-all duration-300">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
