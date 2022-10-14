import React from 'react'
import { Card, Button } from 'react-bootstrap'
function ProfileComponent({user}) {
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={user.avatar} />
            <Card.Body>
                <Card.Title>EMAIL:{user.email}</Card.Title>
                <Card.Text>
                    {user.first_name}:{user.last_name}
                </Card.Text>
                <Button variant="outline-primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )
}

export default ProfileComponent