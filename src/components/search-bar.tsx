
import React from 'react';
import {Input} from "@/components/ui/input";

export const SearchBar = () => {
  return (
    <div className="relative">
      <Input
        type="search"
        placeholder="Search for tools..."
        className="w-full rounded-full py-3 px-6 shadow-md focus:ring-primary focus:border-primary"
      />
      <span className="absolute inset-y-0 right-4 flex items-center">
        {/* Search Icon - Replace with Lucide or FontAwesome icon */}
        🔍
      </span>
    </div>
  );
};
