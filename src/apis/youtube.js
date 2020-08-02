import axios from 'axios';

const KEY = 'AIzaSyCj9uISj1x1u3TIcU-ZcQPcF3qYCc_Payg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResult: 5,
    key: KEY,
  },
});
