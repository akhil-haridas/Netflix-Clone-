import './App.css'
import Nav from './Components//Navbar/Nav'
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key : '624cec8104aba1058345e01568665342'
}


const App = () => {
  return (
    <div>
      <Nav />
      <Header />
      <Content/>
  </div>
  )
};

export default App;