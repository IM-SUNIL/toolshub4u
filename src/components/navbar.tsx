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
import {cn} from "@/lib/utils";

const tools = [
  {
    name: 'Tool Name 1',
    description: 'A short description of the tool.',
    tags: ['ai', 'free'],
    id: 'tool-1',
  },
  {
    name: 'Tool Name 2',
    description: 'A short description of the tool.',
    tags: ['pdf', 'paid'],
    id: 'tool-2',
  },
  {
    name: 'Tool Name 3',
    description: 'A short description of the tool.',
    tags: ['resume', 'free'],
    id: 'tool-3',
  },
  {
    name: 'Tool Name 4',
    description: 'A short description of the tool.',
    tags: ['seo', 'paid'],
    id: 'tool-4',
  },
];

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
  ];

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
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
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-background z-50 shadow-md border-b">
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
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200">Categories</DropdownMenuTrigger>
              <DropdownMenuContent>
                {categoryLinks.map(link => (
                  <DropdownMenuItem key={link.name}><a href={link.href}>{link.name}</a></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          <a
            href="/about"
            className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >About Us</a>
          <a
            href="/contact"
            className="text-foreground transition-brightness hover:brightness-125 cursor-pointer hover:text-shadow-md transition-shadow duration-200"
          >Contact Us</a>
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
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-5 w-5 text-foreground cursor-pointer"/> :
              <Moon className="h-5 w-5 text-foreground cursor-pointer"/>}
          </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
