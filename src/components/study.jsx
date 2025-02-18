import React from "react";
import '../app.css'
export default function GitHubComponent() {
    return (
      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg border border-gray-200">
        {/* Copilot Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Ask Copilot</h2>
          <div className="space-y-5">
            {[
              { title: 'Open issues in facebook/react', days: '2 days ago' },
              { title: 'Code completion in GitHub Copilot for Xcode is now generally available', days: '2 days ago' },
              { title: 'Personal custom instructions, Bing web search, and more in Copilot on...', days: '3 days ago' },
              { title: 'Copilot Workspace: Follow ups and file search improvements', days: '3 days ago' },
              { title: 'Secret scanning detects Base64-encoded GitHub tokens', days: '3 days ago' },
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
                    {item.title}
                  </h3>
                </div>
                <span className="text-sm text-gray-500">{item.days}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">View changelog →</a>
          </div>
        </div>
  
        {/* Home Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Home</h2>
            <a href="#" className="text-sm text-blue-600 hover:underline">See more</a>
          </div>
  
          {/* Trending Repositories */}
          <div className="space-y-6">
            {/* Microsoft/OmniParser */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-900">Microsoft/OmniParser</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  ★ 9k
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                A simple screen parsing tool towards pure vision based GUI agent
              </p>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="text-xs text-gray-500">Jupyter Notebook</span>
              </div>
            </div>
  
            {/* ZJU-LLMs/Foundations-of-LLMs */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium text-gray-900">ZJU-LLMs/Foundations-of-LLMs</span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  ★ 5.9k
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }