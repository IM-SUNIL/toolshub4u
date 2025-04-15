'use client';

import React, {useState, useEffect, useRef} from 'react';
import {Search, Menu} from 'lucide-react';
import {Input} from "@/components/ui/input";
import './navbar.css';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useRouter} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {Sun, Moon} from 'lucide-react';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearchClick = () => {
    searchInputRef.current?.focus();
  };

  const categoryLinks = [
    {name: 'AI Tools', href: '/categories?category=ai'},
    {name: 'Resume Templates', href: '/categories?category=resume'},
    {name: 'PDF Tools', href: '/categories?category=pdf'},
    {name: 'Video Editors', href: '/categories?category=video'},
    {name: 'SEO Tools', href: '/categories?category=seo'},
  ];

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };


  return (
    <header className="sticky top-0 bg-background z-50 shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Logo */}
        <a href="/" className="text-2xl font-semibold text-foreground title-animation">
          ToolsHub4u
        </a>

        {/* Center Section: Search Bar (Hidden on mobile) */}
        <div className="hidden md:flex items-center flex-grow px-4">
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search tools, categories..."
              className="w-full rounded-full py-2 px-4 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-sm hover:shadow-md transition-shadow duration-200"
              ref={searchInputRef}
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <Search className="h-4 w-4 text-muted-foreground cursor-pointer" onClick={handleSearchClick}/>
            </div>
          </div>
        </div>

        {/* Right Section: Categories, Top Rated, etc. (Collapsed on mobile) */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">
                Categories
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {categoryLinks.map(link => (
                <DropdownMenuItem key={link.name} onClick={() => router.push(link.href)}>
                  {link.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <a href="/about" className="text-foreground hover:underline">About Us</a>
          <a href="/contact" className="text-foreground hover:underline">Contact Us</a>
           <Button
             variant="ghost"
             size="icon"
             onClick={toggleTheme}
           >
             {theme === "dark" ? <Sun className="h-5 w-5 text-foreground cursor-pointer"/> :
               <Moon className="h-5 w-5 text-foreground cursor-pointer"/>}
           </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className="h-5 w-5"/>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 md:w-2/3">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>
                  Explore ToolsHub4u
                </SheetDescription>
              </SheetHeader>
              {categoryLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-foreground hover:underline"
                >
                  {link.name}
                </a>
              ))}
              <a href="/about" className="block py-2 text-foreground hover:underline">About Us</a>
              <a href="/contact" className="block py-2 text-foreground hover:underline">Contact Us</a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
