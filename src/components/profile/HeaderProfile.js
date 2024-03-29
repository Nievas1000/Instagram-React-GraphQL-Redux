import { Button, Col, Container, Row } from "react-bootstrap";
import image from "../../assets/perfil.jpg";
import AmountsProfile from "./AmountsProfile";
import { NavLink } from "react-router-dom";

const HeaderProfile = ({ user, images }) => {
  return (
    <Container className="container-header-profile">
      <Row className="mt-4">
        <Col>
          <img
            src={
              user.image === ""
                ? image
                : `http://localhost:3002/posts/${user.image}`
            }
            alt="Profile"
            className="img-profile"
          />
        </Col>
        <Col className="container-data-profile">
          <h2>{user.username}</h2>
          <NavLink to="/settings">
            <Button variant="secondary" className="button-edit mt-2">
              Edit profile
            </Button>
          </NavLink>
          <div className="amount-profile desk">
            <AmountsProfile images={images} />
          </div>
          <Container className="description desk">
            <span>{user.username}</span>
            <p>{user.description}</p>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderProfile;
