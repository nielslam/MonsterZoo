export default class WeatherService {
    constructor() {
        this.api_key = 'OPENWEATHERMAP_API_KEY';
    }

    getWeather(city) {
        return new Promise((res) => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.api_key}&units=metric`)
                .then(response => res(response.json()));
        });
    }
}
