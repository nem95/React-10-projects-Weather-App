import { createSlice } from '@reduxjs/toolkit'

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: null
  },
  reducers: {
    updateWeather: (state, action) => {
      state.value = action.payload;
    },
  }
})

export const { updateWeather } = weatherSlice.actions

export const fetchCurrentCityForecasts = (lat = 48.85341, lon = 2.3488) => {
  if (!process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY) return null;

  // the inside "thunk function"
  return async (dispatch, getState) => {
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      dispatch(updateWeather(data))
    } catch (err) {
      // If something went wrong, handle it here
    }
  }
}

export const selectWeather = state => state.weather.value;


export default weatherSlice.reducer
