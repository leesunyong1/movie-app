import { Route, Routes } from "react-router-dom";
import MovieDetail from "./components/MovieDetail";
import MovieSearch from "./components/MovieSearch";
import AuthButton from "./components/AuthButton";

function App() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
        <AuthButton />
      </div>
      <Routes>
        <Route path="/" element={<MovieSearch />} />
        <Route path="/movies/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default App;
