import Image from 'next/image';

const Products = () => {
  const spices = [
    { name: 'Turmeric (Curcuma longa)', img: '/images/turmeric.jpg' },
    { name: 'Ginger (Zingiber officinale)', img: '/images/ginger.jpg' },
    { name: 'Galangal (Alpinia galanga)', img: '/images/galangal.jpg' },
    { name: 'Porang (Amorphophallus-muelleri)', img: '/images/porang.jpg' },
  ];
  const furniture = [
    { name: 'Sofa', img: '/images/sofa.jpg' },
    { name: 'Chair', img: '/images/chair.jpg' },
    { name: 'Table', img: '/images/table.jpg' },
    { name: 'Bedside Table', img: '/images/bedside-table.jpg' },
  ];

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-brand-green mb-4">Our Products</h2>
            <div className="w-20 h-1 bg-brand-gold mx-auto"></div>
        </div>

        {/* Spices Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-brand-brown mb-8 text-center">Organic Spices</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {spices.map(item => (
              <div key={item.name} className="group overflow-hidden rounded-lg shadow-lg">
                <Image src={item.img} alt={item.name} width={400} height={400} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-4 bg-gray-50">
                  <h4 className="font-bold text-center">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Furniture Section */}
        <div>
          <h3 className="text-2xl font-semibold text-brand-brown mb-8 text-center">Quality Furniture</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {furniture.map(item => (
              <div key={item.name} className="group overflow-hidden rounded-lg shadow-lg">
                <Image src={item.img} alt={item.name} width={400} height={400} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" />
                <div className="p-4 bg-gray-50">
                  <h4 className="font-bold text-center">{item.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;