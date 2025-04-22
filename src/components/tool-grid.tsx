'use client';

import React from 'react';
import {useRouter} from 'next/navigation';

const tools = [
  {
    name: 'Grammarly',
    description: 'An AI-powered writing assistant that helps you improve your grammar, spelling, and style.',
    pricing: 'Free',
    rating: 4.5,
    thumbnail: 'https://picsum.photos/200/150',
    id: 'grammarly',
  },
  {
    name: 'Adobe Acrobat PDF Editor',
    description: 'A comprehensive PDF editor to create, convert, edit, and sign PDF documents.',
    pricing: 'Paid',
    rating: 3.8,
    thumbnail: 'https://picsum.photos/200/150',
    id: 'adobe-acrobat',
  },
  {
    name: 'Canva',
    description: 'A graphic design platform that allows users to create social media graphics, presentations, posters, and other visual content.',
    pricing: 'Free',
    rating: 4.2,
    thumbnail: 'https://picsum.photos/200/150',
    id: 'canva',
  },
  {
    name: 'SEMrush',
    description: 'An online visibility management and content marketing platform.',
    pricing: 'Paid',
    rating: 4.7,
    thumbnail: 'https://picsum.photos/200/150',
    id: 'semrush',
  },
];

export const ToolGrid = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tools.map((tool, index) => (
        <div
          key={index}
          className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          onClick={() => {
            router.push(`/tool/${tool.id}`);
          }}
        >
          <img src={tool.thumbnail} alt={tool.name} className="w-full h-40 object-cover"/>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-foreground mb-2">{tool.name}</h3>
            <p className="text-muted-foreground">{tool.description}</p>
            <div className="mt-3 flex items-center justify-between">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  tool.pricing === 'Free' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}
              >
                {tool.pricing}
              </span>
              <div className="flex items-center">
                <span className="text-sm mr-1">{tool.rating}</span>
                ⭐
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
