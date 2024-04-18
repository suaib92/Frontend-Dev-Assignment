import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Modal from './Modal'
import CourseMenu from './CourseMenu'
import CourseMenu2 from './CourseMenu2'



export default function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [tableData, setTableData] = useState([]); // State to manage table data
  const [menuVisible1, setMenuVisible1] = useState(false); // State to manage first menu visibility
  const [menuVisible2, setMenuVisible2] = useState(false); // State to manage second menu visibility

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to update table data
  const updateTableData = (courseData) => {
    setTableData([...tableData, courseData]);
    console.log(courseData);
  };

  useEffect(() => {
    // Retrieve course data from local storage
    const storedCourseData = JSON.parse(localStorage.getItem('courseData'));
    if (storedCourseData) {
      setTableData([storedCourseData]);
    }
  }, []);

  // Toggle function for first menu
  const toggleMenu1 = () => {
    setMenuVisible1(!menuVisible1);
  };

  // Toggle function for second menu
  const toggleMenu2 = () => {
    setMenuVisible2(!menuVisible2);
  };

  return (
    
    <div className=" bg-gray-100  p-8">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
        <h1 className="text-xl font-semibold">COURSE LIST</h1>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="flex items-center">
            <MicroscopeIcon className="mr-2 w-4 h-4 text-gray-500" />
            <Input className="border rounded-md py-2 px-4" placeholder="Search" type="search" />
          </div>
          <Button
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md shadow-md transition-colors"
            size="sm"
            variant="primary"
            onClick={openModal} // Open the modal when this button is clicked
          >
            Add Course
          </Button>
        </div>
      </div>
      <div className="overflow-hidden shadow ring-1 bg-white ring-black ring-opacity-5 md:rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Instructor</TableHead>
            <TableHead>Instrument</TableHead>
            <TableHead>Day of Week</TableHead>
            <TableHead># of Students</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Classical Guitar</TableCell>
            <TableCell>Guitar classes for beginners.</TableCell>
            <TableCell>Ms. Jane Doe</TableCell>
            <TableCell>Guitar</TableCell>
            <TableCell>Wednesday</TableCell>
            <TableCell>26</TableCell>
            <TableCell>$60</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
              <CircleEllipsisIcon className="w-4 h-4 text-gray-500 cursor-pointer" onClick={toggleMenu1} />
              {menuVisible1 && (
            <div className="absolute top-0 right-0 mt-24 mr-4 bg-white shadow-lg p-2 rounded">
              <CourseMenu />
            </div>
          )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>
              <Badge variant="secondary">Active</Badge>
            </TableCell>
            <TableCell>
            <CircleEllipsisIcon className="w-4 h-4 text-gray-500"  />
              
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>
              <Badge variant="default">Closed</Badge>
            </TableCell>
            <TableCell>
            <CircleEllipsisIcon className="w-4 h-4 text-gray-500" />
           
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>
              <Badge variant="default">Archived</Badge>
            </TableCell>
            <TableCell>
            <CircleEllipsisIcon className="w-4 h-4 text-gray-500  cursor-pointer" onClick={toggleMenu2}  />
            {menuVisible2 && (
        <div className="absolute top-0 right-0  mt-64 mr-4 bg-white shadow-lg p-2 rounded">
          <CourseMenu2 />
        </div>
      )}
          
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>column</TableCell>
            <TableCell>
              <Badge variant="default">Archived</Badge>
            </TableCell>
            <TableCell>
            <CircleEllipsisIcon className="w-4 h-4 text-gray-500"  />
            
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
      {isModalOpen && <Modal closeModal={closeModal} updateTableData={updateTableData} />}
    </div>
  )
}

function CircleEllipsisIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M17 12h.01" />
      <path d="M12 12h.01" />
      <path d="M7 12h.01" />
    </svg>
  )
}


function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}




// import { useState, useEffect } from 'react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
// import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import Modal from './Modal'
// import CourseMenu from './CourseMenu'
// import CourseMenu2 from './CourseMenu2'

// export default function Courses() {
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
//   const [tableData, setTableData] = useState([]); // State to manage table data
//   const [menuVisible1, setMenuVisible1] = useState(false); // State to manage first menu visibility
//   const [menuVisible2, setMenuVisible2] = useState(false); // State to manage second menu visibility

//   // Function to open the modal
//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   // Function to close the modal
//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   // Function to update table data
//   const updateTableData = (courseData) => {
//     setTableData([...tableData, courseData]);
//     console.log(courseData);
//   };

//   useEffect(() => {
//     // Retrieve course data from local storage
//     const storedCourseData = JSON.parse(localStorage.getItem('courseData'));
//     if (storedCourseData) {
//       setTableData([storedCourseData]);
//     }
//   }, []);

//   // Toggle function for first menu
//   const toggleMenu1 = () => {
//     setMenuVisible1(!menuVisible1);
//   };

//   // Toggle function for second menu
//   const toggleMenu2 = () => {
//     setMenuVisible2(!menuVisible2);
//   };

//   return (
//     <div className="bg-gray-100 p-8">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
//         <h1 className="text-xl font-semibold">COURSE LIST</h1>
//         <div className="flex items-center space-x-4 mt-4 md:mt-0">
//           <div className="flex items-center">
//             <MicroscopeIcon className="mr-2 w-4 h-4 text-gray-500" />
//             <Input className="border rounded-md py-2 px-4" placeholder="Search" type="search" />
//           </div>
//           <Button
//             className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-md shadow-md transition-colors"
//             size="sm"
//             variant="primary"
//             onClick={openModal} // Open the modal when this button is clicked
//           >
//             Add Course
//           </Button>
//         </div>
//       </div>
//       <div className="overflow-hidden shadow ring-1 bg-white ring-black ring-opacity-5 md:rounded-lg">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>Name</TableHead>
//               <TableHead>Description</TableHead>
//               <TableHead>Instructor</TableHead>
//               <TableHead>Instrument</TableHead>
//               <TableHead>Day of Week</TableHead>
//               <TableHead># of Students</TableHead>
//               <TableHead>Price</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Actions</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {tableData.map((course, index) => (
//               <TableRow key={index}>
//                 <TableCell>{course.courseName}</TableCell>
//                 <TableCell>{course.description}</TableCell>
//                 <TableCell>{course.instructor}</TableCell>
//                 <TableCell>{course.instrument}</TableCell>
//                 <TableCell>{course.dayOfWeek}</TableCell>
//                 {/* Add other table cells for the remaining data */}
//                 <TableCell>{/* Render # of Students data here */}</TableCell>
//                 <TableCell>{/* Render Price data here */}</TableCell>
//                 <TableCell>
//                   <Badge variant="secondary">Active</Badge>
//                 </TableCell>
//                 <TableCell>
//                   {/* Render actions here */}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//       {isModalOpen && <Modal closeModal={closeModal} updateTableData={updateTableData} />}
//     </div>
//   )
// }


// function CircleEllipsisIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <path d="M17 12h.01" />
//       <path d="M12 12h.01" />
//       <path d="M7 12h.01" />
//     </svg>
//   )
// }


// function MicroscopeIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M6 18h8" />
//       <path d="M3 22h18" />
//       <path d="M14 22a7 7 0 1 0 0-14h-1" />
//       <path d="M9 14h2" />
//       <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
//       <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
//     </svg>
//   )
// }
