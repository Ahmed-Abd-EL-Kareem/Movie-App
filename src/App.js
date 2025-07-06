import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
function App() {
  return (
    <div className="font color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
