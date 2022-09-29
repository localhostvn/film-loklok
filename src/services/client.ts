import axios from "axios";

const client = axios.create({
  baseURL: "https://ga-mobile-api.loklok.tv/cms/app/",
  headers: {
    lang: "vi",
    versioncode: "11",
    clienttype: "ios_jike_default",
    deviceid : "",
  },
});
const fetchApi = (data) => {
  return axios.get(
    `${baseUrl}${data.path}`, 
    { 
      headers,
      params : data.params
    }
  )
}
export const postFetchApi = (data) => {
  return axios.post( 
    `${baseUrl}${data.path}`,
    data.params,
    {
      headers,
    }
  )
}
export default fetchApi;
export default client;
