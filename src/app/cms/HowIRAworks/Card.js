import React from 'react'
import Heading from './Heading'
import IRA from '../../../assets/ira.png'

const Card = ({ title, image, desc }) => {
  return (
    <section className='card'>
        <Heading title={title}/>
        <div style={{
        "margin": "20px 0",
        "display": "flex",
        "flexDirection": "row",
        "justifyContent": "space-between",
        "gap": "30px"
        }}>
            <div style={{'flex': 1}}>
                <p>Image</p>
                <img src={IRA} style={{"width": "100%"}}/>
            </div>
            <div style={{'flex': 2}}>
                <p>Description</p>
                <p style={{'border': '.5px solid gray', 'borderRadius': 
            '4px', padding: '10px', height: '226px', overflowY: 'scroll', overflowX: 
            'hidden'}}>
                    {desc}
                </p>
            </div>
        </div>
    </section>
  )
}

export default Card