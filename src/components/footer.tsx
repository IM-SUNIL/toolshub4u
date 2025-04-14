
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-4">
      <div className="container mx-auto px-4 text-center">
        <p>
          Made with ❤️ by ToolScout
        </p>
        <nav className="mt-2">
          <a href="#" className="text-secondary-foreground hover:underline mx-2">
            Terms of Service
          </a>
          <a href="#" className="text-secondary-foreground hover:underline mx-2">
            Privacy Policy
          </a>
          <a href="#" className="text-secondary-foreground hover:underline mx-2">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
};
