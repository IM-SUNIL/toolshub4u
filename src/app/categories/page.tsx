
import React from 'react';
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import {ToolGrid} from "@/components/tool-grid";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-6">All Tools</h1>
          <ToolGrid/>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
