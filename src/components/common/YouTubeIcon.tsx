import React from "react";

interface YouTubeIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  variant?: "red" | "white" | "monochrome";
}

/**
 * Authentic YouTube Icon component ensuring the play triangle is always clearly visible.
 * - variant="red": Official YouTube red rounded rectangle (#FF0000) with a crisp white play triangle.
 * - variant="white": White rounded rectangle (#FFFFFF) with a vivid red play triangle (#FF0000) - optimal inside red buttons.
 * - variant="monochrome": Solid currentColor rounded rectangle with an evenodd cutout play triangle.
 */
export const YouTubeIcon: React.FC<YouTubeIconProps> = ({
  className = "w-5 h-5",
  variant = "red",
  ...props
}) => {
  if (variant === "white") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`shrink-0 ${className}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
          fill="#FFFFFF"
        />
        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FF0000" />
      </svg>
    );
  }

  if (variant === "monochrome") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={`shrink-0 ${className}`}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        />
      </svg>
    );
  }

  // Default variant="red": Classic official YouTube Red with white triangle
  return (
    <svg
      viewBox="0 0 24 24"
      className={`shrink-0 ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
        fill="#FF0000"
      />
      <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
    </svg>
  );
};

export default YouTubeIcon;
