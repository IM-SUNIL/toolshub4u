'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {Search} from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-secondary z-50 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold text-foreground">
          ToolScout
        </a>
        <nav className="flex items-center space-x-6">
          <a href="/" className="text-foreground hover:text-primary transition-colors duration-200">
            Home
          </a>
          <a href="/categories" className="text-foreground hover:text-primary transition-colors duration-200">
            Categories
          </a>
          <a href="/about" className="text-foreground hover:text-primary transition-colors duration-200">
            About
          </a>
          <a href="/contact" className="text-foreground hover:text-primary transition-colors duration-200">
            Contact
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5"/>
          </Button>
          <Button variant="outline" size="sm">
            Submit Tool
          </Button>
          <Button size="sm">Sign Up</Button>
          <Button variant="link" size="sm">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};
