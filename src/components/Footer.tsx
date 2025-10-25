import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className="bg-brand-brown text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Column 1: About */}
          <div className="md:pr-8">
            <h3 className="text-2xl font-bold text-white mb-4">AGRO PUTRA PERTIWI</h3>
            <p className="text-gray-400">
              Your trusted partner for premium Indonesian spices and handcrafted furniture, delivered worldwide.
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-brand-gold transition-colors">About Us</a></li>
              <li><a href="#products" className="hover:text-brand-gold transition-colors">Products</a></li>
              <li><a href="#why-us" className="hover:text-brand-gold transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="flex-shrink-0 mr-3 mt-1 text-brand-gold" />
                <span>Jl. Prof Soedarto, No. 36, Tembalang, Semarang, Indonesia</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="flex-shrink-0 mr-3 text-brand-gold" />
                <a href="mailto:info@agropertiwi.com" className="hover:text-brand-gold transition-colors">info@agropertiwi.com</a>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="flex-shrink-0 mr-3 text-brand-gold" />
                <a href="https://wa.me/628112796793" className="hover:text-brand-gold transition-colors">+62 811 2796 793</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {currentYear} PT Agro Putra Pertiwi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;