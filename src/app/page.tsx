'use client';

import React from 'react';
import {Navbar} from '@/components/navbar';
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D1117] to-[#161B22] text-white font-inter">
      <Navbar/>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] text-center">
        <h1 className="text-5xl font-bold mb-4">Find the Perfect Tool for Your Needs</h1>
        <p className="text-gray-400 mb-8">Discover a curated directory of online tools to boost your productivity and creativity.</p>
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-auto px-4 py-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-md transition-colors">
            Sign Up
          </Button>
        </div>
        <Button variant="outline" className="mt-6 text-white hover:text-gray-300 border-white">
          Try ToolsHub4u
        </Button>
      </div>
    </div>
  );
}
