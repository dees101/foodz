import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer raF9FPJl9ht49cR0p0JqDvjZQZc-92sqLtwCeCuoarlDAj2Yv_IDCwBjNmrlsKty9XAqANhswyThT0U_0Sf4gSaMWrFUqri4lV0eN_iD-Pwi_DOZp6FCu9MS6oV6XnYx'
  }
});
