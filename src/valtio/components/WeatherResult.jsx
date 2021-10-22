import React from 'react'

import { WeatherResult } from '../../graphql/getWeather'

export default ({ name, weather }) => (
  <>
    <div>{name}</div>
    <div>{weather.wind.speed} MPH</div>
    <div>{weather.temperature.actual} F</div>
    <div>{weather.temperature.feelsLike} F</div>
    <div>{weather.summary.description}</div>
  </>
)
