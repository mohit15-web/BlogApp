import {Navbar} from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import AddPost from "./components/AddPost";
import ShowPost from "./components/ShowPost";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/addpost" element={<AddPost/>} />
        <Route path="/showpost" element={<ShowPost/>} />
      </Routes>
    </>
      
  );
};

export default App;
