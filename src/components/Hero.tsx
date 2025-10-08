const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-[80vh] flex items-center justify-center text-white bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }} // Ganti dengan gambar latar yang sesuai
    >
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          [cite_start]Premium Spices & Quality Furniture from Indonesia [cite: 5]
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          [cite_start]Delivering the best of Indonesian natural resources to the worldwide market. [cite: 8, 17]
        </p>
        <a href="#products" className="bg-brand-gold text-brand-brown font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-colors">
          Explore Our Products
        </a>
      </div>
    </section>
  );
};

export default Hero;