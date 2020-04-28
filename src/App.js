import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/layouts/default/sidebar/Sidebar';
import Header from './components/layouts/default/Header';
import Footer from './components/layouts/default/Footer';
import styled from 'styled-components';

const ContentContainer = styled.div`
    padding: 10px 20px 0;
    margin-left: 230px;
    z-index: 2;
    min-height: 885px !important;
        @media (max-width: 768px) {
        margin-left:70px;
    }
`;
const Content = styled.div`
  margin-top: 3rem;
  text-align:left;
`;

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="main_container">
          <Sidebar />
          <Header />
          <ContentContainer>
            <Content>
              content
              contenthgkgkhgk bkb kbjkbjh bkjhkjbjhlhh jkhghh bjkbjhb bjkhjh kjb jking
              contenthgkgkhgk bkb kbjkbjh bkjhkjbjhlhh jkhghh bjkbjhb bjkhjh kjb
              contenthgkgkhgk bkb kbjkbjh bkjhkjbjhlhh jkhghh bjkbjhb bjkhjh kjb
            </Content>
          </ContentContainer>
          <Footer />
          <span>learn react</span>
        </div>
      </div>
    </Router >
  );
}
export default App;