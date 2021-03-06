import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

const GlobalStyle = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
