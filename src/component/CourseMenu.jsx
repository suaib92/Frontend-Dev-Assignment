import React, { useState } from 'react';

const CourseMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
     
   
     <ul className='grid grid-cols-1 gap-2 p-2 bg-gray-100 rounded-md shadow-md'>
  <li className='px-2 py-1 bg-white hover:bg-gray-200 rounded-md cursor-pointer'>Edit Course</li>
  <li className='px-2 py-1 bg-white hover:bg-gray-200 rounded-md cursor-pointer'>Close Course</li>
  <li className='px-2 py-1 bg-white hover:bg-gray-200 rounded-md cursor-pointer'>Archive Course</li>
</ul>

     
    </div>
  );
};

export default CourseMenu;
