import React from "react";
import { Card } from "react-bootstrap";
import "./SingleTeamMember.css";

const SingleTeamMember = ({ member }) => {
  const { name, img, degisnation, description } = member;
  return (
    <div>
      <Card className="h-100 shadow-lg">
        <div>
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body
          className="team-member"
          style={{ backgroundColor: "#f1f1f1" }}
        >
          <p className="title feature-text mb-4">{degisnation}</p>
          <Card.Title>
            <h4>{name}</h4>
          </Card.Title>
          <Card.Text>
            <p className="text-muted">{description}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleTeamMember;
