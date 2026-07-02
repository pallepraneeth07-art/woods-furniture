import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://media.base44.com/images/public/user_6a45115e77db446c8ab07dad/d6f85458b_IMG_20260702_095656.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
  { label: "Home", href: "#hero" },
  { label: "Collections", href: "#collections" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Contact", href: "#contact" }];


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      "bg-walnut/95 backdrop-blur-md shadow-lg py-3" :
      "bg-transparent py-5"}`
      }>
      
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <img
            src={LOGO_URL}
            alt="Woods Furnitures Logo"
            className="h-16 w-auto rounded-sm" />
          
          <div className="hidden sm:block">
            

            
            

            
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
          <a
            key={link.label}
            href={link.href}
            className={`text-sm font-body font-medium tracking-widest uppercase transition-colors duration-300 ${
            scrolled ?
            "text-bone/80 hover:text-sandstone" :
            "text-walnut/70 hover:text-walnut"}`
            }>
            
              {link.label}
            </a>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 ${scrolled ? "text-bone" : "text-walnut"}`}>
          
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen &&
      <div className="md:hidden bg-walnut/95 backdrop-blur-md border-t border-sandstone/20">
          <div className="px-6 py-6 flex flex-col gap-4">
            {links.map((link) =>
          <a
            key={link.label}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-bone/80 hover:text-sandstone text-sm font-body font-medium tracking-widest uppercase transition-colors">
            
                {link.label}
              </a>
          )}
          </div>
        </div>
      }
    </nav>);

}