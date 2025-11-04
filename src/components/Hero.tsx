"use client";
import { motion } from "framer-motion";
import { Phone, Download } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center text-white bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://res.cloudinary.com/djcrr0wsq/image/upload/v1760099277/high-angle-asian-food-ingredients-with-copy-space_o9nlxl.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Premium Indonesian Spices – Export Ready
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-gray-200">
          Delivering high-quality raw spices from Central Java—responsibly sourced, carefully sorted, and export-ready.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.a 
            href="https://wa.me/628112796793"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-brand-green text-white font-bold py-3 px-8 rounded-lg hover:bg-green-800 transition-all duration-300 text-lg transform hover:scale-105 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="mr-2" size={20} />
            Contact Us for Any Inquiry
          </motion.a>
          <motion.a 
            href="/path-to-your-catalog.pdf"
            download
            className="flex items-center justify-center bg-transparent border-2 border-brand-gold text-brand-gold font-bold py-3 px-8 rounded-lg hover:bg-brand-gold hover:text-brand-brown transition-all duration-300 text-lg transform hover:scale-105 w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="mr-2" size={20} />
            Download Product Catalog
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;