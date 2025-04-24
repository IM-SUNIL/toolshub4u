'use client';

import React, {useState, useEffect, useRef} from 'react';
import {Menu, ChevronDown} from 'lucide-react';
import './navbar.css';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useRouter} from "next/navigation";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Sun, Moon} from 'lucide-react';
import {cn} from "@/lib/utils";
import Link from "next/link";
import {useTheme} from "next-themes";

const tools = [
  {
    name: 'Grammarly',
    description: 'An AI-powered writing assistant that helps you improve your grammar, spelling, and style.',
    tags: ['ai', 'writing', 'free'],
    id: 'grammarly',
    category: 'ai'
  },
  {
    name: 'Adobe Acrobat PDF Editor',
    description: 'A comprehensive PDF editor to create, convert, edit, and sign PDF documents.',
    tags: ['pdf', 'paid', 'editing'],
    id: 'adobe-acrobat',
    category: 'pdf'
  },
  {
    name: 'Canva',
    description: 'A graphic design platform that allows users to create social media graphics, presentations, posters, and other visual content.',
    tags: ['design', 'free', 'marketing'],
    id: 'canva',
    category: 'design'
  },
  {
    name: 'SEMrush',
    description: 'An online visibility management and content marketing platform.',
    tags: ['seo', 'paid', 'marketing'],
    id: 'semrush',
    category: 'seo'
  },
  {
    name: 'Kickresume',
    description: 'A resume builder platform with pre-designed templates and AI writing assistance.',
    tags: ['resume', 'free', 'ai'],
    id: 'kickresume',
    category: 'resume'
  },
  {
    name: 'Adobe Premiere Pro',
    description: 'A timeline-based video editing software application.',
    tags: ['video', 'paid', 'editing'],
    id: 'adobe-premiere-pro',
    category: 'video'
  },
  {
    name: 'Final Cut Pro',
    description: 'A professional non-linear video editing application.',
    tags: ['video', 'paid', 'editing'],
    id: 'final-cut-pro',
    category: 'video'
  },
  {
    name: 'Google Analytics',
    description: 'A web analytics service that tracks and reports website traffic.',
    tags: ['analytics', 'free', 'marketing'],
    id: 'google-analytics',
    category: 'seo'
  },
  {
    name: 'Sketch',
    description: 'A vector graphics editor for macOS, primarily used for UI and UX design.',
    tags: ['design', 'paid', 'ui/ux'],
    id: 'sketch',
    category: 'design'
  },
  {
    name: 'ChatGPT',
    description: 'A conversational AI that can generate human-like text for various applications.',
    tags: ['ai', 'conversational', 'free'],
    id: 'chatgpt',
    category: 'ai'
  }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const {theme, setTheme} = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <header className="sticky top-0 z-50 shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between bg-gradient-to-r from-[#0a192f] to-[#1e2a38]">
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
