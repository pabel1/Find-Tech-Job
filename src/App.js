import "./App.css";
import 'remixicon/fonts/remixicon.css'
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import JobList from "./Components/Job-List/JobList";
import JobDetails from "./Components/Job-Details/JobDetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/jobs"/>} />
          <Route path="/jobs" element={<JobList/>} />
          <Route path="/jobs/:position" element={<JobDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
