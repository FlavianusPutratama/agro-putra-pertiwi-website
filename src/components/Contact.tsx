import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-green mb-4">Contact Us</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-12"></div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-brand-brown">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-brand-green" />
            <p>Jl. Prof Soedarto, No. 36, Tembalang, Semarang</p>
          </div>
          <a href="mailto:info@agropertiwi.com" className="flex items-center gap-3 hover:text-brand-green">
            <Mail className="w-6 h-6 text-brand-green" />
            <p>info@agropertiwi.com</p>
          </a>
          <a href="https://wa.me/628112796793" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-brand-green">
            <Phone className="w-6 h-6 text-brand-green" />
            <p>+62 811 2796 793</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;