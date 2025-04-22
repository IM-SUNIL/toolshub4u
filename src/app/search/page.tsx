'use client';

import React, {Suspense} from 'react';
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import SearchPage from "@/components/search-page";

export default function SearchResultsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div>Loading...</div>}>
            <SearchPage/>
          </Suspense>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
