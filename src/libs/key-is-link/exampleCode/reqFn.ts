import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type Method,
} from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://pokeapi.co",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export async function requestFn<Req, Res>(
  url: string,
  method: Method,
  data?: Req,
  config?: AxiosRequestConfig
): Promise<Res> {
  const requestConfig: AxiosRequestConfig = {
    url,
    method,
    data,
    ...config,
  };

  console.log({ requestConfig });

  const res: AxiosResponse<Res> = await axiosClient.request<Res>(requestConfig);
  return res.data;
}
