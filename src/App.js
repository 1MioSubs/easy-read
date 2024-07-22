// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Greeting from './components/Greeting';
// import Counter from './components/Counter';

// import Header from "./components/Header";
// import Home from "./components/Home";
// import Library from "./components/Library";
// import BookReader from "./components/BookReader";
// import Profile from "./components/Profile";
// import UploadBook from "./components/UploadBook";
// import Translate from "./components/Translate";
// import Login from "./components/Login";
// import Register from "./components/Register";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         {/* <Greeting name="Roman" />
//         <Counter /> */}
//         <Header />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route exact path="/library" component={Library} />
//           <Route exact path="/books/:id" component={BookReader} />
//           <Route exact path="/upload" component={UploadBook} />
//           <Route exact path="/profile" component={Profile} />
//           <Route exact path="/translate" component={Translate} />
//           <Route exact path="/login" component={Login} />
//           <Route exact path="/register" component={Register} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;


// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Library from './components/Library';
import BookReader from './components/BookReader';
import Profile from './components/Profile';
import UploadBook from './components/UploadBook';
import Translate from './components/Translate';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/books/:id" element={<BookReader />} />
          <Route path="/upload" element={<UploadBook />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/translate" element={<Translate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
