import Image from 'next/image';
import { Inter } from 'next/font/google';
import courses from '../public/data.json';
import Link from 'next/link';
import CourseCard from '@/components/CourseCard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
 

  return (
    <main className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}>
      <div className='flex flex-col justify-center items-center w-full'>
       
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}
