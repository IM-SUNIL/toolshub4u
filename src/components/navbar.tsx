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
  const [searchTerm, setSearchTerm] = useState('');

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

  const categoryLinks = [
    {name: 'AI Tools', href: '/categories?category=ai'},
    {name: 'Resume Templates', href: '/categories?category=resume'},
    {name: 'PDF Tools', href: '/categories?category=pdf'},
    {name: 'Video Editors', href: '/categories?category=video'},
    {name: 'SEO Tools', href: '/categories?category=seo'},
    {name: 'Design Tools', href: '/categories?category=design'},
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md border-b w-full" style={{
        background: 'inherit',
        backgroundSize: '200% 200%',
        animation: 'moveGradient 10s ease infinite'
      }}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between" >
        {/* Left Section: Logo */}
        <a href="/" className="text-2xl font-semibold text-white title-animation">
          ToolsHub4u
        </a>

        {/* Right Section: Categories, About Us, Contact Us, and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger
              className="text-white transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
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
                <DropdownMenuItem key={link.name}><a href={link.href}>{link.name}</a></DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="text-white transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >About Us</Link>
          <Link
            href="/contact"
            className="text-white transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >Contact Us</Link>
          <button
            variant="ghost"
            size="icon"
            className="text-white transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === "dark" ? <Sun className="h-5 w-5 text-white cursor-pointer"/> :
              <Moon className="h-5 w-5 text-white cursor-pointer"/>}
          </button>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className="h-5 w-5 text-white"/>
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
                    className="block py-2 text-white hover:underline"
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
                <a href="/about" className="block py-2 text-white hover:underline">About Us</a>
                <a href="/contact" className="block py-2 text-white hover:underline">Contact Us</a>
              </div>
              <div className="flex justify-center pb-4">
                <button
                  variant="ghost"
                  size="icon"
                  className="text-white transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5 text-white cursor-pointer"/> :
                    <Moon className="h-5 w-5 text-white cursor-pointer"/>}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
