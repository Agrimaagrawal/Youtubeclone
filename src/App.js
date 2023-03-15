import {Appcontext} from './context/Contextapi.js'
import Header from './components/Header.jsx';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';
import {HashRouter,Routes,Route} from "react-router-dom";


function App() {
  return (
    <>
      <Appcontext>
      <HashRouter>
      <div className='flex flex-col h-full'>
        <Header/>
          <Routes>
            <Route path='/' exact element={<Feed/>}></Route>
            <Route path='/searchResult/:searchQuery' element={<SearchResult/>}></Route>
            <Route path='/video/:id' element={<VideoDetails/>}></Route>
          </Routes>
        
      </div>
      </HashRouter>
      
      </Appcontext>
      </>
    
  );
}

export default App;
