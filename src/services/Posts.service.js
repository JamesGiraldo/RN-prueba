import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

/** metodo de login  */
export const GetPosts = async () => {
  try {
    return await axios.get( url )
  } catch (error) {
    alert(error);
  }
};
