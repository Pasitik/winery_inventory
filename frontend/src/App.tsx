import Nav from './components/Nav';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Expenses from './screens/Expenses';
import Home from './screens/Home';
import Products from './screens/Products';
import Sales from './screens/Sales';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'




function App() {

  return (
    <Router>
      <div className='app'>
        <Row className=''>
          <Col className='bg-dark col-auto col-md-2'>
            <Nav/>
          </Col>
          <Col>
          <main>
            <Container>
              <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/dashboard' element={ <Dashboard/> } />
                <Route path='/expenses' element={ <Expenses/> } />
                <Route path='/Products' element={ <Products/> } />
                <Route path='/sales' element={ <Sales/> } />
              </Routes>
            </Container>
          </main>
          </Col>
        </Row>
      </div>
    </Router>
  )
}

export default App
