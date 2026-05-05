import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type Method,
} from "axios";

// axios 클라이언트를 사용한 예시입니다.
// keyIsLink 라이브러리는 단순 요청 링크 문자열을 파싱해주는 역할일 뿐이므로
// axios 외에 fetch 등 다양한 요청 로직을 사용할 수 있습니다.
const axiosClient: AxiosInstance = axios.create({
  // 간단한 시연을 위해 각각의 요청에 따라 적절한 json 응답을 주는 무료 REST API를 사용했습니다.
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

// 실제 요청 로직입니다.
// 각 인자들과 제네릭으로 선언된 <Req, Res> 는
// keyIsLink 내부 타입 추론 및 요청 구성에 사용됩니다.
export async function requestFn<Req, Res>(
  url: string,
  method: Method,
  data?: Req,
  config?: AxiosRequestConfig,
): Promise<Res> {
  const requestConfig: AxiosRequestConfig = {
    url,
    method,
    data,
    ...config,
  };

  const res: AxiosResponse<Res> = await axiosClient.request<Res>(requestConfig);
  return res.data;
}
