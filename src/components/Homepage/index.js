import { Form, Row, Col, Card, Button } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { fetchCatBreeds, fetchCatsByBreed } from '../../function/catAPI';

function Homepage() {
    const [breeds, setBreeds] = useState([]);
    const [sBreeds, setSBreeds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [currentBreedId, setCurrentBreedId] = useState(null);

    const handleChange = (e) => {
        const breed_id = e.target.value;
        console.log(breed_id);
        setCurrentBreedId(breed_id);
        setLimit(10);
        fetchCatsByBreed(breed_id, limit).then(b => {
            setSBreeds(b.data);
        });
    };

    const handleIncreaseLimit = () => {
        const newLimit = limit + 10;
        
        fetchCatsByBreed(currentBreedId, newLimit).then(b => {
            setSBreeds(b.data);
            setLimit(newLimit);
        });
    };
    
    useEffect(() => {
        console.log('Loading Breeds');
        fetchCatBreeds().then(b => {
            setBreeds(b.data);
        });
    }, []);

    return (
        <>
            <h2 className="mt-3">Cat Browser</h2>
            <p>Breed</p>
            <Row>
                <Col xs={3}>
                    <Form.Select 
                        onChange={handleChange}
                    >
                        <option>Select Breed</option>
                        {/* {JSON.stringify(breeds)} */}
                        {breeds.map(breed => {
                            return <option key={breed.id} value={breed.id}>{breed.name}</option>;
                        })}
                    </Form.Select>
                </Col>
            </Row>
            {sBreeds.length ? <Row>{sBreeds.map(b => {
                return <Col key={b.id} className="p-2" md={3}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={b.url} />
                        <Card.Body>
                            <div className="d-grid gap-2">
                                <Button variant="primary">View Details</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>;
            })}</Row>: <p className="mt-3">No cats available</p>}
            <Button variant="success" onClick={handleIncreaseLimit} disabled={sBreeds.length < limit ? true : false } >Load More</Button>
        </>
    );
}

export default Homepage;