class Weather {
    constructor(city, state) {
        this.api_key = "99dfe35fcb7de1ee";
        this.city = city;
        this.state = state;
    }

    async getWeather(weather) {
        const response = await fetch (`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();

        return responseData.current_observation
    }

    // Change the weather Location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}