import { Container, Col, Row } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Account from './components/Account';
import FreeComponent from './components/FreeComponent';
import ProtectedComponent from './components/ProtectedComponent';
import ProtectedRoutes from './components/ProtectedRoutes';
import { AuthProvider } from './components/AuthProvider';

function App() {
  return (
    <Container>
     <Routes>
      <Route path='/' element={<Account />} />
      <Route path='/freecomponent' element={<FreeComponent />} />
      <Route path='/protectedcomponent'
      element={
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
