'use client';

import React, {useState} from 'react';
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";

const tools = [
    {
      name: 'Grammarly',
      description: 'An AI-powered writing assistant that helps you improve your grammar, spelling, and style.',
      tags: ['ai', 'writing', 'free'],
      category: 'ai'
    },
    {
      name: 'Adobe Acrobat PDF Editor',
      description: 'A comprehensive PDF editor to create, convert, edit, and sign PDF documents.',
      tags: ['pdf', 'paid', 'editing'],
      category: 'pdf'
    },
    {
      name: 'Canva',
      description: 'A graphic design platform that allows users to create social media graphics, presentations, posters, and other visual content.',
      tags: ['design', 'free', 'marketing'],
      category: 'design'
    },
    {
      name: 'SEMrush',
      description: 'An online visibility management and content marketing platform.',
      tags: ['seo', 'paid', 'marketing'],
      category: 'seo'
    },
    {
      name: 'Kickresume',
      description: 'A resume builder platform with pre-designed templates and AI writing assistance.',
      tags: ['resume', 'free', 'ai'],
      category: 'resume'
    },
    {
      name: 'Adobe Premiere Pro',
      description: 'A timeline-based video editing software application.',
      tags: ['video', 'paid', 'editing'],
      category: 'video'
    },
  ];

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const router = useRouter();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredTools = tools.filter(tool =>
        tool.name.toLowerCase().includes(value.toLowerCase()) ||
        tool.tags.some(tag => tag.toLowerCase().includes(value.toLowerCase()))
      );

      const suggestedNames = filteredTools.map(tool => tool.name);
      setSuggestions(suggestedNames);
    } else {
      setSuggestions([]);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchTerm) {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-3/4 lg:w-1/2 mx-auto">
      <Input
        type="search"
        placeholder="Search tools, categories..."
        className="w-full rounded-full py-2 px-4 shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:text-sm hover:shadow-md transition-shadow duration-200"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="absolute inset-y-0 right-3 flex items-center">
        <button type="submit" className="p-2 rounded-full hover:bg-accent transition-colors">
          <Search className="h-4 w-4 text-muted-foreground"/>
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute left-0 mt-2 w-full bg-popover border border-border rounded-md shadow-md z-10">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-popover-foreground hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
              onClick={() => {
                setSearchTerm(suggestion);
                setSuggestions([]);
                router.push(`/search?query=${suggestion}`);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
};

