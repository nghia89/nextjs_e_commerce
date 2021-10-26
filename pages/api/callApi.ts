
import axios from "axios";
import https from 'https'

export type Method = "GET" | "POST" | "PUT" | "GET" | "DELETE";


async function callApi(method: Method, path: string, body?: any, baseApi?: string): Promise<any> {
  let apiPath = `api/${path}`;
  return _callApi(method, apiPath, body, baseApi).then((rsp) => { return rsp.data }).catch(error => {
    throw console.log('error from web', error);
  }).catch((error) => console.log('call api  error', error));
}

async function _callApi(method: Method, path: string, body?: any, baseApi?: string): Promise<any> {
  // console.log('process.env.BASE_API_URL', process.env.NODE_ENV)
  const config = {
    baseURL: baseApi ? baseApi : process.env.BASE_API_URL

  }

  if (process.env.NODE_ENV === 'development') {
    const httpsAgent = new https.Agent({
      rejectUnauthorized: false,
    })
    axios.defaults.httpsAgent = httpsAgent
    console.log(process.env.NODE_ENV, `RejectUnauthorized is disabled.`)
  }

  const http = axios.create(config);


  switch (method) {
    case "GET":
      return await http.get(path);
    case "POST":
      return await http.post(path, body);
    case "PUT":
      return await http.put(path, body);
    case "DELETE":
      return await http.delete(path);
  }
}

export const GET = async (path: string, baseApi?: string) => {
  return await callApi("GET", path, null, baseApi)
};

export const POST = async (path: string, body: any, baseApi?: string) => {
  return await callApi("POST", path, body, baseApi)
};

export const PUT = async (path: string, body: any, baseApi?: string) => {
  return await callApi("PUT", path, body, baseApi)
};

export const DELETE = async (path: string, baseApi?: string) => {
  return await callApi("DELETE", path, null, baseApi)
};




