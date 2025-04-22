'use client';

import React from 'react';
import {Navbar} from '@/components/navbar';
import {Footer} from '@/components/footer';
import {FreeToolsGrid} from '@/components/free-tools-grid';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <section className="mt-12 text-center">
            <h1 className="text-3xl font-semibold mb-6">Explore Free AI Tools</h1>
            <FreeToolsGrid/>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
