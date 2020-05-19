import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const MovieRatings = ({ movies, width, height, setMovies }) => {
  const ratings = movies.slice(1).map((movie) => movie[1])
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current)

    const xScale = d3
      .scaleBand()
      .domain(d3.range(0, ratings.length))
      .range([0, width])

    const yScale = d3.scaleLinear().domain([0, 10]).range([height, 0])

    const xAxis = d3.axisBottom(xScale).ticks(ratings.length)
    svg.select('.x-axis').style('transform', 'translateY(320px)').call(xAxis)

    const yAxis = d3.axisLeft(yScale)
    svg.select('.y-axis').style('transform', 'translateX(640px)').call(yAxis)

    svg
      .selectAll('rect')
      .data(ratings)
      .transition()
      .duration(1000)
      .attr('x', (r, index) => xScale(index))
      .attr('y', (r) => yScale(r))
      .attr('width', xScale.bandwidth())
      .attr('height', (r) => height - yScale(r))
      .style('fill', 'blue')
      .style('stroke', 'red')
      .style('opacity', 0.3)
  }, [ratings, width, height])

  const bars = ratings.map((r, index) => <rect key={index} />)

  return (
    <>
      <button
        onClick={() =>
          setMovies([
            ['test', 4],
            ['test', 3],
            ['test', 9.5],
            ['test', 8],
            ['test', 7],
            ['test', 2],
            ['test', 7],
          ])
        }
      >
        update
      </button>
      <svg ref={svgRef} width={width} height={height}>
        {bars}
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </>
  )
}

export default MovieRatings
