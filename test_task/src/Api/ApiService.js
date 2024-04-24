
import axios from 'axios';

const  BASIC_URL = "https://661bd9be65444945d050691c.mockapi.io/campers";

 async function fetchCampers() {
  const response = await axios.get(
         `${BASIC_URL}/campers`
     );
     const campers = await response.data
     return await campers;
}

export default fetchCampers