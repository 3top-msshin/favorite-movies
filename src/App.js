import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Poster from "./routes/Poster";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/poster/:id" element={<Poster />} />
                <Route path="/movie/:id" element={<Detail />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
