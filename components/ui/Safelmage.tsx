'use client'; // This component must be a Client Component

import Image, { ImageProps } from 'next/image';

// Helper function to create a placeholder
const placeholder = (text: string) => {
  const encodedText = encodeURIComponent(text);
  return `https://placehold.co/400x300/333333/777777?text=${encodedText}`;
};

// We pass all the normal Image props, but add a fallbackText prop
interface SafeImageProps extends ImageProps {
  fallbackText: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ fallbackText, ...props }) => {
  return (
    <Image
      {...props}
      // This onError event handler is now safe because this is a Client Component
      onError={(e) => (e.currentTarget.src = placeholder(fallbackText))}
    />
  );
};