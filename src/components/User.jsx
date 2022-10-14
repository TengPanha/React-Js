import React from 'react'
import {Row,Col,Container} from "react-bootstrap";
import ProfileComponent from '../components/ProfileComponent';
import {  useEffect, useState } from 'react';
function User() {
    const url = "https://reqres.in/api/users?page=2";

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(url)
            .then(responde => responde.json())
            .then(result => {
                setUsers(result.data)
                setIsLoading(false)
            }).catch(error => {
                console.log(error)
            })
    }, [])

    return (
        <div>
            {isLoading ? <h1>LODING</h1> : (
                <Container>
                    
                    <Row className='my-2 ' xs={2} md={4} >
                        {users.map((user) =>
                            <Col key={user.id} className='my-2 '  >
                                <ProfileComponent user={user} />
                            </Col>
                        )}
                    </Row>
                    
                </Container>
            )}
        </div>
    )
}

export default User