import React from 'react'

import '../components/projectItem.css'

export const ProjectItem = ( {img, link, titulo, descripcion} ) => {
    return (
        <div className="card">
            <div className="card-head">
                <img src={img} alt={titulo}/>
                <a href={link}>Ver</a>
            </div>
            <div className="card-body">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}
