
const  BASIC_URL = "https://661bd9be65444945d050691c.mockapi.io/campers";


 async function fetchCampers() {
  const response = await fetch(
         `${BASIC_URL}/campers`
     );
     return await response.json();
}

export default fetchCampers