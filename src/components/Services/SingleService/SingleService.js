import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleService = ({ service }) => {
  const { id, name, img1, description } = service;
  return (
    <div>
      <Card className="h-100 shadow-sm">
        <div>
          <Card.Img className="img-fluid" variant="top" src={img1} />
        </div>
        <Card.Body className="py-3">
          <Card.Title>{name.slice(0, 25)}..</Card.Title>
          <Card.Text>{description.slice(0, 80)}...</Card.Text>
        </Card.Body>
        <Card.Footer className="bg-white border-0 pb-3">
          <Button className="happy-btn btn-danger px-4 py-2 rounded-3">
            Learn More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default SingleService;
