import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'

const MovieRatings = ({ movies }) => {
  const ratings = movies.slice(1).map((movie) => movie[1])
  const svgRef = useRef()

  useEffect(() => {
    const svg = select(svgRef.current)

    const xScale = d3
      .scaleLinear()
      .domain([0, ratings.length - 1])
      .range([0, 1920])

    const yScale = d3.scaleLinear().domain([8, 10]).range([1080, 0])

    const xAxis = d3.axisBottom(xScale).ticks(ratings.length)
    svg.select('.x-axis').style('transform', 'translateY(1000px)').call(xAxis)

    const yAxis = d3.axisLeft(yScale)
    svg.select('.y-axis').style('transform', 'translateX(1290px)').call(yAxis)

    const myLine = d3
      .line()
      .x((value, index) => xScale(index))
      .y(yScale)
    // .curve(curveCardinal)

    svg
      .selectAll('.line')
      .data([ratings])
      .join('path')
      .attr('class', 'line')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'blue')
  }, [ratings])

  return (
    <svg ref={svgRef} width={1920} height={1080}>
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  )
}

export default MovieRatings
