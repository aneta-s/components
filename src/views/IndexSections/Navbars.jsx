import React from "react";
// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";

class Navbars extends React.Component {
  render() {
    return (
      <div className="section section-navbars">
        <img alt="..." className="path" src={require("assets/img/path3.png")} />
        <Container id="menu-dropdown">
          <Row>
            <Col md="6">
              <h4>Menu</h4>
              <Navbar className="bg-primary" expand="lg">
                <Container>
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Menu
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar"
                    data-toggle="collapse"
                    id="example-navbar"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                  <UncontrolledCollapse
                    id="example-navbar"
                    navbar
                    toggler="#example-navbar"
                  >
                    <Nav navbar>
                      <NavItem className="active">
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <p>Link</p>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <p>Link</p>
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav>
                        <DropdownToggle
                          aria-expanded={false}
                          aria-haspopup={true}
                          caret
                          color="default"
                          data-toggle="dropdown"
                          href="http://example.com"
                          id="navbarDropdownMenuLink"
                          nav
                        >
                          <p>Dropdown</p>
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="navbarDropdownMenuLink">
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
            </Col>
            <Col md="6">
              <h4>Menu with Icons</h4>
              <Navbar className="bg-info" expand="lg">
                <Container>
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Icons
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-icons"
                    data-toggle="collapse"
                    id="example-navbar-icons"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                  <UncontrolledCollapse
                    id="example-navbar-icons"
                    navbar
                    toggler="#example-navbar-icons"
                  >
                    <Nav className="ml-auto" navbar>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="tim-icons icon-send"
                          />
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="tim-icons icon-single-02"
                          />
                        </NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav>
                        <DropdownToggle
                          caret
                          color="default"
                          data-toggle="dropdown"
                          href="#pablo"
                          id="navbarDropdownMenuLink"
                          nav
                          onClick={e => e.preventDefault()}
                        >
                          <i
                            aria-hidden={true}
                            className="tim-icons icon-settings-gear-63"
                          />
                        </DropdownToggle>
                        <DropdownMenu
                          aria-labelledby="navbarDropdownMenuLink"
                          right
                        >
                          <DropdownItem header>Dropdown header</DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Another action
                          </DropdownItem>
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Something else here
                          </DropdownItem>
                          <div className="divider" />
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Separated link
                          </DropdownItem>
                          <div className="divider" />
                          <DropdownItem
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            One more separated link
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
          <h3 className="title mb-3">Navigation</h3>
        </Container>
        <div id="navbar">
          <div className="navigation-example">
            {/* Navbar Primary */}
            <Navbar className="bg-primary" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Primary color
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-primary"
                    data-toggle="collapse"
                    id="example-navbar-primary"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <UncontrolledCollapse
                  id="example-navbar-primary"
                  navbar
                  toggler="#example-navbar-primary"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem className="active">
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="tim-icons icon-world" />
                        Discover
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="tim-icons icon-single-02" />
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="tim-icons icon-settings-gear-63" />
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* End Navbar Primary */}
            {/* Navbar Info */}
            <Navbar className="bg-info" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Info Color
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-info"
                    data-toggle="collapse"
                    id="example-navbar-info"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <UncontrolledCollapse
                  id="example-navbar-info"
                  navbar
                  toggler="#example-navbar-info"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem className="active">
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Discover
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        Settings
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* End Navbar Info */}
            {/* Navbar Success */}
            <Navbar className="bg-success" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Success Color
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-success"
                    data-toggle="collapse"
                    id="example-navbar-success"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <UncontrolledCollapse
                  id="example-navbar-success"
                  navbar
                  toggler="#example-navbar-success"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem className="active">
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="tim-icons icon-world" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="tim-icons icon-single-02" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="tim-icons icon-settings-gear-63" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* End Navbar Success */}
            {/* Navbar Warning */}
            <Navbar className="bg-warning" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Warning Color
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-warning"
                    data-toggle="collapse"
                    id="example-navbar-warning"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <UncontrolledCollapse
                  id="example-navbar-warning"
                  navbar
                  toggler="#example-navbar-warning"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-facebook-square" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-twitter" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-google-plus" />
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-instagram" />
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* End Navbar Warning */}
            {/* Navbar Danger */}
            <Navbar className="bg-danger" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Danger Color
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-danger"
                    data-toggle="collapse"
                    id="example-navbar-danger"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <UncontrolledCollapse
                  id="example-navbar-danger"
                  navbar
                  toggler="#example-navbar-danger"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-facebook-square" />
                        Share
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-twitter" />
                        Tweet
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-pinterest" />
                        Pin
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* End Navbar Danger */}
            {/* Navbar Transparent */}
            <Navbar className="navbar-transparent" expand="lg">
              <Container>
                <div className="navbar-translate">
                  <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
                    Transparent
                  </NavbarBrand>
                  <button
                    aria-controls="navbarSupportedContent"
                    aria-expanded={false}
                    aria-label="Toggle navigation"
                    className="navbar-toggler"
                    data-target="#example-navbar-transparent"
                    data-toggle="collapse"
                    id="example-navbar-transparent"
                    type="button"
                  >
                    <span className="navbar-toggler-bar bar1" />
                    <span className="navbar-toggler-bar bar2" />
                    <span className="navbar-toggler-bar bar3" />
                  </button>
                </div>
                <UncontrolledCollapse
                  id="example-navbar-transparent"
                  navbar
                  toggler="#example-navbar-transparent"
                >
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-facebook-square" />
                        Facebook
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-twitter" />
                        Twitter
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                        <i className="fab fa-instagram" />
                        Instagram
                      </NavLink>
                    </NavItem>
                  </Nav>
                </UncontrolledCollapse>
              </Container>
            </Navbar>
            {/* End Navbar Transparent*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbars;
