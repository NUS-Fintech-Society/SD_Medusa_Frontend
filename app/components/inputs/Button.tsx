"use client";

import clsx from "clsx";
import React from "react";

export interface PriorityButtonProps {
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  colour: "brand-yellow" | "ftnal-white" | "brand-blue" | "accent-red"
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
        'bg-brand-yellow text-white': colour === 'brand-yellow',
        'bg-ftnal-white text-black': colour === 'ftnal-white',
        'bg-brand-blue text-white': colour === 'brand-blue',
        'bg-accent-red text-white': colour === 'accent-red',
    });

    return (
      <div>
        <button
          onClick={onClick}
          disabled={disabled}
          className={clsx(
            `
                      flex
                      justify-center
                      rounded-xl
                      px-6
                      py-2
                      text-body-l
                      shadow-xl
                      font-semibold
                      hover:opacity-80
                      transition-opacity
                      focus-visible:outline
                      focus-visible:outline-2
                      focus-visible:outline-offset-2

                      md:px-6
                      md:py-2
                      md:text-body-l
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