import { Container, Col, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import FreeComponent from './components/FreeComponent';
import ProtectedComponent from './components/ProtectedComponent';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <Container>
      <Row>
        <Col className='text-center'>
          <h1>React Authentication Tutorial</h1>
          <section id='navigation'>
            <a href='/'>Home</a>
            <a href='/free'>Free Component</a>
            <a href='/protected'>Protected Component</a>
          </section>
          </Col>
          </Row>
          <Row>
            <Account />
          </Row>
          {/* create routes here */}
        <Routes>
          <Route exact path='/' component={Account} />
          <Route exact path='/free' component={FreeComponent} />
          <Route path='/protected' element={
            <ProtectedRoutes>
              <ProtectedComponent />
            </ProtectedRoutes>
          }
          />
        </Routes>

    </Container>
  );
}

export default App;
