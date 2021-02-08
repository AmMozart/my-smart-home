import React, { useState, useEffect } from 'react'
import Weather from '../components/OneDayWeather/Weather'
import style from './WeatherPage.module.css'
import WeatherStation from '../weatherAPI/WeatherStation'

let weatherStation = new WeatherStation()
function WeatherPage() {
  const [weatherData, setWeatherData] = useState([{}, {}, {}])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    weatherStation.getWeatherData()
      .then((dataArr) => {
        if (dataArr) {
          setWeatherData(dataArr)
          setLoading(false)
        }
        else {
          console.log("Не удалось получить данные о погоде!")
        }
      })
  }, [])

  if (loading) {
    return (
      <div className={style.weather}>
        <h2>Loading</h2>
      </div>
    )
  } else {
    return (
      <div className={style.weather}>
        <Weather weatherData={weatherData} />
      </div>
    )
  }
}

export default WeatherPage
