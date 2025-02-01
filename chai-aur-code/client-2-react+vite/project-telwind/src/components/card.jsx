import React from 'react'
import Card from 'react-bootstrap/Card';

function MyCard(props) {
    return (
        <>

            {/* card */}
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.Title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.Subtitle} </Card.Subtitle>
                    <Card.Text>
                        {props.Title}
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <br />
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>

        </>
    )
}

export default MyCard