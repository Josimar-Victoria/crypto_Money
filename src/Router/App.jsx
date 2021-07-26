import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Footer } from '../Components/Footer';
import { Header } from '../Components/Header';
import { NotFound } from '../Components/NotFound';
import { ChartsPage } from '../Pages/ChartsPage';
import { HomePage } from '../Pages/HomePage';
import '../Styles/App.css';
import styled from 'styled-components'
export const App = () => {
  return (
    <CryptoContainer>
        <BrowserRouter>
            <Header/>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/cryptocurrency/:id" component={ChartsPage}/>
                <Route exact path="*" component={NotFound} />
              </Switch>
            <Footer/>
        </BrowserRouter>
    </CryptoContainer>
  );
}

const CryptoContainer = styled.div`
  display: "flex";
  flex-direction:'column';
  margin: auto;
  align-content: center;
  min-height: 100vh;
  width:80vw
`

