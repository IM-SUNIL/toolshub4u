
import React from 'react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-secondary z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold text-foreground">
          ToolScout
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-foreground hover:text-primary transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="/categories" className="text-foreground hover:text-primary transition-colors duration-200">
                Categories
              </a>
            </li>
            <li>
              <a href="/about" className="text-foreground hover:text-primary transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
