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
    <div className="min-h-screen text-white font-inter">
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] text-center">
        <h1 className="text-5xl font-bold mb-4">Find the Perfect Tool for Your Needs</h1>
        <p className="text-gray-400 mb-8">Discover a curated directory of online tools to boost your productivity and creativity.</p>
        
        
      </div>
    </div>
  );
}


