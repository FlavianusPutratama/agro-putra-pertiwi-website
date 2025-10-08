import { ShieldCheck, Globe, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-brand-green" />,
      title: 'Best Quality Control',
      description: 'Professional inspectors and expert auditors ensure the premium quality of our products.',
    },
    {
      icon: <Globe className="w-12 h-12 text-brand-green" />,
      title: 'Worldwide Products Trade',
      description: 'We deliver our products across the globe with an efficient workflow and shipping process.',
    },
    {
      icon: <Users className="w-12 h-12 text-brand-green" />,
      title: 'Best Support Team',
      description: 'Our well-trained technical support team is ready to assist you 24 hours a day.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-brand-light">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-brand-green mb-4">Why Choose Us</h2>
        <div className="w-20 h-1 bg-brand-gold mx-auto mb-12"></div>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-md mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-brown mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;