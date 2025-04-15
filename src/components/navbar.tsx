'use client';

import React, {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';
import {Settings} from 'lucide-react';
import {Input} from "@/components/ui/input";
import './navbar.css';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Menu} from "lucide-react"

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480); // Adjust breakpoint as needed
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 bg-background z-50 shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between flex-col md:flex-row">
        <a href="/" className="text-2xl font-semibold text-foreground title-animation mb-2 md:mb-0">
          ToolsHub4u
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5"/>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 md:w-2/3">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Explore ToolsHub4u
                </SheetDescription>
              </SheetHeader>
              {/*  REMOVED Buttons in Mobile Menu */}
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex items-center space-x-4">
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


