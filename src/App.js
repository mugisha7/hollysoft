
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/topbar/navbar'
import { BrowserRouter as Br, Route as R, Switch as S } from 'react-router-dom'
import Post from './components/postform'
import Login from './components/loginform';
function App() {
  return (
    <div className="App">
      <Br>
         <Navbar />
        <S>
          <R path='/' exact />
          <R exact path='/postform'  component={Post}/>
        <R exact path='/loginform'  component={Login}/>
        </S>
      </Br>
    </div>
  );
}

export default App;
