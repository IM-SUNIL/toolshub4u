'use client';

import React, {useState, useEffect} from 'react';
import {Menu} from 'lucide-react';
import './navbar.css';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import Link from "next/link";
import {SearchBar} from "@/components/search-bar";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Sun, Moon} from 'lucide-react';
import {useTheme} from 'next-themes';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const {theme, setTheme} = useTheme();

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
          <DropdownMenu>
            <DropdownMenuTrigger className="text-sm hover:brightness-125 transition-transform cursor-pointer flex items-center" style={{ outline: 'none', boxShadow: 'none' }}>
              Categories
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-secondary border-none">
              <DropdownMenuItem><Link href="/categories?category=ai">AI Tools</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/categories?category=pdf">PDF Tools</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/categories?category=video">Video Tools</Link></DropdownMenuItem>
              <DropdownMenuItem><Link href="/categories?category=image">Image Tools</Link></DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
             <Link href="/submit-tool" className="text-sm hover:brightness-125 transition-transform cursor-pointer">Submit Tool</Link>
             <Link href="/my-favorites" className="text-sm hover:brightness-125 transition-transform cursor-pointer">My Favorites</Link>
          <button
            className="p-1 rounded-full hover:bg-gray-200 transition-colors"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          >
            {theme === 'light' ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
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
              </div>
              <div className="flex flex-col items-center space-y-4">
                <DropdownMenu>
                  <DropdownMenuTrigger className="text-sm hover:brightness-125 transition-transform cursor-pointer flex items-center">
                    Categories
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-secondary border-none">
                    <DropdownMenuItem><Link href="/categories?category=ai">AI Tools</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/categories?category=pdf">PDF Tools</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/categories?category=video">Video Tools</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href="/categories?category=image">Image Tools</Link></DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Link href="/submit-tool" className="text-sm hover:brightness-125 transition-transform cursor-pointer">Submit Tool</Link>
                <Link href="/my-favorites" className="text-sm hover:brightness-125 transition-transform cursor-pointer">My Favorites</Link>
                <button
                  className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                  onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                >
                  {theme === 'light' ? <Moon className="h-4 w-4"/> : <Sun className="h-4 w-4"/>}
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

