
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllStudents from "./AllStudents";
import RandomStudent from "./RandomStudent";

export default function App() {

  console.log('test!');

  return <BrowserRouter>
      <Routes>
          <Route path="/" element={<RandomStudent />} />
          <Route path="/all" element={<AllStudents />} />
      </Routes>
  </BrowserRouter>
}