// import { createSelector } from '@reduxjs/toolkit';

export const selectAdvert = state => state.advert.items;

export const selectIsLoading = state => state.advert.isLoading;

export const selectError = state => state.advert.error;

// export const selectAvailableContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
