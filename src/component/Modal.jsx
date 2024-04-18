import { useState } from 'react';
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Modal({ closeModal, updateTableData }) {
  const [courseName, setCourseName] = useState('');
  const [description, setDescription] = useState('');
  const [instructor, setInstructor] = useState('');
  const [instrument, setInstrument] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [price, setPrice] = useState('');

  const handleAddCourse = () => {
    // Add $ sign to the price
    const formattedPrice = `$${price}`;

    const courseData = {
      courseName,
      description,
      instructor,
      instrument,
      dayOfWeek,
      price: formattedPrice, // Save formatted price
    };

    // Save course data to local storage
    localStorage.setItem('courseData', JSON.stringify(courseData));
    
    // Update table data
    updateTableData(courseData);

    // Close the modal
    closeModal();
  };

  return (
    <Card className="w-full max-w-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-md">
      <CardHeader>
        <CardTitle>Add Course</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="course-name"></Label>
              <Input 
                id="course-name" 
                placeholder="Course Name" 
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="description"></Label>
              <Input 
                id="description" 
                placeholder="Description" 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="instructor"></Label>
              <Input 
                id="instructor" 
                placeholder="Instructor" 
                value={instructor}
                onChange={(e) => setInstructor(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="instrument"></Label>
              <select
                id="instrument"
                value={instrument}
                placeholder="Instrument"
                onChange={(e) => setInstrument(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                
              >
                <option  value="">Instrument</option>
                <option value="guitar">Guitar</option>
                <option value="piano">Piano</option>
                <option value="violin">Violin</option>
                <option value="drums">Drums</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="day-of-the-week"></Label>
              <select
                id="day-of-the-week"
                value={dayOfWeek}
                onChange={(e) => setDayOfWeek(e.target.value)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Day of the Week</option>
                <option value="monday">Monday</option>
                <option value="tuesday">Tuesday</option>
                <option value="wednesday">Wednesday</option>
                <option value="thursday">Thursday</option>
                <option value="friday">Friday</option>
                <option value="saturday">Saturday</option>
                <option value="sunday">Sunday</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="price"></Label>
              <Input 
                id="price" 
                placeholder="Price" 
                type="number" 
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={closeModal}>Cancel</Button>
        <Button className="bg-[#ff6b6b] text-white" onClick={handleAddCourse}>Add Course</Button>
      </CardFooter>
    </Card>
  );
}
