import React from 'react'

import { useSnapshot } from 'valtio'
import store from '../store'
import WeatherResult from './WeatherResult'

export default () => {
  const snap = useSnapshot.store
  return (
    <div className="cities">
      Cities
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridColumnGap: '1rem',
        }}
      >
        {store.cities.map(city => (
          <WeatherResult
            name={city.name}
            key={city.name}
            weather={city.weather}
          />
        ))}
      </div>
      <div>
        Average:
        {/* {snap.getAverageTemperature()} */}
      </div>
    </div>
  )
}
