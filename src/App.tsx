import { HashRouter, Routes, Route } from "react-router-dom";

function Home() {
  return (
    <div style={{ color: "white", padding: "40px" }}>
      <h1>Site Loaded Successfully</h1>
      <p>If you can see this, GitHub Pages + Vite is working.</p>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
