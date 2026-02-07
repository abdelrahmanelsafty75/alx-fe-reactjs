import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const fetchAdvancedSearchResults = async (username, location, minRepos, page = 1) => {
  let query = username || '';

  if (location) {
    query += `+location:${location}`;
  }

  if (minRepos) {
    query += `+repos:>${minRepos}`;
  }

  const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
  return response.data;
};