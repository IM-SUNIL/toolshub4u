

import React from 'react';
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-3xl font-semibold mb-6">About ToolHub4U</h1>
          <p className="text-gray-300">
            ToolHub4U is dedicated to helping you discover the best online tools for your needs.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}



