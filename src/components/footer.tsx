

import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-4 text-white">
      <div className="container mx-auto px-4 text-center">
        <p>
          Made with ❤️ by ToolHub4U
        </p>
        <nav className="mt-2">
          <a href="#" className="text-white hover:underline mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-white hover:underline mx-2">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};

