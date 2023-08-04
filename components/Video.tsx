import React from 'react';

interface VideoProps {
  links: string[];
}

const Video: React.FC<VideoProps> = ({ links }) => {
  return (
    <div className='flex flex-col items-center justify-center text-center'>
      <h3>Video Links:</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Video {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Video;
