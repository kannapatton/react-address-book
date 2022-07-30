import React, { useState} from 'react';
import './InfoCard.css';

function InfoCard(props) {
const [isHidden, setIsHidden] = useState(true);
const { name, picture, email, phone, cell } = props; 

return(
    <div>
        <ul>
            
            <img src={picture.thumbnail} alt=""></img>
            <h2>{name.first} {name.last}</h2>
            <p onClick={() => setIsHidden(!isHidden)}>
                {isHidden? "Info" : 
                `Email: ${email}
                Phone: ${phone}
                Cell: ${cell}`}
            </p>
            
        </ul>
    </div>
)}
export default InfoCard;