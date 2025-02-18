import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import EventsPage from "./pages/EventsPage/EventsPage";
import EventPage from "./pages/EventPage/EventPage";
import AddEventPage from "./pages/AddEventPage/AddEventPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="/event/add" element={<AddEventPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
