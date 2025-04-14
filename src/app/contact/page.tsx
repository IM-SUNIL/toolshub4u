
import React from 'react';
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-6">Contact Us</h1>
          <p className="text-muted-foreground">
            Feel free to reach out to us with any questions or feedback.
          </p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
