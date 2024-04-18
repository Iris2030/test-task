export const addFavoriteCard = (cardId) => ({
    type: 'ADD_FAVORITE_CARD',
    payload: cardId,
  });
  
  export const removeFavoriteCard = (cardId) => ({
    type: 'REMOVE_FAVORITE_CARD',
    payload: cardId,
  });

  export const setFavoriteCards = (favoriteCards) => ({
    type: 'SET_FAVORITE_CARDS',
    payload: favoriteCards,
  });