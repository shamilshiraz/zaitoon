import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-800 text-white sm:flex justify-between">
      <div className="flex flex-col items-start p-10 space-y-4">
        <p className="text-3xl font-bold">Find us at</p>
        <p>Al Daith South, opp. Stirling University</p>
        <p>Ras Al Khaimah</p>
        <p>+971 12345678</p>
      </div>
      <div className="p-4">
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.9137803193325!2d55.89929469999997!3d25.7403647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef67549fd2d83e3%3A0x6b3d7b14db6dbd2b!2sZaitoon%20Mobile%20Phones%20%26%20Computers!5e0!3m2!1sen!2sin!4v1733467474259!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
