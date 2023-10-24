
// import { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './project.scss';
import { projects } from '../../data/projects';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

const Project = () => {

    const { name } = useParams();

    const project = projects.find(project => project.name === name)
    let role = project.role.split(" ");
    const myrole = `<span>${role.shift()} ${role.shift()}</span> ${role.join(" ")}`


    return (
        <Container id='projectContainer'>
            <Row>
                <Col id="col1" xs={12} md={4}>
                    <div className='nameandtools'>
                        <h1>{project.name}</h1>
                        <p>{project.tools}</p>
                    </div>
                    <p>{project.description}</p>
                    <p>{parse(myrole)}</p>
                    <div className='projectlinks'>
                        {project.github.length > 0 ? (
                            <a href={project.github} target="_blank" rel="noreferrer">Github Repository</a>
                        ) : (null)}
                        {project.demo.length > 0 ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">Visit Website</a>
                        ) : (null)}
                    </div>
                </Col>
                <Col id="col2" xs={12} md={8}>
                    <Carousel id="imagescarousel">
                    {project.images.map((image,index) => (
                        <Carousel.Item key={index} interval={2000}>
                            <img alt={project.name} src={image} />
                        </Carousel.Item>
                    ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
export default Project;