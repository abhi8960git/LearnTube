// components/CourseCard.tsx

import { useRouter } from 'next/router';
import Link from 'next/link';
import { Course } from '@/interfaces/main';
import Cookies from 'js-cookie';
import { useState } from 'react';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const[isAuthenticated, seIsAuthenticated] = useState(false);
  const router = useRouter();



  function trim(str: string): string {
    if (str.length > 15) {
      return str.substring(0, 15) + '...';
    } else {
      return str;
    }
  }

  const handleViewCourse = () => {
   
      // If the course is not premium, directly navigate to the course ID page
      router.push(`/course/${course.id}`);
    

    
  };

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden w-[250px] h-[300px] m-2">
      <Link href={`/course/${course.id}`}>
        <figure className="relative h-0 pb-[56.25%] overflow-hidden">
          <img
            className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out"
            src={course.image_link}
            width="320"
            height="180"
            alt="Course"
          />
        </figure>
      </Link>
      <div className="flex-grow flex flex-col p-5">
        <div className="flex-grow">
          <header className="mb-3">
            <Link href={`/course/${course.id}`}>
              <h3 className="text-gray-900 font-bold leading-snug">
                {course.course_name}
              </h3>
            </Link>
          </header>
          <div className="mb-3">
            <p>{trim(course.description)}</p>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleViewCourse}
            className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring hover:bg-indigo-100 text-indigo-500"
          >
            View
          </button>
          <button
            className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring hover:bg-indigo-600 text-white"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
