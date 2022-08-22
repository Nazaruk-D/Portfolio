import React from 'react';
import s from "./Projects.module.css"
import sContainer from "../common/styles/Container.module.css";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>My Projects</h2>
                <div className={s.projects}>
                    <Project photo={"https://remarklee.ru/wp-content/uploads/2021/03/bez-imeni-1.jpg"} alt={"123"}  link={"https://github.com/Nazaruk-D"} name={"Social Network"} description={"Short description"}/>
                    <Project photo={"https://remarklee.ru/wp-content/uploads/2021/03/bez-imeni-1.jpg"} alt={"345"}  link={"https://github.com/Nazaruk-D"} name={"Todolist"} description={"Short description"}/>
                    <Project photo={"https://remarklee.ru/wp-content/uploads/2021/03/bez-imeni-1.jpg"} alt={"567"}  link={"https://github.com/Nazaruk-D"} name={"Counter"} description={"Short description"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;