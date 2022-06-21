import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  colors,
} from "@mui/material";
import React from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { Intro } from "./pages/Intro";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { Progress } from "./pages/Progress";
import { Monitor } from "./pages/Monitor";
import { Properties } from "./pages/Properties";
import { Quality } from "./pages/Quality";

const theme = createTheme({
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

const routes = [
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
    element: "admin",
    title: "管理",
  },
];

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  华南理工大学施工监测系统
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Box sx={{ width: 300, height: "100%" }}>
              <List sx={{ backgroundColor: colors.grey[100], height: "100%" }}>
                {routes.map((route) => (
                  <ListItem key={route.path} disablePadding>
                    <ListItemButton selected={location.pathname === route.path}>
                      <ListItemText
                        primary={route.title}
                        onClick={() => {
                          navigate(route.path);
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box sx={{ bgcolor: "Background", flexGrow: 1, padding: "16px" }}>
              <Routes>
                {routes.map((route) => (
                  <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                  />
                ))}
              </Routes>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
