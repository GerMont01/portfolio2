import { cv } from '../../../data/cv';
import './experience.scss';

const Experience = () => {
    return (
        <div className='timelineElements'>
            {cv.map(element => (
                <div key={element.title} className='experience'>
                    <img alt={element.title} src={element.image}/>
                    <div>
                        <h3>{element.title}</h3>
                        <h4>{element.company}</h4>
                        <h5>{element.date}</h5>
                        <h5>{element.location}</h5>
                        {element.description ? <p>{element.description}</p> : null}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Experience;