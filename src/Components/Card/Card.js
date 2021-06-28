import React from 'react';
import './card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ item, index, handleClick,selected }) => {
    const grabElement = () => {
        const card = document.getElementById(`custom_card-${index}`)
        const icon = document.getElementById(`card_icon-${index}`)
        const title = document.getElementById(`card_title-${index}`)
        return {card,icon,title}
    }
    const handleHover = () => {
        const elements = grabElement();
        elements.card.classList.add('hovered')
        elements.icon.classList.add('hovered')
        elements.title.classList.add('hovered')
        elements.title.classList.add('underline')
    }
    const handleMouseOut = () => {
        const elements = grabElement();
        elements.card.classList.remove('hovered')
        elements.icon.classList.remove('hovered')
        elements.title.classList.remove('hovered')
        elements.title.classList.remove('underline')
    }
    return (
        <div onMouseLeave={handleMouseOut} onClick={() => handleClick(grabElement)} onMouseOver={handleHover} id={"custom_card-" + index} className='custom-card'>
            <div id={"card_icon-" + index} className="card-icon">
                <FontAwesomeIcon icon={item.icon} />
            </div>
            <h5 id={"card_title-" + index} className="card-title">
                {item.title}
            </h5>
        </div>
    );
};

export default Card;