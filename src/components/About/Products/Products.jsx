import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = (props) => {
//   console.log(props);
  return (
    <div className="">
      <Card style={{ border: 0 }} className="shadow-lg">
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{props.product.company.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div>
            <strong>ID:</strong> #{props.product.id}
          </div>
          <Button variant="primary" className="text-danger" >
            <Link style={{color: "red"}} to={`/products/${props.product.id}`}>Details</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;
