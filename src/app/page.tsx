"use client"
import Footer from "@/components/Footer";
import MovieList from "@/components/MovieList";
import Sidebar from "@/components/Sidebar";
import { useSearch } from "@/contexts/SearchContext";

export default function Home() {
  const { searchQuery, selectedGenre } = useSearch();

  return (
    <main style={{ position: 'relative', minHeight: '100vh'  }}>
      <MovieList 
        selectedGenre={selectedGenre} 
        searchQuery={searchQuery}
      />
      <Sidebar />
       <Footer />
    </main>
  );
}