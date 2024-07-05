'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' instead of 'next/router'
import Image from 'next/image';
import { FaArrowUp } from 'react-icons/fa';

export default function Home() {
  const [showContent, setShowContent] = useState(true);
  const router = useRouter();
  const handleArrowClick = () => {
    setShowContent(false);
  };

  useEffect(() => {
    if (!showContent) {
      setTimeout(() => {
        router.push('/about');
      }, 800);
    }
  }, [showContent, router]);

  return (
    <div className={`transition-all duration-[2000ms] ease-out transform ${showContent ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Image src="/rn.png" alt="RentNest Logo" width={500} height={500} />
        <h1 className="text-4xl font-bold text-500">Welcome to RentNest</h1>
        <p className="mt-3 text-lg text-gray-700">
          Hassle-Free Sublet Solution for Students
        </p>
        <FaArrowUp
          className="mt-5 text-500 hover:cursor-pointer"
          size={30}
          onClick={handleArrowClick}
        />
      </div>
    </div>
  );
}
