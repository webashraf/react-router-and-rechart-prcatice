import React from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const ProductDetails = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            <h1>This is ProductDetails page..</h1>
            <Card style={{ border: 0 }} className="shadow-lg">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{user.company.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div>
            <strong>ID:</strong> #{user.id}
          </div>
          <Button variant="primary" className="text-danger" >
           Details
          </Button>
        </Card.Body>
      </Card>
        </div>
    );
};

export default ProductDetails;