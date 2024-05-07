import Navber from "./components/Navber";
import AddBook from "./pages/AddBook";
import Main from "./pages/Main";
import UpdateBook from "./pages/UpdateBook";
import {BrowserRouter, Routes, Route} from "react-router-dom"



function App() {
  return (
    <BrowserRouter>
      <Navber />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Routes>
              <Route path="/" element={<Main />} ></Route>
              <Route path="/AddBook" element={<AddBook />}></Route>
              <Route path="/UpdeleteBook/:id" element={<UpdateBook />}></Route>
            </Routes>
          </div>
        </div>
      </div>
      {/* <UpdateBook /> */}
    </BrowserRouter>
  );
}

export default App;
