const apiKey = '4967e1e6106f4a48af1b2a461426b977';

async function getCoordinates(city) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}&language=uk`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Не вдалося отримати координати міста.');
        }
        const data = await response.json();
        if (data.results.length > 0) {
            return {
                latatata: data.results[0].geometry.lat,
                longggg: data.results[0].geometry.lng 
            };
        } else {
            throw new Error('Місто не знайдено');
        }
    } catch (error) {
        throw new Error('Помилка при з’єднанні з API для геокодування.');
    }
}

async function getWeather(latatata, longggg) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latatata}&longitude=${longggg}&current_weather=true&timezone=auto`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Не вдалося отримати погодні дані.');
        }
        const data = await response.json();
        return data.current_weather;
    } catch (error) {
        throw new Error('Помилка при з’єднанні з API для погоди.');
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    const temperature = data.temperature;
    const windspeed = data.windspeed;
    const weatherCode = data.weathercode;

    let weatherDescription = '';
    if (weatherCode === 0) weatherDescription = 'Ясно';
    if (weatherCode === 1) weatherDescription = 'Малохмарно';
    if (weatherCode === 2) weatherDescription = 'Хмарно';
    if (weatherCode === 3) weatherDescription = 'Дощ';
    if (weatherCode === 4) weatherDescription = 'Сніг';

    weatherDiv.innerHTML = `
        <p>Температура: ${temperature}°C</p>
        <p>Швидкість вітру: ${windspeed} м/с</p>
        <p>Опис погоди: ${weatherDescription}</p>
    `;
}

async function getWeatherData(city) {
    const errorDiv = document.getElementById('error');
    errorDiv.textContent = '';
    
    if (!city) {
        errorDiv.textContent = 'Будь ласка, введіть назву міста!';
        return;
    }

    try {
        const coordinates = await getCoordinates(city);
        const weather = await getWeather(coordinates.latatata, coordinates.longggg);
        displayWeather(weather);
    } catch (error) {
        errorDiv.textContent = error.message || 'Помилка при завантаженні погоди.';
    }
}

document.getElementById('get-weather').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    getWeatherData(city);
});

document.getElementById('city').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const city = document.getElementById('city').value.trim();
        getWeatherData(city);
    }
});

