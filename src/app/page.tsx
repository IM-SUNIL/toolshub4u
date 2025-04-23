'use client';

import React from 'react';
import {Navbar} from '@/components/navbar';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {useRouter} from "next/navigation";
import {Search} from "lucide-react";
import {useState} from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      router.push(`/search?query=${searchTerm}`);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a192f] to-[#1e2a38] text-white font-inter">
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] text-center">
        <h1 className="text-5xl font-bold mb-4">Find the Perfect Tool for Your Needs</h1>
        <p className="text-gray-400 mb-8">Discover a curated directory of online tools to boost your productivity and creativity.</p>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <Input
            type="search"
            placeholder="Search for tools..."
            className="w-full md:w-auto px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-2 rounded-md transition-colors">
            <Search className="h-4 w-4 mr-2"/> Search
          </Button>
        </form>
        <Button variant="outline" className="mt-6 text-white hover:text-gray-300 border-white">
          Try ToolsHub4u
        </Button>
      </div>
    </div>
  );
}
