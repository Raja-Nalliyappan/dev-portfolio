import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Portfoilo/home";
import { Notfound } from "./Portfoilo/Notfound";
import { Experience } from "./Portfoilo/Experience";
import { Skills } from "./Portfoilo/Skills";

function App() {
  return (
    <>
      <div>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/home" element={<Home />} />
            <Route path="/experience" element={<Experience />}/>
            <Route path="/skills" element={<Skills />}/>
            <Route path="*" element={<Notfound />} />  
          </Routes>
        </HashRouter>
      </div>
    </>
  );
}

export default App;
