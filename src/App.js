
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/topbar/navbar'
import { BrowserRouter as Br, Route as R, Switch as S } from 'react-router-dom'
import Post from './components/postform'
import Login from './components/loginform';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Br>
        <S>
          <R path='/' exact />
          <R exact path='/src/components/postform'  component={Post}/>
        <R exact path='/src/components/loginform'  component={Login}/>
        </S>
      </Br>
    </div>
  );
}

export default App;
