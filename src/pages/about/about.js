import { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Experience from './experience/experience';
import './about.scss';
import { SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs, SiExpress, SiSass, SiMongodb, SiTypescript, SiC, SiArduino, SiRedux } from 'react-icons/si';
import { FaGitAlt, FaAws } from 'react-icons/fa';
import { MdVideogameAsset, MdOutlineAirplanemodeActive, MdFitnessCenter } from 'react-icons/md';
import verilog from '../../images/verilog.svg';

const About = () => {

    const [ windowHeight, setWindowHeight ] = useState(window.innerHeight);

    useEffect(()=>{
        
    },[])

    useEffect(()=>{
        const elements = document.getElementsByClassName('experience');
        let skills =[
            ...document.getElementsByClassName('iconscontainer'),
            ...document.getElementsByClassName('embedded'),
            ...document.getElementsByClassName('interests'),
            ...document.getElementsByClassName('aboutimg'),
            ...document.getElementsByTagName('h1')
        ];
        window.onresize = () => {
            setWindowHeight(window.innerHeight);
            console.log(window.innerHeight)
        }
        if (elements) checkPosition(elements);
        if (skills) checkPosition2(skills);
        window.onscroll = () => {
            if (elements) checkPosition(elements);
            if (skills) checkPosition2(skills);
        }
    },[windowHeight])

    const checkPosition = (elements) => {
        for (let element of elements) {
            let positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight/2 <= 5 && positionFromTop - windowHeight/2 > -200) {
                element.classList.add('showexperience');
            } else {
                element.classList.remove('showexperience');
            }
        }
    }
    const checkPosition2 = (elements) => {
        for (let element of elements) {
            let positionFromTop = element.getBoundingClientRect().top;
            if (positionFromTop - windowHeight <= 0) {
                element.classList.add('fadein');
            } else {
                element.classList.remove('fadein');
            }
        }
    }


    return (
        <Container id='aboutContainer'>
            <Row id='aboutRow'>
                <Col className='skillsCol' xs={12} md={3}>
                    <div className='skills'>
                        <h1>Web</h1>
                        <div className='iconscontainer'>
                            <div className='skill'><SiHtml5 className='skillicon'/><p>HTML/HTML5</p></div>
                            <div className='skill'><SiCss3 className='skillicon'/><p>CSS/CSS3</p></div>
                            <div className='skill'><SiSass className='skillicon'/><p>SASS</p></div>
                            <div className='skill'><SiJavascript className='skillicon'/><p>Javascript</p></div>
                            <div className='skill'><SiTypescript className='skillicon' /><p>Typescript</p></div>
                            <div className='skill'><SiReact className='skillicon'/><p>React JS</p></div>
                            <div className='skill'><SiRedux className='skillicon'/><p>Redux</p></div>
                            <div className='skill'><SiNodedotjs className='skillicon'/><p>Node JS</p></div>
                            <div className='skill'><SiExpress className='skillicon'/><p>Express JS</p></div>
                            <div className='skill'><SiMongodb className='skillicon'/><p>MongoDB</p></div> 
                            <div className='skill'><FaGitAlt className='skillicon'/><p>Git</p></div>
                            <div className='skill'><FaAws className='skillicon'/><p>Aws</p></div>
                        </div>
                        <hr/>
                        <h1>Embedded systems</h1>
                        <ul className='embedded'>
                            <li><SiC className='embeddedicon embeddedicon1' /> Microcontrollers with C</li>
                            <li><img className='embeddedicon' src={require('../../images/capacitor.png')} />PLCs with ladder language</li>
                            <li><img className='embeddedicon' src={verilog} /> FPGAs with Verilog</li>
                            <li><SiArduino className='embeddedicon'/>Arduino</li>
                        </ul>
                        <hr/>
                        <h1>Other Interests</h1>
                        <ul className='interests'>
                            <li><MdVideogameAsset className='interesticon'/> Video Games</li>
                            <li><MdOutlineAirplanemodeActive className='interesticon'/> Travel</li>
                            <li><MdFitnessCenter className='interesticon'/> Fitness</li>
                        </ul>
                        <hr/>
                        <img className='aboutimg' alt='about1' src={require('../../images/about1.jpg')} />
                        <img className='aboutimg' alt='about2' src={require('../../images/about2.jpg')} />
                    </div>
                </Col>
                <Col xs={1} md={1}>
                    <div className='sliders'>
                        <div className='slider1'></div>
                        <div className='slider2'></div> 
                    </div>
                </Col>
                <Col className='timelineCol' xs={11} md={8}>
                    <h1>My Timeline</h1>
                    <Experience />
                </Col>
            </Row>
        </Container>
    );
}
export default About;