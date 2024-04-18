import React, { useState } from 'react';

const CourseMenu2 = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu2 = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
     
   
     <ul className='grid grid-cols-1 gap-2 p-2 bg-gray-100 rounded-md shadow-md'>
  <li className='px-2 py-1 bg-white hover:bg-gray-200 rounded-md cursor-pointer'>Unarchive Course</li>
 
</ul>

     
    </div>
  );
};

export default CourseMenu2;
