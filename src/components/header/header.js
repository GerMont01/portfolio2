
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
    const location = useLocation();
    const [ currentPage, setCurrentPage ] = useState();

    useEffect(()=>{
        if (location.pathname.length < 9) {
            setCurrentPage(location.pathname)
        } else {
            setCurrentPage("/work")
        }
    },[location.pathname])

    //Add class "selected" to A element when current page is set and remove for the rest
    useEffect(()=>{
        if (currentPage) {
            let links = document.getElementsByTagName("A")

            for (let i=0;i<links.length;i++){
                links[i].classList.remove("selected")
            }
            document.getElementById(currentPage).classList.add("selected");
        }
    },[currentPage])

    return (
        <div className='header'>
            <nav>
                <Link id="/" to="/" >Home</Link>
                <Link id="/about" to="about" >About</Link>
                <Link id="/work" to="work" >Work</Link>
                <a href='mailto:gerardomontme@gmail.com'>Contact</a>
            </nav>
        </div>
    );
}
export default Header;