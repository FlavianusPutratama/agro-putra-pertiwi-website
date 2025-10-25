import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold text-brand-green">
          AGRO PUTRA PERTIWI
        </Link>
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="#about" className="hover:text-brand-green transition-colors">About Us</Link>
          <Link href="#why-us" className="hover:text-brand-green transition-colors">Why Choose Us</Link>
          <Link href="#products" className="hover:text-brand-green transition-colors">Products</Link>
          <Link href="#contact" className="hover:text-brand-green transition-colors">Contact</Link>
        </nav>
        <a href="#contact" className="hidden md:block bg-brand-green text-white px-4 py-2 rounded-md hover:bg-green-800 transition-colors">
          Get a Quote
        </a>
      </div>
    </header>
  );
};

export default Navbar;