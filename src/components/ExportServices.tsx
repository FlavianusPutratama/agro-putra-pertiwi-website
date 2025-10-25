"use client";
import { motion } from "framer-motion";
import { Truck, FileText, Globe2 } from "lucide-react";

const ExportServices = () => {
    const services = [
        { icon: <Truck size={32} className="text-brand-gold"/>, title: "Bulk Packaging", description: "We export raw spices in bulk packaging, typically 25–50 kg woven bags or jute sacks, with custom options available." },
        { icon: <FileText size={32} className="text-brand-gold"/>, title: "Full Documentation", description: "Our process includes moisture control, labeling, and all necessary export documents like Certificate of Origin and Phytosanitary Certificate." },
        { icon: <Globe2 size={32} className="text-brand-gold"/>, title: "Global Reach", description: "Currently serving clients in Asia and the Middle East, with ongoing expansion to European markets." },
    ];

    return (
        <section className="py-24 bg-brand-brown text-white">
            <div className="container mx-auto px-4">
                <motion.div 
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold mb-4">Export Capacity & Services</h2>
                    <p className="max-w-3xl mx-auto text-gray-300">With a dedicated export team and a strong logistics network, we ensure smooth, reliable, and on-time delivery for every shipment.</p>
                </motion.div>
                <div className="grid md:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div 
                            key={index} 
                            className="text-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-brand-gold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExportServices;