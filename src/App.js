import React, { useState } from 'react'
import './css/index.css'
import MovieRatings from './components/MovieRatings'
import CSVreader from 'react-csv-reader'

function App() {
  const [movies, setMovies] = useState([])

  return (
    <div className="test">
      <CSVreader onFileLoaded={(data) => setMovies(data)} />
      <MovieRatings
        movies={movies}
        width={1920}
        height={1080}
        setMovies={setMovies}
      />
    </div>
  )
}

export default App
