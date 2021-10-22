import { proxy, subscribe } from 'valtio'

import getWeather, { WeatherResult } from '../graphql/getWeather'

const store = proxy({
  city: '',
  cities: [],
  getAverageTemperature: () =>
    store.cities.reduce((a, v) => a + v.weather.temperature.actual, 0) /
    store.cities.length,
})

export const addCity = async () => {
  const weather = await getWeather(store.city)
  if (weather) {
    store.cities.push({
      name: store.city,
      weather,
    })
  }
}

subscribe(store, () => {
  console.log('store changed')
})

export default store
