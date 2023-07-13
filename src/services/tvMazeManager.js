import axios from 'axios';

const API_BASE_URL = 'https://api.tvmaze.com/';

export async function getShows() {
  const response = await axios.get(`${ API_BASE_URL }schedule?country=US`);
  
  return response.data;
}

export async function searchShows(searchText) {
  const response = await axios.get(`${ API_BASE_URL }search/shows?q=${searchText}`);
  
  return response.data;
}

export async function getShow(showId) {
  const response = await axios.get(`${ API_BASE_URL }shows/${ showId }`);
  
  return response.data;
}
