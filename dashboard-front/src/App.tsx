import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  colors,
  ListItemIcon,
} from "@mui/material";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { routes, theme } from "./constants";
import { useRef } from "react";
import { useConfig } from "./api";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const navBarRef = useRef<HTMLDivElement>();
  const {data: config } = useConfig();
  return (
    <>
      <CssBaseline />
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box component="div" ref={navBarRef}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  {config?.title}
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>

          <Box
            sx={{
              display: "flex",
              height: "calc(100vh - 64px)",
            }}
          >
            <Box sx={{ width: 250, height: "100%", flexShrink: 0 }}>
              <List sx={{ backgroundColor: colors.grey[100], height: "100%" }}>
                {routes.map((route) =>
                  route.title ? (
                    <ListItem
                      key={route.path}
                      disablePadding
                      sx={{ height: "64px" }}
                    >
                      <ListItemButton
                        sx={{ height: "100%" }}
                        selected={location.pathname === route.path}
                        onClick={() => {
                          navigate(route.path);
                        }}
                      >
                        <ListItemIcon>{route.icon}</ListItemIcon>
                        <ListItemText primary={route.title} />
                      </ListItemButton>
                    </ListItem>
                  ) : null
                )}
              </List>
            </Box>
            <Box
              sx={{
                bgcolor: "white",
                flexGrow: 1,
                padding: "16px",
                overflowY: "scroll",
              }}
            >
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
    </>
  );
}

export default App;
