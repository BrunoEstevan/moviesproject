"use client"
import { useState } from 'react';
import MovieList from "@/components/MovieList";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/NavBar";






export default function Home() {
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);


  const handleGenreSelect = (genreId: number) => {
  
    setSelectedGenre(genreId);
};

  return (
    
    <>
   

     <main>
     
     <MovieList selectedGenre={selectedGenre} />
     <Sidebar onGenreSelect={handleGenreSelect} />

   
     </main>
    
    </>
       
  );
}