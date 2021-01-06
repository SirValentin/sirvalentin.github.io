import React from 'react'

import {projects} from '../data/projects'
import {ProjectItem} from '../components/ProjectItem';

import '../components/projectGrid.css'

export const ProjectGrid = () => {

    return (
        <div className="grid">                    
            {
                projects.map( project => 
                    <ProjectItem 
                        key={project.id}
                        {...project}/>
                )
            }
        </div>
    )
}
