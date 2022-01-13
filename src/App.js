import Homepage from './components/Homepage';
import Breed from './components/Breed';
import {Container} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    // Link,
    Routes,
    Route
} from 'react-router-dom';
  
function App() {
    return <Container className="pb-5">
        <Router>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route exact path="/:breedId" element={<Breed />} />
            </Routes>
        </Router>
        
    </Container>;
}

export default App;
