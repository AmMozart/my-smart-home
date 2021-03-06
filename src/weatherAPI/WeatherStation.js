import WeatherData from './WeatherData'
import weatherConfig from './weatherConfig'

export default class WeatherStation {
  constructor(city = 'Moscow') {
    this.weatherConfig = {
      ...weatherConfig,
      city
    }
  }
  _getUrl() {
    return `http://api.openweathermap.org/data/2.5/forecast/daily?` +
      `q=${this.weatherConfig.city},${this.weatherConfig.country}&` +
      `mode=${this.weatherConfig.mode}&units=${this.weatherConfig.units}&` +
      `cnt=${this.weatherConfig.count}&APPID=${this.weatherConfig.APPID}`
  }

  async getWeatherData() {
    const resp = await fetch(this._getUrl(), {})
    if (resp.ok) {
      return await resp.json()
        .then((value) => value.list)
        .then((value) => {
          return value.map((data) =>
            new WeatherData(data))
        })
    }
  }
}