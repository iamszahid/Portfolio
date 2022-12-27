import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/p1.png";
import projImg5 from "../assets/img/p2.png";
import projImg6 from "../assets/img/p3.png";
import projImg7 from "../assets/img/p4.png";
import projImg8 from "../assets/img/p5.png";
import projImg9 from "../assets/img/p6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Chat app",
      description: "Using Node.js and Socket.io",
      imgUrl: projImg1,
    },
    {
      title: "Random Quote Generator",
      description: "Using JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Weather app",
      description: "Using Node.js and weather api",
      imgUrl: projImg3,
    },
  ];
  const projects2 = [
    {
      title: "Leetcode",
      description: "Solved nearly 500 problems",
      imgUrl: projImg4,
    },
    {
      title: "Hackerrank",
      description: "5 star in C++ and Problem Solving",
      imgUrl: projImg5,
    },
    {
      title: "Codechef",
      description: "Participated more than 30 contests and 3 star",
      imgUrl: projImg6,
    },
  ];
  const projects3 = [
    {
      title: "NSS",
      description: "Collected and recycled garbage near our collage lake",
      imgUrl: projImg7,
    },
    {
      title: "NSS",
      description: "Planted 100s of plants in a government school",
      imgUrl: projImg8,
    },
    {
      title: "Swimming Federation of India",
      description: "District level Swimmer",
      imgUrl: projImg9,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    To showcase my skills I have done few projects check them
                    out.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web Dev</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Profiles</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Extra Curricular</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                      <p>
                        Building web applications is always fun these are my favorite web apps developed by me.
                        </p>
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Solving problems using C++ is one of my favorite thing to do these are my coding profiles.
                        </p>
                        <Row>
                          {projects2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          I have been a part of NSS group in my B.tech where we tried do something good for the society.
                        </p>
                        <Row>
                          {projects3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
