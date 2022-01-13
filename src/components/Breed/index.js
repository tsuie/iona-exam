import { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { fetchBreedInfo } from '../../function/catAPI';
import { Container, Card, Button } from 'react-bootstrap';

function Breed() {
    const [ info, setInfo ] = useState(null);
    let { breedId } = useParams();
    useEffect(() => {
        fetchBreedInfo(breedId).then(i => {
            setInfo(i.data);
        }).catch(e => {
            console.error(e);
        });
    }, []);
    return (
        <>
            <Container>
                <Card className="mt-5">
                    <Card.Header><Button variant="primary" href={'/?breed=' + info?.breeds[0].id}>Back</Button></Card.Header>
                    <Card.Img variant="top" src={info?.url}  alt={info?.breeds[0]?.name || 'No Data'}/>
                    <Card.Body>
                        <Card.Title>{info?.breeds[0]?.name || 'No Data'}</Card.Title>
                        <Card.Text>
                            {info?.breeds[0]?.origin ? (<h4>Origin: {info?.breeds[0]?.origin}</h4>) : ''}
                            {info?.breeds[0]?.temperament ? (<h5>{info?.breeds[0]?.temperament}</h5>) : ''}
                            {info?.breeds[0]?.description ? (<p>{info?.breeds[0]?.description}</p>) : ''}
                        </Card.Text>
                        
                    </Card.Body>
                </Card>
            </Container>
            {/* Sliced Breed {info?.url || 'processing'} */}
        </>
    );
}

export default Breed;