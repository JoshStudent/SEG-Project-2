import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Artists from "./Pages/Artists";
import News from "./Pages/News";
import Request from "./Pages/Request";

function Navbar() {
    return (
        <ul className="navbar">
            <li className="navitemleft"><a href="/">Artist Alley</a></li>
            <li className="navitemright"><a href="/Request">Request</a></li>
            <li className="navitemright"><a href="/News">News</a></li>
            <li className="navitemright"><a href="/Artists">Artists</a></li>
            <li className="navitemright"><a href="/Gallery">Gallery</a></li>
        </ul>
    );
}

export default function Main() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="Gallery" element={<Gallery />} />
                    <Route path="Artists" element={<Artists />} />
                    <Route path="News" element={<News />} />
                    <Route path="Request" element={<Request />} />
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}
