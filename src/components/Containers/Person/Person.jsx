import React from 'react';
import './Person.css'

const Card = (props) => {

    // take data from parants using props 
    const { img, name, age, service, skill, salary, fb, tw, li } = props.user;

    return (
        <div className='carditem'>

            {/* single user card design  */}
            <div className="single-card">
                <img src={img} alt="user-img" />
                <h2>{name}</h2>
                <p><span className="bold">Age:</span> {age}</p>
                <p><span className="bold">Profession: </span>{service}</p>
                <p><span className="bold">Skills: </span>{skill}</p>
                <p><span className="bold">Wage: </span>${salary}</p>
                <button onClick={() => props.handleCart(props.user)}>Hire me  <i className="far fa-hand-pointer"></i></button>
                <p>
                    <a href={fb}><i className="fab fa-facebook-square"></i></a>
                    <a href={li}><i className="fab fa-linkedin"></i></a>
                    <a href={tw}><i className="fab fa-twitter-square"></i></a>
                </p>
            </div>

        </div >
    );
};

export default Card;