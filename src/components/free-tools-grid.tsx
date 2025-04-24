
'use client';

import React from 'react';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';

const categories = [
  {
    name: 'Free AI Tools for 3D Model Generators',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
  {
    name: 'Free AI Tools for AI Model',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
  {
    name: 'Free AI Tools for Analytics',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
  {
    name: 'Free AI Tools for Animation Generator',
    imageUrl: 'https://picsum.photos/200/150', // Placeholder image
  },
];

export const FreeToolsGrid = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-card rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <img src={category.imageUrl} alt={category.name} className="w-full h-40 object-cover"/>
          <div className="p-4 flex flex-col justify-between h-full">
            <h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
            <Button onClick={() => router.push('/categories')}>Explore</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

