import {BrowserRouter, Routes, Route} from "react-router-dom";
import { LandingPages } from "../pages/LandingPages";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<LandingPages/>} />
            <Route exact path="/movies/:movieId" element={<MovieDetails/>} />
        </Routes>
    </BrowserRouter>
  )
}
