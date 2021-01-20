import React from 'react'
//import icons
import clock from '../img/clock.svg'
import diaphragm from '../img/diaphragm.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'

 const ServicesSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>high <span>quality</span> services</h2>
                <div className="cards">
                <div className="card">
                    <div className="icon">
                        <img alt="bo" src={clock}/>
                        <h3>Efficient</h3>
                    </div>
                    <p>lorem5kjvkdjvdslkvjdskjjvkl</p>
                </div>
                {/*end of card*/} 
                <div className="card">
                <div className="icon">
                    <img alt="bo" src={teamwork}/>
                    <h3>Teamwork</h3>
                </div>
                <p>lorem5kjvkdjvdslkvjdskjjvkl</p>
            </div>
            {/*end of card*/} 
            <div className="card">
            <div className="icon">
                <img alt="bo" src={diaphragm}/>
                <h3>Diaphragm</h3>
            </div>
            <p>lorem5kjvkdjvdslkvjdskjjvkl</p>
        </div>
        {/*end of card*/} 
        <div className="card">
        <div className="icon">
            <img alt="bo" src={money}/>
            <h3>Affordable</h3>
        </div>
        <p>lorem5kjvkdjvdslkvjdskjjvkl</p>
    </div>
    {/*end of card*/} 
                </div>
            </div>
            <div className="image">
                <img alt="bo" src={home2}/>
            </div>
        </div>
    )
}

export default ServicesSection
