// pages/course/[id].tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import courseData from '../../public/data.json';
import Video from '../../components/Video';
import Cookies from 'js-cookie';
const CourseDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const isLoggedIn = Cookies.get('loggedin') === 'true';

    // Find the course with the matching ID from the courseData
    const course = courseData.find((course) => course.id === Number(id));

    if (!course) {
      // Handle case where course with the given ID is not found
      router.push('/404'); // You can redirect to a 404 page or any other appropriate error page.
      return;
    }

    if (course.course_type === 'premium' && !isLoggedIn) {
      // Redirect to login page for premium courses if user is not logged in
      router.push('/login');
    } else {
      // If the course is free or the user is logged in for premium courses, redirect to the course page
      router.push(`/course/${id}`);
    }
  }, [router, id]);
 

  // Find the course with the matching ID from the courseData
  const course = courseData.find((course) => course.id === Number(id));

  if (!course) {
    // Handle case where course with the given ID is not found
    return <div>Course not found.</div>;
  }

  return (
    <div className='text-black mt-[70px] flex m-4 gap-4  flex-col md:flex-row'>
     <div className='flex flex-col '>
     <img className="w-full h-auto mb-4" src={course.image_link} alt={course.course_name} />
      <h2 className="text-2xl font-bold mb-4">{course.course_name}</h2>
      <p className="mb-4">Description: {course.description}</p>
     </div>
      <Video links={course.video_links} />
    </div>
  );
};

export default CourseDetailPage;
