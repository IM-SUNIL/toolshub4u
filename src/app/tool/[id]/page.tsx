


import React from 'react';
import {Navbar} from "@/components/navbar";
import {Footer} from "@/components/footer";
import {Button} from "@/components/ui/button";

const tool = {
  name: 'Awesome Tool',
  description: 'This is a comprehensive description of the tool. It includes key features, benefits, and how to use it effectively.',
  features: [
    'Feature 1: Benefit of feature 1',
    'Feature 2: Benefit of feature 2',
    'Feature 3: Benefit of feature 3',
  ],
  pricing: 'Paid',
  rating: 4.8,
  usageSteps: [
    'Step 1: Do this',
    'Step 2: Do that',
    'Step 3: Finish',
  ],
};

const comments = [
  {
    name: 'John Doe',
    comment: 'Great tool! Really improved my workflow.',
  },
  {
    name: 'Jane Smith',
    comment: 'Easy to use and very effective.',
  },
  {
    name: 'Peter Jones',
    comment: 'Highly recommend this tool to anyone looking for a solution.',
  },
];

export default function ToolDetailPage({params}: { params: { id: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-3xl font-semibold mb-4">{tool.name}</h1>

          <div className="flex items-center mb-4">
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                tool.pricing === 'Free' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {tool.pricing}
            </span>
            <div className="flex items-center ml-4">
              <span className="text-sm mr-1">{tool.rating}</span>
              ⭐
            </div>
          </div>

          <p className="text-gray-300 mb-6">{tool.description}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc list-inside text-gray-300">
              {tool.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>

          <Button>Visit Tool</Button>

          <section className="mb-8 mt-8">
            <h2 className="text-2xl font-semibold mb-3">How to Use</h2>
            <ol className="list-decimal list-inside text-gray-300">
              {tool.usageSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Comments</h2>
            {comments.map((comment, index) => (
              <div key={index} className="mb-4 p-4 bg-secondary rounded-md text-black">
                <h4 className="font-semibold">{comment.name}</h4>
                <p className="text-gray-300">{comment.comment}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">You May Also Like</h2>
            {/* TODO: Implement AI-powered suggestions */}
            <p className="text-gray-300">AI-powered related tool suggestions coming soon...</p>
          </section>
        </div>
      </main>
      <Footer/>
    </div>
  );
}

