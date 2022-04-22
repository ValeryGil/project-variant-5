import "./App.css";
import Container from "@mui/material/Container";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main/Main";
import PostForm from "./components/PostForm/PostForm";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import PostsList from "./components/PostsList/PostsList";
import { Box } from "@mui/material";
import { RequireAuth } from "./components/Authorization/RequireAuth/RequireAuth";
import SignIn from "./components/Authorization/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import SignUp from "./components/Authorization/SignUp/SignUp";
import { LogOut } from "./components/Authorization/LogOut/LogOut";
import PostsEditDetailModal from "./components/PostsDetailModal/PostsEditDetailModal";

const themeLight = createTheme({
  palette: {
    background: {
      default: "whitesmoke",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <BrowserRouter>
          <NavBar />
          <Container
            maxWidth="md"
            sx={{ flexGrow: 1, display: "flex", mt: 3, flexDirection: 'column' }}
            className="container"
          >
            <Routes>
              <Route path="/" element={<Main />} />
              <Route
                path="/posts"
                element={
                  <RequireAuth>
                    <PostsList />
                  </RequireAuth>
                }
              />
              <Route
                path="/postform"
                element={
                  <RequireAuth>
                    <PostForm />
                  </RequireAuth>
                }
              />
              <Route path="/posts/:postId" element={<PostsEditDetailModal />}/>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/logout" element={<LogOut />} />
            </Routes>
          </Container>
          <Footer />
        </BrowserRouter>
      </Box>
    </ThemeProvider>
  );
}

export default App
