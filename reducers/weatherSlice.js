import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: {
      city: {
        name: 'Paris',
      },
      weather: null,
    },
  },
  reducers: {
    updateCity: (state, action) => {
      state.value.city = action.payload;
    },
    updateWeather: (state, action) => {
      state.value.weather = action.payload;
    },
  }
})

export const { updateWeather, updateCity } = weatherSlice.actions

export const fetchCurrentCityForecasts = (lat = 48.85341, lon = 2.3488) => {
  if (!process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY) return null;

  // the inside "thunk function"
  return async (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_OPEN_PEXELS_API_KEY,
      },
    };
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&`;

    try {
      const res = await fetch(url + new URLSearchParams({
        appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
      }));
      const data = await res.json();

      return dispatch(updateWeather(data))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}

export const fetchCurrentCityImage = (city = { name: 'paris' }) => {
  if (!process.env.NEXT_PUBLIC_OPEN_PEXELS_API_KEY) return null;

  // the inside "thunk function"
  return async (dispatch, getState) => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: process.env.NEXT_PUBLIC_OPEN_PEXELS_API_KEY,
      },
    };
    const url = `https://api.pexels.com/v1/search?query=${city.name.toLowerCase()}&per_page=100`;

    try {
      const res = await fetch(url, options);
      const data = await res.json();
      let photos;

      if (data.photos.length > 0) {
        const randomNum = Math.round(Math.random() * data.photos.length);

        photos = data.photos[randomNum];
      } else {
        const result = await fetch('https://api.pexels.com/v1/search?query=city&per_page=1', options);
        const resData = await result.json();

        photos = resData.photos[0];
      }

      return dispatch(updateCity({...city, photos}));
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}

export const selectWeather = state => state.weather.value.weather;
export const selectCity = state => state.weather.value.city;


export default weatherSlice.reducer
