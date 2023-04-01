import './index.css';
import { Routes, Route } from "react-router-dom";
import Mergefile from './Component/Mergefile.js';
import Aboutme from './About/Aboutme';
import Error  from './Errorpage/Error';
function App() {
  return (
    <Routes>
        <Route exact path="/" element={<Mergefile/>} />
        <Route exact path="/aboutme" element={<Aboutme/>} />
        <Route exact path="*" element={<Error/>} />
    </Routes>
  );
}
export default App;