import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Sidenav from './sidenav';// Assuming Sidenev is the component you want to render after login
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login validation here
    // For simplicity, just checking if both fields are filled
    if (username && password) {
      // Save credentials to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      // Update login state
      setLoggedIn(true);
      // Show success message
      Swal.fire({
        icon: 'success',
        title: 'Logged in successfully!',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      // Show error message if fields are empty
      Swal.fire({
        icon: 'error',
        title: 'Please fill in both fields',
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  // Render Sidenev component if logged in
  if (loggedIn) {
    return <Sidenav />;
  }

  // Render login form if not logged in
  return (
  
    <div className=" background min-h-screen bg-gray-100 flex justify-center items-center">
      <form onSubmit={handleSubmit} className=" tesprant  p-8 rounded shadow-md w-96">
        <h2 className="text-2xl mb-6 font-bold">Login</h2>
        <div className="mb-4">
          <Label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</Label>
          <Input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500" />
        </div>
        <div className="mb-6">
          <Label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</Label>
          <Input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border rounded px-3 py-2 outline-none focus:border-blue-500" />
        </div>
        <Button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Login</Button>
      </form>
    </div>
    
  );
};

export default Login;
