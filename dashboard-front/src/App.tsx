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
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { routes, theme } from "./constants";
import { useRef } from "react";
// import { ListItemIcon } from "@material-ui/core";

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const navBarRef = useRef<HTMLDivElement>();
  return (
    <QueryClientProvider client={queryClient}>
      <CssBaseline />
      <ReactQueryDevtools />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
          <Box component="div" ref={navBarRef}>
            <AppBar position="static">
              <Toolbar>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                  华南理工大学施工监测系统
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
              <List sx={{ backgroundColor: colors.grey[100], height: "100%"}}>
                {routes.map((route) =>
                  route.title ? (
                    <ListItem key={route.path} disablePadding sx={{height:"64px"}}>
                      <ListItemButton sx={{height:"100%"}}
                        selected={location.pathname === route.path}
                        onClick={() => {
                          navigate(route.path);
                        }}
                      >
                        {/* <ListItemIcon>{route.icon}</ListItemIcon> */}
                        <ListItemText primary={route.title} />
                      </ListItemButton>
                    </ListItem>
                  ) : null
                )}
              </List>
            </Box>
            <Box
              sx={{
                bgcolor: "Background",
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
    </QueryClientProvider>
  );
}

export default App;
