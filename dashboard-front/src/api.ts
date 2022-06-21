import axios from "axios";
import { useQuery } from "react-query";
import { Config } from "./types";

const baseURL = "http://localhost:3001";

const agent = axios.create({
  baseURL,
});

agent.interceptors.request.use((config) => {
  const token = localStorage.getItem("BEARER_TOKEN");
  if (token && config.headers) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

agent.interceptors.response.use(undefined, (error) => {
  throw error;
  // TODO: redirect
});

export async function getConfig() {
  return await agent.get<Config>("/config").then((res) => res.data);
}

export function useConfig() {
  return useQuery<Config>(["config"], () => getConfig(), { staleTime: 10_000 });
}

export async function setConfig(config: Partial<Config>) {
  return await agent.patch("/config", config).then((res) => res.data);
}

export async function login(password: string) {
  return await agent.post("/login", { password }).then((res) => res.data);
}

export async function upload(file: Blob, fileName: string) {
  const body = new FormData();
  body.append("file", file, fileName);
  return await agent.post("/upload", body).then((res) => res.data);
}
