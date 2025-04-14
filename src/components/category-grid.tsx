
import React from 'react';

const categories = [
  {
    name: 'AI Tools',
    description: 'Explore the latest AI-powered applications.',
    icon: '✨', // Placeholder icon
  },
  {
    name: 'PDF Tools',
    description: 'Utilities for managing your PDF documents.',
    icon: '📄', // Placeholder icon
  },
  {
    name: 'Resume Tools',
    description: 'Craft a professional resume with these tools.',
    icon: '📝', // Placeholder icon
  },
  {
    name: 'SEO Tools',
    description: 'Improve your website\'s search engine ranking.',
    icon: '🔍', // Placeholder icon
  },
  {
    name: 'Marketing Tools',
    description: 'Tools to help with your marketing efforts',
    icon: '📈', // Placeholder icon
  },
  {
    name: 'Design Tools',
    description: 'Tools to help with your marketing efforts',
    icon: '🎨', // Placeholder icon
  },
];

export const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
        >
          <div className="text-3xl mb-4">{category.icon}</div>
          <h3 className="text-xl font-semibold text-foreground mb-2">{category.name}</h3>
          <p className="text-muted-foreground">{category.description}</p>
        </div>
      ))}
    </div>
  );
};
