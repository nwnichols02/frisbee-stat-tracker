import { Navbar, Container, NavbarBrand, Image } from "react-bootstrap";
import { BsPeopleFill } from "react-icons/bs";
import { BsFillGearFill } from "react-icons/bs";

export default function Navigationbar() {
  return (
    <Navbar
      style={{ backgroundColor: "#4a397d" }}
      fixed="top"
      variant="dark"
      sticky="true"
    >
      <Container>
        <NavbarBrand>
          <Image
            className="img-responsive img-fluid"
            src="https://d36m266ykvepgv.cloudfront.net/uploads/media/mMeHUGUJSG/c-250-116/img-4317-1.jpg"
            alt="Riverton Ultimate Logo"
            width={"125px"}
          />
          <h1 className="d-inline-block align-text-center" color="white">
            Frisbee Tracker
          </h1>
        </NavbarBrand>
        <div>
          <BsPeopleFill
            size={"2em"}
            color="white"
            style={{ marginRight: "2em" }}
          />
          <BsFillGearFill size={"2em"} color="white" />
        </div>
      </Container>
    </Navbar>
  );
}
