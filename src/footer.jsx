import React from 'react';

const Footer = () => {
  const links = [
    { href: "#", text: "Meta" },
    { href: "#", text: "About" },
    { href: "#", text: "Blog" },
    { href: "#", text: "Jobs" },
    { href: "#", text: "Help" },
    { href: "#", text: "API" },
    { href: "#", text: "Privacy" },
    { href: "#", text: "Terms" },
    { href: "#", text: "Locations" },
    { href: "#", text: "Instagram Lite" },
    { href: "#", text: "Threads" },
    { href: "#", text: "Contact Uploading & Non-Users" },
    { href: "#", text: "Meta Verified" },
  ];

  return (
    <footer className="bg-gray-100 py-6 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto text-center text-gray-500 text-sm">
        <nav className="flex flex-wrap justify-center mb-4">
          {links.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="px-3 py-1 hover:underline"
            >
              {link.text}
            </a>
          ))}
        </nav>
        <div className="flex items-center justify-center space-x-2">
          <select 
            className="bg-transparent border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none"
            defaultValue="en"
          >
            <option value="en">English</option>
            {/* Add more language options here */}
          </select>
          <span>&copy; 2025 Instagram from Meta</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;