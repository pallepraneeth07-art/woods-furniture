import React from "react";

const LOGO_URL = "https://media.base44.com/images/public/user_6a45115e77db446c8ab07dad/d6f85458b_IMG_20260702_095656.jpg";

const categoryGroups = [
  {
    title: "Living Room",
    items: ["L-Shape Sofas", "3+1+1 Sofas", "Wooden Sofas", "Recliner Sofas", "Accent Chairs"],
  },
  {
    title: "Bedroom",
    items: ["Cots", "Cushion & Designer Cots", "Wardrobes", "Dressing Tables", "Bunk Beds"],
  },
  {
    title: "Multi-Purpose",
    items: ["Deewan Cum Bed", "Loungers & Sofa Cum Bed", "Dining", "Center Tables", "TV Units"],
  },
  {
    title: "More",
    items: ["Office Furniture", "Shoe Racks", "Marbles"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-walnut py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top: Brand + Categories */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={LOGO_URL} alt="Woods Furnitures Logo" className="h-16 w-auto rounded-sm mb-4" />
            <p className="text-bone/40 font-body text-sm leading-relaxed font-light">
              Crafting timeless furniture since the beginning. A design studio dedicated to 
              the art of woodworking.
            </p>
          </div>

          {/* Category Columns */}
          {categoryGroups.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading text-sandstone text-sm font-medium tracking-wide mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <a
                      href="#collections"
                      className="text-bone/40 hover:text-sandstone font-body text-xs tracking-wide transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-bone/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-bone/30 font-body text-xs tracking-wide">
            © {new Date().getFullYear()} Woods Furnitures — A Design Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#hero" className="text-bone/30 hover:text-sandstone font-body text-xs tracking-wide transition-colors">
              Privacy Policy
            </a>
            <a href="#hero" className="text-bone/30 hover:text-sandstone font-body text-xs tracking-wide transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}