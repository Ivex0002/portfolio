import { keyIsLink } from "key-is-link";
import type { AxiosRequestConfig } from "axios";
import { requestFn } from "./reqFn";
import type { MyLink } from "./typeLink";

// 엔드포인트 MyLink, 요청 설정 타입 AxiosRequestConfig, 실제 요청 로직 requestFn
// 이 3가지를 인자로 받아 myApi 객체를 생성합니다.
export const myApi = keyIsLink<MyLink, AxiosRequestConfig>(requestFn);
