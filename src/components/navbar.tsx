'use client';

import React, {useState, useEffect} from 'react';
import {ChevronDown, Menu} from 'lucide-react';
import './navbar.css';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useRouter} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Sun, Moon} from 'lucide-react';
import {cn} from "@/lib/utils";
import Link from "next/link";
import {useTheme} from "next-themes";
import {SearchBar} from "@/components/search-bar";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categoryLinks = [
    {name: 'AI Tools', href: '/categories?category=ai'},
    {name: 'Resume Templates', href: '/categories?category=resume'},
    {name: 'PDF Tools', href: '/categories?category=pdf'},
    {name: 'Video Editors', href: '/categories?category=video'},
    {name: 'SEO Tools', href: '/categories?category=seo'},
    {name: 'Design Tools', href: '/categories?category=design'},
  ];

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

  return (
    <header className="sticky top-0 z-50 w-full text-white" style={{
        background: 'linear-gradient(to right, #0f2027, #203A43, #2c5364)',
        backgroundSize: '200% 200%',
        animation: 'moveGradient 10s ease infinite'
      }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between" >
        {/* Left Section: Logo */}
        <a href="/" className="text-2xl font-semibold title-animation">
          ToolsHub4u
        </a>

        {/* Right Section: Categories, About Us, Contact Us, and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger
              className="transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {categoryLinks.map(link => (
                <DropdownMenuItem key={link.name}><a className="text-foreground" href={link.href}>{link.name}</a></DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >About Us</Link>
          <Link
            href="/contact"
            className="transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >Contact Us</Link>
          <button
            variant="ghost"
            size="icon"
            className="transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === "dark" ? <Sun className="h-5 w-5  cursor-pointer"/> :
              <Moon className="h-5 w-5  cursor-pointer"/>}
          </button>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className="h-5 w-5 "/>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4 md:w-2/3 flex flex-col justify-between">
              <div>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription>
                    Explore ToolsHub4u
                  </SheetDescription>
                </SheetHeader>
                <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
                  <DropdownMenuTrigger
                    className="block py-2  hover:underline"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Categories
                    <ChevronDown className="inline-block ml-1 w-4 h-4"/>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {categoryLinks.map(link => (
                      <DropdownMenuItem key={link.name}><a href={link.href}>{link.name}</a></DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <a href="/about" className="block py-2  hover:underline">About Us</a>
                <a href="/contact" className="block py-2  hover:underline">Contact Us</a>
              </div>
              <div className="flex justify-center pb-4">
                <button
                  variant="ghost"
                  size="icon"
                  className="transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5  cursor-pointer"/> :
                    <Moon className="h-5 w-5  cursor-pointer"/>}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
       {isMobile && (
        <div className="container mx-auto px-4 py-3">
          <SearchBar/>
        </div>
      )}
    </header>
  );
};
