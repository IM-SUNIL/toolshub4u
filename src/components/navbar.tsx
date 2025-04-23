'use client';

import React, {useState, useEffect, useRef} from 'react';
import {Search, Menu, ChevronDown} from 'lucide-react';
import {Input} from "@/components/ui/input";
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
  const searchInputRef = useRef<HTMLInputElement>(null);
  const {theme, setTheme} = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
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
    {name: 'Design Tools', href: '/categories?category=design'},
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(value.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
      );

      const suggestedNames = filteredTools.map(tool => tool.name);
      setSuggestions(suggestedNames);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <header className="sticky top-0 bg-[#0D1117] z-50 shadow-md border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Section: Logo */}
        <a href="/" className="text-2xl font-semibold text-foreground title-animation">
          ToolsHub4u
        </a>

        {/* Center Section: Search Bar (Hidden on mobile) */}
        <div className="hidden md:flex items-center flex-grow px-4">
          <form onSubmit={handleSubmit} className="relative w-full">
            <Input
              type="search"
              placeholder="Search tools, categories..."
              className="w-full rounded-full py-2 px-4 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-sm hover:shadow-md transition-shadow duration-200"
              ref={searchInputRef}
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
              <button type="submit" className="p-2 rounded-full hover:bg-accent transition-colors">
                <Search className="h-4 w-4 text-muted-foreground cursor-pointer" onClick={handleSearchClick}/>
              </button>
            </div>
            {suggestions.length > 0 && (
              <ul className="absolute left-0 mt-2 w-full bg-popover border border-border rounded-md shadow-md z-10">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                    onClick={() => {
                      setSearchTerm(suggestion);
                      setSuggestions([]);
                      router.push(`/search?query=${suggestion}`);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </form>
        </div>

        {/* Right Section: Categories, About Us, Contact Us, and Dark Mode Toggle */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <DropdownMenu open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
            <DropdownMenuTrigger
              className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
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
            className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >About Us</Link>
          <Link
            href="/contact"
            className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >Contact Us</Link>
          <button
            variant="ghost"
            size="icon"
            className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === "dark" ? <Sun className="h-5 w-5 text-foreground cursor-pointer"/> :
              <Moon className="h-5 w-5 text-foreground cursor-pointer"/>}
          </button>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Menu className="h-5 w-5"/>
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
                    className="block py-2 text-foreground hover:underline"
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
                <a href="/about" className="block py-2 text-foreground hover:underline">About Us</a>
                <a href="/contact" className="block py-2 text-foreground hover:underline">Contact Us</a>
              </div>
              <div className="flex justify-center pb-4">
                <button
                  variant="ghost"
                  size="icon"
                  className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === "dark" ? <Sun className="h-5 w-5 text-foreground cursor-pointer"/> :
                    <Moon className="h-5 w-5 text-foreground cursor-pointer"/>}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
