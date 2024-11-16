
const cities = [
  'Agartala', 'Agra', 'Ahmedabad', 'Ahmednagar', 'Aligarh', 'Ambala', 'Amravati', 'Amritsar', 'Anand', 'Asansol',
  'Aurangabad', 'Bangalore', 'Baran', 'Barbil', 'Bhopal', 'Bhubaneswar', 'Bikaner', 'Bilaspur', 'Bokaro', 'Chandigarh',
  'Chennai', 'Coimbatore', 'Cuttack', 'Dhanbad', 'Dibrugarh','Delhi', 'Faridabad', 'Gaya', 'Ghaziabad', 'Gorakhpur', 'Gurgaon',
  'Gwalior', 'Haridwar', 'Howrah', 'Hubli-Dharwad', 'Imphal', 'Indore', 'Jabalpur', 'Jaipur', 'Jammu', 'Jamshedpur',
  'Jhansi', 'Jodhpur', 'Kochi', 'Kolkata', 'Kota', 'Kozhikode', 'Lucknow', 'Ludhiana', 'Madurai', 'Meerut', 'Mysore',
  'Nagapattinam', 'Nagpur', 'Nanded', 'Navi Mumbai', 'Nellore', 'Noida', 'Patna', 'Pondicherry', 'Pune', 'Raipur',
  'Rajkot', 'Ranchi', 'Rourkela', 'Salem', 'Sangli', 'Siliguri', 'Surat', 'Thane', 'Trivandrum', 'Udaipur', 'Vadodara',
  'Varanasi', 'Vijayawada', 'Visakhapatnam', 'Vapi', 'Vellore', 'Warangal', 'Yamunanagar', 'Bhubaneshwar', 'Tirupati',
  'Kolkata', 'Hyderabad', 'Patiala', 'Bihar Sharif', 'Kurnool', 'Bilaspur', 'Chandrapur', 'Bardhaman', 'Sonipat',
  'Durgapur', 'Moradabad', 'Muzaffarpur', 'Alwar', 'Nandurbar', 'Rajahmundry', 'Navi Mumbai', 'Mathura', 'Basti', 
  'Chhindwara', 'Tirunelveli', 'Satara', 'Kollam', 'Jalna', 'Jamnagar', 'Shivpuri', 'Khammam', 'Jalgaon', 'Bokaro Steel City',
  'Hoshiarpur', 'Karnal', 'Sagar', 'Srinagar', 'Patiala', 'Vadodara', 'Kolhapur', 'Agra', 'Kochi', 'Navi Mumbai', 'Bikaner',
  'Jammu', 'Pune', 'Kochi', 'Tirupur', 'Mangalore', 'Faridabad', 'Visakhapatnam', 'Bhilai', 'Raigarh', 'Nanded',
  'Nanded', 'Baroda', 'Vishakapatnam', 'Mysuru', 'Chittoor', 'Aizawl', 'Gangtok', 'Imphal', 'Kolkata', 'Rishikesh',
  'Chhapra', 'Ajmer', 'Dewas', 'Jaunpur', 'Chittorgarh', 'Bidar', 'Ballabhpur', 'Shahjahanpur', 'Siliguri', 'Dindigul',
  'Bikaner', 'Pali', 'Tirupati', 'Aligarh', 'Banswara', 'Banaras', 'Haldia', 'Hazaribagh', 'Jabalpur', 'Jammu',
  'Jind', 'Jorhat', 'Khagaria', 'Moradabad', 'Muzzaffarpur', 'Bhubaneswar', 'Raebareli', 'Secunderabad', 'Latur',
  'Bharuch', 'Beed', 'Rohtak', 'Alwar', 'Panipat', 'Gurugram', 'Ranchi', 'Saharanpur', 'Moga', 'Sonipat', 'Mysore', 
  'Surat', 'Warangal', 'Khammam', 'Nellore', 'Nagapattinam', 'Udupi', 'Karimnagar', 'Kottayam', 'Morbi', 'Bhubaneswar', 
  'Cochin', 'Panaji', 'Puducherry', 'Thane', 'Imphal', 'Jodhpur', 'Durg', 'Sikar', 'Navi Mumbai', 'Hosur', 'Haldwani', 
  'Ludhiana', 'Srinagar', 'Tiruvannamalai', 'Hindupur', 'Channarayapatna', 'Kancheepuram', 'Bharatpur', 'Kumta', 
  'Rourkela', 'Mehsana', 'Malkangiri', 'Suryapet', 'Bengaluru', 'Belagavi', 'Solan', 'Nashik', 'Ambala', 'Patiala', 
  'Rajkot', 'Nagpur', 'Tirupati', 'Imphal', 'Cuttack', 'Howrah', 'Surat', 'Gaya', 'Chhattisgarh', 'Satna', 'Rewa', 'Gurgaon'
];
document.getElementById('getWeatherBtn').addEventListener('click', function() {
  const city = document.getElementById('cityInput').value;
  if (city) {
    fetchWeather(city);
  } else {
    alert('Please enter or select a city!');
  }
});


document.getElementById('cityInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const city = document.getElementById('cityInput').value;
    const dropdown = document.getElementById('cityDropdown');
    if (city) {
      fetchWeather(city);

    
      document.getElementById('cityInput').value = '';

      
      dropdown.innerHTML = ''; 
      dropdown.style.display = 'none'; 
    } else {
      alert('Please enter or select a city!');
    }
  }
});

function filterCities() {
  const input = document.getElementById('cityInput').value.toLowerCase();
  const dropdown = document.getElementById('cityDropdown');
  dropdown.innerHTML = ''; 

  
  const filteredCities = cities.filter(city => city.toLowerCase().includes(input));
  

  filteredCities.forEach(city => {
    const cityElement = document.createElement('div');
    cityElement.textContent = city;
    cityElement.addEventListener('click', function() {
      document.getElementById('cityInput').value = city; 
      dropdown.innerHTML = ''; 

      fetchWeather(city);

      
      document.getElementById('cityInput').value = ''; 
    });
    dropdown.appendChild(cityElement);
  });

  
  if (filteredCities.length > 0) {
    dropdown.style.display = 'block';
  } else {
    dropdown.style.display = 'none';
  }
}

async function fetchWeather(city) {
  try {
    
    const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en`;
    const geoResponse = await fetch(geoUrl);
    const geoData = await geoResponse.json();

    if (geoData.results.length === 0) {
      alert('City not found!');
      return;
    }

    const latitude = geoData.results[0].latitude;
    const longitude = geoData.results[0].longitude;

    
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    
    const cityName = city;
    const temperature = weatherData.current_weather.temperature;
    const weatherConditionCode = weatherData.current_weather.weathercode;
    const humidity = weatherData.current_weather.humidity; 
    const visibility = weatherData.current_weather.visibility; 
    const weatherConditions = {

      0: 'Clear Sky',
      1: 'Partly Cloudy',
      2: 'Cloudy',
      3: 'Overcast',
      45: 'Fog',
      48: 'Depositing Rime Fog',
      51: 'Light Drizzle',
      53: 'Moderate Drizzle',
      55: 'Heavy Drizzle',
      56: 'Light Freezing Drizzle',
      57: 'Heavy Freezing Drizzle',
      61: 'Light Rain',
      63: 'Moderate Rain',
      65: 'Heavy Rain',
      66: 'Light Freezing Rain',
      67: 'Heavy Freezing Rain',
      71: 'Light Snow',
      73: 'Moderate Snow',
      75: 'Heavy Snow',
      77: 'Snow Grains',
      80: 'Light Showers of Rain',
      81: 'Moderate Showers of Rain',
      82: 'Heavy Showers of Rain',
      85: 'Light Showers of Snow',
      86: 'Heavy Showers of Snow',
      95: 'Thunderstorms',
      96: 'Thunderstorms with Hail',
      99: 'Thunderstorms with Heavy Hail'
    };

    const weatherCondition = weatherConditions[weatherConditionCode] || 'Unknown';

    
    document.querySelector('.city-name').textContent = cityName;
    document.querySelector('.temperature').textContent = `${temperature}°C`;
    document.querySelector('.weather-condition').textContent = weatherCondition;

    
    if (humidity !== undefined) {
      document.querySelector('.humidity').textContent = `Humidity: ${humidity}%`;
      document.querySelector('.humidity').style.display = 'block';
    } else {
      document.querySelector('.humidity').style.display = 'none'; 
    }

    if (visibility !== undefined && visibility !== null) {
      document.querySelector('.visibility').textContent = `Visibility: ${visibility / 1000} km`; 
      document.querySelector('.visibility').style.display = 'block'; 
    } else {
      document.querySelector('.visibility').style.display = 'none'; 
    }

  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('An error occurred while fetching the weather data.');
  }
}
