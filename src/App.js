import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Home } from "./components/pages/Home";
import Video from "./components/pages/Video";
import Add from "./components/pages/Add";
import Edit from "./components/pages/Edit";
import { NotFound } from "./components/NotFound/NotFound";
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:videoId" element={<Video />} />
        <Route path="/videos/add" element={<Add />} />
        <Route path="/videos/edit/:videoId" element={<Edit />} />
        <Route path="*" element={<NotFound />} exact />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
