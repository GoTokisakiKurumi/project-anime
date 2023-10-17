import axios from 'axios'

export const fetchAnimeList = async (mode) =>
{
  try {
    const response = await axios.get('https://kurumi-api.vercel.app/anime/' + mode)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchAnimeOngoing = async () =>
{
  try {
    const response = await axios.get('https://kurumi-api.vercel.app/anime/ongoing')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchAnimeUpdate = async () =>
{
  try {
    const response = await axios.get('https://kurumi-api.vercel.app/anime/update')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchAnimeMovies = async () =>
{
  try {
    const response = await axios.get('https://kurumi-api.vercel.app/anime/movie')
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const fetchAnimeCompleted = async () =>
{
  try {
    const response = await axios.get('https://kurumi-api.vercel.app/anime/completed')
    return response.data
  } catch (error) {
    console.log(error)
  }
}



