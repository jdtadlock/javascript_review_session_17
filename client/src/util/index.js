import axios from 'axios';



export function getAll() {
  return axios.get('/api/notes').then(res => res.data);
}

// export function test() {
//   return axios.get('/test').then(res => res.data);
// }

// export function somethingElse(data) {
//   return axios.post('/api/user', data);
// }