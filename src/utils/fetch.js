/* eslint-disable max-len */
export const fetchCharacters = async() => {
  const response = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');
  return response.json();
};
  
export const fetchCharacter = async(id) => {
  const response = await fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters/${id}`);
  return response.json();
};
