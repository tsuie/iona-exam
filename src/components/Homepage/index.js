import { Form, Row, Col } from 'react-bootstrap';
import React, { useState, useEffect} from 'react';
import fetchCatBreeds from '../../function/catAPI';


function Homepage() {
    const [breeds, setBreeds] = useState([]);
    const handleChange = (e) => {
        console.log(e.target.value);
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
            
        </>
    );
}

export default Homepage;