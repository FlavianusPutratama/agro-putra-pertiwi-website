const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-brown text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} PT Agro Pertiwi. All Rights Reserved.</p>
        <p>
          Visit our official website at{' '}
          <a href="http://www.agropertiwi.com" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
            [cite_start]www.agropertiwi.com [cite: 3, 55]
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;