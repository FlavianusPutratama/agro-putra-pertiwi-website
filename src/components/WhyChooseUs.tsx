"use client"; // Tambahkan ini
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Users, CheckSquare, Package, Sprout } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <CheckSquare size={40} className="text-brand-green" />,
      title: 'Quality Control & Sorting',
      description: 'Each batch of spices is hand-selected, properly dried, and sorted by grade to meet international export standards.',
    },
    {
      icon: <Package size={40} className="text-brand-green" />,
      title: 'Reliable Export Handling',
      description: 'We provide professional export support, including documentation, moisture checks, labeling, and safe packaging for every delivery.',
    },
    {
      icon: <Sprout size={40} className="text-brand-green" />,
      title: 'Sustainable & Local Sourcing',
      description: 'We work closely with local farmers across Central Java to promote ethical trade and sustainable cultivation.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Jarak waktu animasi antar kartu
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="why-us" className="py-24 bg-brand-light">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-brand-green mb-4"
        >
          Why Choose Us
        </motion.h2>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-20 h-1 bg-brand-gold mx-auto mb-16"
        ></motion.div>
        <motion.div 
          className="grid md:grid-cols-3 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;