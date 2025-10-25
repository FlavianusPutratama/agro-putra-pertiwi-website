"use client";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="bg-brand-green text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Interested in Importing Indonesian Raw Spices?
        </motion.h2>
        <motion.p 
          className="max-w-2xl mx-auto mb-8 text-gray-200 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Let’s discuss your sourcing requirements. Our export team will contact you within 24 hours with product details and export terms.
        </motion.p>
        <motion.a 
          href="#contact" 
          className="bg-brand-gold text-brand-brown font-bold py-3 px-10 rounded-lg hover:bg-yellow-400 transition-all duration-300 text-lg inline-block shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us Now
        </motion.a>
      </div>
    </section>
  );
};

export default CTA;