import React, { useState, useEffect } from 'react';
import Card from './Card/Card';
import Details from './Details/Details';
import { items } from './Data';
import './Main.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Main = () => {
    const [selected, setSelected] = useState(null)
    const [indx,setIndx] = useState(null)
    const data = items

    useEffect(() => {
        if(selected === null){
            setSelected('custom_card-0')
            document.getElementById('custom_card-0').classList.add('selected', 'arrow')
        }
    }, [selected]);

    useEffect(() => {
        if(selected !== null) {
            const arr = selected.split('-')
            const index = parseInt(arr.pop())
            setIndx(index)}
    },[selected])

    const handleClick = (element) => {
        const elements = element();
        const id = elements.card.id;
        if (selected !== id && selected !== null) {
            document.getElementById(selected).classList.remove('selected', 'arrow')
        }
        setSelected(id)
        elements.card.classList.add('selected')
        elements.card.classList.add('arrow')
    }

    return (
        <div>
            <div className="mainBox">
                <li className="text-warning fw-bold text-uppercase ms-5 pt-3">how do i know which logo style is right for me?</li>
                <div className="d-flex justify-content-between text-white p-2 mx-5 my-2">
                    <h1>Different Types of Logo Styles</h1>
                    <button className="btn btn-warning fw-bold CTA">
                        Contact Us
                        <span className="bg-white rounded-circle ms-3 CTA-icon">
                            <FontAwesomeIcon  icon={faArrowRight} />
                        </span>
                    </button>
                </div>
                <div className="d-flex justify-content-center p-2">
                    {
                        data.map((item, index) => <Card key={index} index={index} handleClick={handleClick} item={item} />)
                    }
                </div>
            </div>
            {
                selected !== null ?
                    data.map((itm, index) =>
                        index === indx ?
                            <Details key={index} itm={itm}/>
                            :
                            <div></div>
                    )
                    :
                    <div></div>
            }
        </div>
    );
};

export default Main;