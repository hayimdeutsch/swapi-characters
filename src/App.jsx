import theme from "./context/theme.js";
import { PaginationProvider } from "./context/PaginationContext.jsx";
import CharacterTable from "./pages/CharacterTable.jsx";
import CharacterPage from "./pages/CharacterPage.jsx";
import { ThemeProvider } from "@emotion/react";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <PaginationProvider>
        <Router>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                py: 4,
                minHeight: "100vh",
                backgroundColor: "background.default",
                color: "text.primary",
                alignContent: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Routes>
                <Route path="/" element={<CharacterTable />} />
                <Route path="/character/:id" element={<CharacterPage />} />
              </Routes>
            </Box>
          </ThemeProvider>
        </Router>
      </PaginationProvider>
    </>
  );
}

export default App;
