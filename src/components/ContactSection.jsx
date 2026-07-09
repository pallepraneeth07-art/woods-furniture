import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-bone">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl">
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-sandstone" />
            <span className="text-sandstone text-xs font-body tracking-[0.3em] uppercase">
              Get in Touch
            </span>
          </div>
          <h2 className="font-heading text-3xl md:text-5xl text-walnut font-medium leading-tight">
            Visit Our
            <br />
            <span className="italic text-sandstone">WOODS FURNITURE STUDIO</span>
          </h2>
          <p className="mt-6 text-walnut/60 font-body text-base leading-relaxed font-light max-w-md">
            Walk through our curated showroom and experience each piece up close. 
            Our design consultants are ready to help you find the perfect furniture 
            for your space.
          </p>

          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-sandstone/30 flex items-center justify-center flex-shrink-0">
                <Phone size={16} className="text-sandstone" />
              </div>
              <div>
                <p className="text-walnut font-body text-sm font-medium">Call Us</p>
                <div className="flex flex-col">
                  <a href="tel:+919866659400" className="text-walnut/60 font-body text-sm hover:text-sandstone transition-colors">
                    +91 98666 59400
                  </a>
                  <a href="tel:+918341149400" className="text-walnut/60 font-body text-sm hover:text-sandstone transition-colors">
                    +91 83411 49400
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-sandstone/30 flex items-center justify-center flex-shrink-0">
                <MapPin size={16} className="text-sandstone" />
              </div>
              <div>
                <p className="text-walnut font-body text-sm font-medium">Showroom</p>
                <div className="flex flex-col gap-1">
                  <a href="https://maps.app.goo.gl/14SpMPxjC79o5LJy8?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-walnut/60 font-body text-sm hover:text-sandstone transition-colors">
                    Bowenpally, Hyderabad
                  </a>
                  <a href="https://maps.app.goo.gl/4YjTKFK2dHEAKLxa6?g_st=iw" target="_blank" rel="noopener noreferrer" className="text-walnut/60 font-body text-sm hover:text-sandstone transition-colors">
                    Doolapally, Hyderabad
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 border border-sandstone/30 flex items-center justify-center flex-shrink-0">
                <Clock size={16} className="text-sandstone" />
              </div>
              <div>
                <p className="text-walnut font-body text-sm font-medium">Hours</p>
                <p className="text-walnut/60 font-body text-sm">
                  Mon – Sat: 10 AM – 8 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);

}