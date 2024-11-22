import { IApi } from "../Types/IApi";

const BASE_URL = "http://localhost:3000/";

export const Request = async <TypeResponse>({
  endpoint,
  method = "GET",
  body = null,
}: IApi) => {
  const url = BASE_URL + endpoint;
  const headers: HeadersInit = { "Content-Type": "application/json" };
  
  const options: RequestInit = {
    method,
    headers,
    ...(body && { body: JSON.stringify(body) }),
  };
  

  const response = await fetch(url, options);

  const data: TypeResponse= await response.json();

  return { data: data };
};
