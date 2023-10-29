"use client";

import clsx from "clsx";
import React from "react";

export interface PriorityButtonProps {
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  colour: "brand-yellow" | "ftnal-white" | "brand-blue" | "accent-red" | "brand-yellow-black" 
}

const Button: React.FC<PriorityButtonProps> = ({
    fullWidth,
    children,
    onClick,
    disabled,
    colour,
  }) => {
      // Define classes based on the 'colour' prop using clsx
    const colorStyle = clsx({
        'bg-brand-yellow text-black': colour === 'brand-yellow-black',
        'bg-brand-yellow text-white': colour === 'brand-yellow',
        'bg-ftnal-white text-black': colour === 'ftnal-white',
        'bg-brand-blue text-white': colour === 'brand-blue',
        'bg-accent-red text-white': colour === 'accent-red',
    });

    return (
      <div className="w-full h-full">
        <button
          onClick={onClick}
          disabled={disabled}
          className={clsx(
            `
                      flex
                      justify-center
                      rounded-xl
                      w-full
                      h-full
                      text-body-l
                      shadow-xl
                      font-semibold
                      hover:opacity-80
                      transition-opacity
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2
                  `,
            disabled && "bg-ftnal-lightgrey text-ftnalgrey cursor-default",
            fullWidth && "w-full",
            colorStyle
          )}
        >
          {children}
        </button>
      </div>
    );
  };
  
  export default Button;