"use client";
import { motion } from "framer-motion";

const Sustainability = () => {
  return (
    // overflow-hidden tetap ada untuk keamanan, meskipun tidak ada animasi x
    <section className="py-24 bg-brand-light overflow-hidden"> 
      <div className="container mx-auto px-4">
        {/* Kontainer teks sekarang di tengah dan lebarnya dibatasi */}
        <motion.div 
          className="max-w-3xl mx-auto text-center md:text-left" // Pusatkan teks di layar kecil, ratakan kiri di layar lebih besar
          initial={{ opacity: 0, y: 50 }} // Animasi slide-up saja
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-brand-green mb-4">Our Commitment to Sustainability</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            We believe in responsible sourcing that empowers local farmers and preserves Indonesia’s natural environment. By supporting ethical trade and sustainable farming, PT Agro Pertiwi ensures that every shipment represents both quality and integrity.
          </p>
          <p className="text-gray-600 leading-relaxed font-semibold">
            Our goal is to grow together—creating value for communities and customers worldwide.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Sustainability;