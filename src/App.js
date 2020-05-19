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
        width={640}
        height={320}
        setMovies={setMovies}
      />
    </div>
  )
}

export default App
