import React from "react";
import { motion } from "framer-motion";
import { TreePine, Ruler, Shield, Sparkles } from "lucide-react";

const WOOD_TEXTURE = "https://media.base44.com/images/public/6a45ebcde6fb4264c098459a/bef1b9d19_generated_f5da92be.png";

const pillars = [
  {
    icon: TreePine,
    title: "Premium Woods",
    desc: "Sourced from the finest timber, every piece features natural grain patterns that make it uniquely yours.",
  },
  {
    icon: Ruler,
    title: "Precision Craft",
    desc: "Hand-measured and assembled with traditional joinery techniques perfected over generations.",
  },
  {
    icon: Shield,
    title: "Built to Last",
    desc: "Engineered for decades of use with reinforced joints and premium finishing that ages beautifully.",
  },
  {
    icon: Sparkles,
    title: "Bespoke Design",
    desc: "Customizable dimensions and finishes to match your vision — furniture tailored to your space.",
  },
];

export default function CraftsmanshipSection() {
  return (
    <section id="craftsmanship" className="relative py-20 md:py-32 bg-walnut overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <img src={WOOD_TEXTURE} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-sandstone" />
              <span className="text-sandstone text-xs font-body tracking-[0.3em] uppercase">
                Our Philosophy
              </span>
            </div>
            <h2 className="font-heading text-3xl md:text-5xl text-bone font-medium leading-tight">
              The Art of
              <br />
              <span className="italic text-sandstone">Woodworking</span>
            </h2>
            <p className="mt-6 text-bone/60 font-body text-base md:text-lg leading-relaxed font-light max-w-lg">
              At Woods Furnitures, every piece begins as a conversation between the 
              artisan and the timber. We believe furniture should not merely fill a room 
              — it should define it. Our design studio brings together traditional 
              craftsmanship and contemporary aesthetics.
            </p>
          </motion.div>

          {/* Right: Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 border border-sandstone/30 flex items-center justify-center mb-4 group-hover:bg-sandstone/10 transition-colors duration-300">
                  <p.icon size={20} className="text-sandstone" />
                </div>
                <h3 className="font-heading text-lg text-bone font-medium mb-2">
                  {p.title}
                </h3>
                <p className="text-bone/50 font-body text-sm leading-relaxed font-light">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}