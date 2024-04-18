
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Home() {
  
  return (
    <div className="flex   bg-gray-100">
     
      <main className="flex-1 w-full">
        <h1 className="text-4xl font-semibold text-gray-700 p-6">Overview</h1>
        <div className=" grid grid-flow-col gap-6 p-6">
          <Card className="bg-white shadow-lg p-4 flex flex-col items-center justify-center">
            <GroupIcon className="text-green-500 h-8 w-8 mb-2" />
            <div className="text-3xl font-semibold">164</div>
            <div className="text-sm text-gray-500">total number of students</div>
            <Button className="mt-2" variant="ghost">
              View
            </Button>
          </Card>
          <Card className="bg-white shadow-lg p-4 flex flex-col items-center justify-center">
            <LaptopIcon className="text-green-500 h-8 w-8 mb-2" />
            <div className="text-3xl font-semibold">12</div>
            <div className="text-sm text-gray-500">total number of courses</div>
            <Button className="mt-2" variant="ghost">
              View
            </Button>
          </Card>
          <Card className="bg-white shadow-lg p-4 flex flex-col items-center justify-center">
            <CurrencyIcon className="text-green-500 h-8 w-8 mb-2" />
            <div className="text-3xl font-semibold">$2000</div>
            <div className="text-sm text-gray-500">total amount earned</div>
            <Button className="mt-2" variant="ghost">
              View
            </Button>
          </Card>
          <Card className="bg-white shadow-lg p-4 flex flex-col items-center justify-center">
            <MusicIcon className="text-green-500 h-8 w-8 mb-2" />
            <div className="text-3xl font-semibold">Guitar</div>
            <div className="text-sm text-gray-500">best performing course</div>
            <Button className="mt-2" variant="ghost">
              View
            </Button>
          </Card>
          <Card className="bg-white shadow-lg p-4 flex flex-col items-center justify-center col-start-4">
            <FlowerIcon className="text-green-500 h-8 w-8 mb-2" />
            <div className="text-3xl font-semibold">Flute</div>
            <div className="text-sm text-gray-500">worst performing course</div>
            <Button className="mt-2" variant="ghost">
              View
            </Button>
          </Card>
        </div>
        <section className="p-6 w-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">LATEST ENROLMENTS</h2>
            <Button className="text-sm" variant="outline">View All Courses</Button>
          </div>
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Enr. No</TableHead>
                <TableHead>S. Name</TableHead>
                <TableHead>C. Name</TableHead>
                <TableHead>Fees</TableHead>
                <TableHead>Enr. Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>1563124</TableCell>
                <TableCell>John Doe</TableCell>
                <TableCell>Percussion</TableCell>
                <TableCell>$120</TableCell>
                <TableCell>12-08-223</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
                <TableCell>column</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          </div>
        </section>
        
        <section className="p-6 w-full">
    
      <div className="flex justify-between items-center pb-4">
        <h2 className="text-xl font-semibold text-gray-800">BEST STUDENTS</h2>
        <Button className="text-sm" variant="outline">
          View All Students
        </Button>
      </div>
      <div className="overflow-hidden shadow ring-1 bg-white ring-black ring-opacity-5 md:rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reg. No</TableHead>
              <TableHead>F. Name</TableHead>
              <TableHead>L. Name</TableHead>
              <TableHead>Course #</TableHead>
              <TableHead>Total Fees</TableHead>
              <TableHead>Reg. Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>43422</TableCell>
              <TableCell>John</TableCell>
              <TableCell>Doe</TableCell>
              <TableCell>3</TableCell>
              <TableCell>$300</TableCell>
              <TableCell>01-6-2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
              <TableCell>column</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    
        </section>
      </main>
    </div>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CurrencyIcon(props) {
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
      <circle cx="12" cy="12" r="8" />
      <line x1="3" x2="6" y1="3" y2="6" />
      <line x1="21" x2="18" y1="3" y2="6" />
      <line x1="3" x2="6" y1="21" y2="18" />
      <line x1="21" x2="18" y1="21" y2="18" />
    </svg>
  )
}


function FlowerIcon(props) {
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
      <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15" />
      <circle cx="12" cy="12" r="3" />
      <path d="m8 16 1.5-1.5" />
      <path d="M14.5 9.5 16 8" />
      <path d="m8 8 1.5 1.5" />
      <path d="M14.5 14.5 16 16" />
    </svg>
  )
}


function GroupIcon(props) {
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
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}


function HexagonIcon(props) {
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
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    </svg>
  )
}


function LaptopIcon(props) {
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
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function LayoutGridIcon(props) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function MusicIcon(props) {
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
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}