"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="py-24 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-brand-green mb-4">About PT Agro Putra Pertiwi</h2>
          <div className="w-20 h-1 bg-brand-gold mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded in 2018, PT Agro Putra Pertiwi is a trading and manufacturing company based in Semarang, Central Java, Indonesia. We specialize in supplying raw spices and agricultural commodities such as turmeric, ginger, galangal, and porang chips directly sourced from local farmers and carefully processed in our facilities.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to connect Indonesia’s rich natural resources with global industries through responsible sourcing, consistent quality, and transparent export practices. We are committed to building long-term partnerships with buyers, importers, and distributors around the world.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;