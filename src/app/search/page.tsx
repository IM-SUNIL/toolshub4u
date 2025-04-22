'use client';

import React from 'react';
import {useSearchParams} from 'next/navigation';
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";

const tools = [
  {
    name: 'Grammarly',
    description: 'An AI-powered writing assistant that helps you improve your grammar, spelling, and style.',
    tags: ['ai', 'writing', 'free'],
    id: 'grammarly',
    category: 'ai'
  },
  {
    name: 'Adobe Acrobat PDF Editor',
    description: 'A comprehensive PDF editor to create, convert, edit, and sign PDF documents.',
    tags: ['pdf', 'paid', 'editing'],
    id: 'adobe-acrobat',
    category: 'pdf'
  },
  {
    name: 'Canva',
    description: 'A graphic design platform that allows users to create social media graphics, presentations, posters, and other visual content.',
    tags: ['design', 'free', 'marketing'],
    id: 'canva',
    category: 'design'
  },
  {
    name: 'SEMrush',
    description: 'An online visibility management and content marketing platform.',
    tags: ['seo', 'paid', 'marketing'],
    id: 'semrush',
    category: 'seo'
  },
  {
    name: 'Kickresume',
    description: 'A resume builder platform with pre-designed templates and AI writing assistance.',
    tags: ['resume', 'free', 'ai'],
    id: 'kickresume',
    category: 'resume'
  },
  {
    name: 'Adobe Premiere Pro',
    description: 'A timeline-based video editing software application.',
    tags: ['video', 'paid', 'editing'],
    id: 'adobe-premiere-pro',
    category: 'video'
  },
];

export default function SearchResultsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(query.toLowerCase()) ||
    tool.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold mb-6">Search Results for "{query}"</h1>
          {filteredTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                  onClick={() => {
                    // Replace with your tool detail page route
                    window.location.href = `/tool/${tool.id}`;
                  }}
                >
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground">{tool.description}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center">
                        {tool.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 mr-1 rounded-full text-xs font-semibold bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/80 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No tools found matching your query.</p>
          )}
        </div>
      </main>
      <Footer/>
    </div>
  );
}

