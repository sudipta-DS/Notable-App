import AddNote from "./components/AddNote";
import Notes from "./components/allNotes";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import UpdateNote from "./components/UpdateNote";

export const AppContext = createContext();

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem("smart-hire"));
    setNotes(allNotes ? allNotes : []);
  }, []);
  return (
    <AppContext.Provider value={{ notes, setNotes }}>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/Notable-App/" element={<Notes />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/" element={<Notes />} />
          <Route path="/update-note" element={<UpdateNote />} />
        </Routes>

        {/* <AddNote /> */}
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
