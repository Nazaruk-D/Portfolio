import React from 'react';
import s from "./Projects.module.scss"
import sContainer from "../../assets/styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../../common/components/title/Title";
import socialImage from "../../assets/png/socialNetwork.png"
import todoImage from "../../assets/png/todolist.png"
import nonameImage from "../../assets/png/cards.png"


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
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={"My projects"}/>
                <div className={s.projects}>
                    <Project
                        style={social}
                        link={"https://nazaruk-d.github.io/Samurai-way/#/"}
                        linkRep={"https://github.com/Nazaruk-D/Samurai-way"}
                        title={"Social Network"}
                        description={"A social networking is an online platform which people use to build social networks or social relationships with other people who share similar personal or career content, interests, activities, backgrounds or real-life connections."}/>
                    <Project
                        style={todo}
                        link={"https://nazaruk-d.github.io/ToDoList/"}
                        linkRep={"https://github.com/Nazaruk-D/ToDoList"}
                        title={"Todolist"}
                        description={"Todo List is a list of things you need to do or want to do. Traditionally, they are written on a piece of paper and organized in order of priority. When a task is completed, it is usually crossed off the list."}/>
                    <Project
                        style={noname}
                        link={"https://nazaruk-d.github.io/FridayProject/"}
                        linkRep={"https://github.com/Nazaruk-D/FridayProject"}
                        title={"Cards"}
                        description={"Cards to study. The user selects a deck and starts the learning process. User can create your own decks and add cards there. User can also find a deck that interests you and study it. (Team project)"}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;