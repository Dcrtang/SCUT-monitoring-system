import { createTheme } from "@mui/material";
import { Admin } from "./pages/Admin";
import { Intro } from "./pages/Intro";
import { Login } from "./pages/Login";
import { Monitor } from "./pages/Monitor";
import { Progress } from "./pages/Progress";
import { Properties } from "./pages/Properties";
import { Quality } from "./pages/Quality";

export const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Noto Sans SC"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export const routes = [
  {
    path: "/",
    element: "index",
    title: "首页",
  },
  {
    path: "/intro",
    element: <Intro />,
    title: "项目简介",
  },
  {
    path: "/progress",
    element: <Progress />,
    title: "工程进度",
  },
  {
    path: "/monitor",
    element: <Monitor />,
    title: "施工监测数据",
  },
  {
    path: "/properties",
    element: <Properties />,
    title: "指令属性",
  },
  {
    path: "/quality",
    element: <Quality />,
    title: "工程质量管理",
  },
  {
    path: "/admin",
    element: <Admin />,
    title: "管理",
  },
  {
    path: "/login",
    element: <Login />,
  },
];
