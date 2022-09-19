import React from 'react';
import s from "./Projects.module.scss"
import sContainer from "../assets/styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../common/components/title/Title";
import socialImage from "../assets/img/social.jpeg"
import todoImage from "../assets/img/todo.jpeg"
import nonameImage from "../assets/img/noname.jpg"

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const noname = {
        backgroundImage: `url(${nonameImage})`
    }

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={"My projects"}/>
                <div className={s.projects}>
                    <Project
                        style={social}
                        link={"https://github.com/Nazaruk-D"} name={"Social Network"}
                        description={"A social networking is an online platform which people use to build social networks or social relationships with other people who share similar personal or career content, interests, activities, backgrounds or real-life connections."}/>


                    <Project
                        style={todo}
                        link={"https://github.com/Nazaruk-D"} name={"Todolist"}
                        description={"Todo List is a list of things you need to do or want to do. Traditionally, they are written on a piece of paper and organized in order of priority. When a task is completed, it is usually crossed off the list."}/>


                    <Project
                        style={noname}
                        link={"https://github.com/Nazaruk-D"} name={"No Name"}
                        description={"A social networking is an online platform which people use to build social networks or social relationships with other people who share similar personal or career content, interests, activities, backgrounds or real-life connections."}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;