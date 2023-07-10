import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import  projImg1 from '../assets/img/proj1.png';
import  projImg2 from '../assets/img/proj2.jpg';
import  projImg3 from '../assets/img/proj3.png';
import  projImg4 from '../assets/img/proj4.png';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Music Store",
            description: "Not adaptive layout, the first project",
            imgUrl: projImg1,
        },

        {
            title: "Portfolio",
            description: "The first adaptive layout",
            imgUrl: projImg3,
        },
        {
            title: "Auto Store",
            description: "The second adaptive layout",
            imgUrl: projImg4,
        },

    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>The portfolio of a programmer-developer is an exciting journey into the world of innovation and technology. From web development projects to mobile applications, the author demonstrates a deep understanding of programming and its application to create unique and effective solutions.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                key={index}
                                                {...project} />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Nikita </Tab.Pane>
                            <Tab.Pane eventKey="third">Nikita </Tab.Pane>
                       </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
                    </section>
    );
};