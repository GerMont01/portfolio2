import { Col, Container, Row } from 'react-bootstrap';
import './work.scss';
import { useEffect, useState } from 'react';
import { projects } from '../../data/projects';
import { useNavigate } from 'react-router-dom';

const Work = () => {

    const navigate = useNavigate()
    const [ selected, setSelected ] = useState("all");
    const [ selectedProjects, setSelectedProjects ] = useState(projects)  

    useEffect(()=>{
        let list = document.getElementsByTagName("SPAN")

        for (let i=0;i<list.length;i++){
            list[i].classList.remove("work-selected")
        }
        document.getElementById(selected).classList.add("work-selected");

        switch (selected) {
            case "all":
                setSelectedProjects(projects)
                break;
            case "ui/ux":
                setSelectedProjects(projects.filter(project=>project.type.includes("ui/ux")))
                break;
            case "frontend":
                setSelectedProjects(projects.filter(project=>project.type.includes("frontend")))
                break;
            case "backend":
                setSelectedProjects(projects.filter(project=>project.type.includes("backend")))
                break;
            default: 
                setSelectedProjects(projects)
                break;
        }

    },[selected])


    return (
        <Container id='work-container'>
            <Row>
                <Col>
                    <p>
                        <span id={"all"} onClick={()=>setSelected("all")}>All</span> /
                        <span id={"ui/ux"} onClick={()=>setSelected("ui/ux")}> UI&UX</span> / 
                        <span id={"frontend"} onClick={()=>setSelected("frontend")}> Frontend</span> / 
                        <span id={"backend"} onClick={()=>setSelected("backend")}> Backend</span>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col className='projects'>
                    {selectedProjects.map((project,index)=>(
                        <div className='project' key={index}>
                            <img alt='online poker' src={project.images[0]}/>
                            <div className='content'>
                                <h2>{project.name}</h2>
                                <p>{project.tools}</p>  
                            </div>
                            <button onClick={()=>navigate(`/work/${project.name}`)}>Learn more</button>
                        </div>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}
export default Work;