import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter from "./components/Counter"
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import Todo from "./components/Todo"
import NotFound from "./components/NotFound"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
