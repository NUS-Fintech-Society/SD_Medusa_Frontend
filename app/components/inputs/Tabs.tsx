"use client";

import React from "react";

interface ButtonTabsProps {
    data: { label: string; isFirst?: boolean; isLast?: boolean }[];
  }
  
  const ButtonTabs: React.FC<ButtonTabsProps> = ({ data }) => {
    return (
      <div className="inline-flex rounded-md shadow-sm" role="group">
        {data.map((button, index) => (
          <button
            key={index}
            type="button"
            className={`
            px-12
            py-4 text-body-l font-medium text-gray-900 bg-white focus:bg-brand-blue focus:text-ftnal-white transition-colors border 
              ${button.isFirst ? 'rounded-l-lg ' : button.isLast ? 'rounded-r-lg ' : 'border-t border-b'}
            `}
          >
            {button.label}
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonTabs;