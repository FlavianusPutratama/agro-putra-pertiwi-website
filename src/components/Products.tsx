"use client"; // Tambahkan ini
import { motion } from "framer-motion";
import Image from 'next/image';

const Products = () => {
  const spices = [
    { name: 'Turmeric', scientific: 'Curcuma longa', img: 'https://res.cloudinary.com/djcrr0wsq/image/upload/v1760099117/uaIWPLm4NZm4o3VJVs8s_l3u3d0.jpg', description: 'High-curcumin rhizomes, naturally sun-dried and sorted. Available whole or sliced.' },
    { name: 'Ginger', scientific: 'Zingiber officinale', img: 'https://res.cloudinary.com/djcrr0wsq/image/upload/v1760099130/assortment-ginger-wooden-board_uoposj.jpg', description: 'Fresh and dried ginger with strong aroma and high essential oil content, available in bulk.' },
    { name: 'Galangal', scientific: 'Alpinia galanga', img: 'https://res.cloudinary.com/djcrr0wsq/image/upload/v1760099110/eIbCVct9s11cG8dpjmoP_l1vbhc.jpg', description: 'Clean and well-dried roots with a rich, spicy aroma. Available whole or sliced.' },
    { name: 'Porang Chips', scientific: 'Amorphophallus muelleri', img: 'https://res.cloudinary.com/djcrr0wsq/image/upload/v1760099106/Ks5hjxPE5CvUX5EYD6mq_zwl9wr.jpg', description: 'High-quality chips with rich glucomannan content, suitable for various industries.' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-brand-brown mb-10 text-center">Organic Spices</h3>
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {spices.map(item => (
              <motion.div key={item.name} variants={itemVariants} className="group overflow-hidden rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="overflow-hidden">
                  <Image src={item.img} alt={item.name} width={400} height={400} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-gray-50 text-center">
                  <h4 className="font-bold text-lg text-brand-brown">{item.name}</h4>
                  <p className="text-sm text-gray-500">{item.scientific}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;