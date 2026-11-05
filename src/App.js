
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore"
import Demo from './components/Demo';
import Demo2 from './components/Demo2';


const AppRouter = createBrowserRouter(
 [
  {
    path : "/",
    element : <Body/>,
    children : [
      {
        path : "/",
        element : <MainContainer/>
      },
      {
        path: "/watch",
        element :<WatchPage/>,
      },
      {
        path: "/demo",
        element :<><Demo/><Demo2/></>,
      },
    ]
  }
 ]
)

function App() {
  return (
    <Provider store={appStore}>
        <div className="App">
      <Header/>
     <RouterProvider router = {AppRouter}/>
   </div>
    </Provider>
      
    
 
  );
}

export default App;
