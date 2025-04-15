'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {Search} from 'lucide-react';
import {Input} from "@/components/ui/input";
import './navbar.css';

export const Navbar = () => {
  return (
    <header className="sticky top-0 bg-background z-50 shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold text-foreground title-animation">
          ToolsHub4U
        </a>
        <div className="w-full max-w-md">
          <Input
            type="search"
            placeholder="Search for tools..."
            className="w-full rounded-full py-2 px-4 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>
        <div className="flex items-center space-x-4">
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

