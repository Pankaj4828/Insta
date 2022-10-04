import Post from './component/post/post';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Landing from './component/landing_page/landing';
import Form from './component/nform/Nform';


function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
           <Routes>
            
            <Route path='/' element={<Landing/>}/>
            <Route path='/post' element={<Post/>}/>
            
            <Route path='/nform' element={<Form />}/>
          
           </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
