import axios from 'axios';
import { getEnv } from './config';

// import { version } from '../../package.json';
// import { Decrypt } from '../components/Crypto';

// const Version = version.replace(/(\D)(\d)(?=\/|\s|$)/g, '$10$2');
// const strversion = Version.replace(/[.]+/g, '');

// const baseURL = document.URL;
// const baseURLMatchDevEnv =
//   baseURL.indexOf('localhost') ||
//   baseURL.indexOf('127.0.0.1') ||
//   baseURL.indexOf('//test');
export const apiUrl =
  getEnv() === 'dev'
    ? 'https://localhost:8000'
    : 'https://backendcrudreact.herokuapp.com';

axios.defaults.baseURL = apiUrl

// axios.interceptors.response.use(
//   response => response,
//   /* eslint-disable prettier/prettier */
//   error => {
//     const route = window.location.pathname;
//     // console.log('axios error : ', error.response);
//     if (
//       (error.response && (route !== '/activate' && error.response.status === 401)) ||
//       (error.response && (route !== '/activate' && error.response.data.status === 'TOKEN_EXPIRED'))
//     ) {
//       store.dispatch(showLockscreen());
//     }
//     // eslint-disable-next-line no-console
//     // console.log('Promise.reject : ', error.response);
//     // console.log(error.response);
//     let err;
//     if (error.response.config.url.includes('orabank') || route === '/transfer/cash' || route === '/login') {
//       err = {
//         message: getMatchingErrors(error.response.data.error) || getMatchingErrors(error.response.data.message ) || getMatchingErrors(error.response.statusText),
//         response: error.response};
//     } else {
//       err = getMatchingErrors(error.response.data.error) || getMatchingErrors(error.response.data.message ) || getMatchingErrors(error.response.statusText);
//     }
//     return Promise.reject(err);
//     // return Promise.reject(getMatchingErrors(err.toLowerCase()));
//   },
//   /* eslint-disable prettier/prettier */
// );

// /**
//  * Parses the JSON returned by a network request
//  *
//  * @param  {object} response A response from a network request
//  *
//  * @return {object}          The parsed JSON from the request
//  */
// function parseJSON(response) {
//   if (response.status === 204 || response.status === 205) {
//     return null;
//   }
//   if (response.status === 200) {
//     return response.data;
//   }
//   return response;
// }

// class API {
//   /**
//    * Requests a URL, returning a promise
//    *
//    * @param  {string} url       The URL we want to request
//    *
//    * @return {object}           The response data
//    */
//   static get(url) {
//     return axios.get(url).then(parseJSON);
//   }

//   /**
//    * Requests a URL, returning a promise
//    *
//    * @param  {string} url       The URL we want to request
//    * @param  {object} [options] The options we want to send
//    *
//    * @return {object}           The response data
//    */
//   static post(url, options) {
   
//     let o = options;
//     try {
//       o = JSON.parse(options);
//     } catch (error) {
//       // console.log(error)
//     }
//     axios.defaults.baseURL =  apiUrl;

//     return axios
//       .post(url, options, { headers: { 'Content-Type': 'application/json',} })
//       .then(parseJSON);
//   }
// }

// export default API;