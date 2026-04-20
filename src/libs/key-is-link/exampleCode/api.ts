import { keyIsLink } from "key-is-link";
import type { AxiosRequestConfig } from "axios";
import { requestFn } from "./reqFn";
import type { MyLink } from "./typeLink";

export const myApi = keyIsLink<MyLink, AxiosRequestConfig>(requestFn);
