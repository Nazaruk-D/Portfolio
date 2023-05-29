import React from 'react';
import s from "./Projects.module.scss"
import sContainer from "../../assets/styles/Container.module.css";
import Project from "./Project/Project";
import Title from "../../common/components/title/Title";
import teslaPNG from "../../assets/png/tesla.png"
import reviewPNG from "../../assets/png/reviewManager.png"
import cardsPNG from "../../assets/png/cards.png"


const Projects = () => {

    const review = {
        backgroundImage: `url(${reviewPNG})`
    }
    const tesla = {
        backgroundImage: `url(${teslaPNG})`
    }
    const cards = {
        backgroundImage: `url(${cardsPNG})`
    }

    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title title={"My projects"}/>
                <div className={s.projects}>
                    <Project
                        style={review}
                        link={"https://review-manager-rust.vercel.app/"}
                        linkRep={"https://github.com/Nazaruk-D/Review-manager"}
                        title={"Review-manager"}
                        description={"The purpose of Review-manager is to provide users with a convenient platform for writing and organizing reviews. The app allows users to create review entries, add tags and categories to their reviews, and sort and search through their reviews based on various criteria."}/>
                    <Project
                        style={tesla}
                        link={"https://nazaruk-d.github.io/CarShop/"}
                        linkRep={"https://github.com/Nazaruk-D/CarShop"}
                        title={"Tesla"}
                        description={"This project is a replica of the website www.tesla.com. The emphasis was placed on recreating an exact copy of the website as it existed at the time of its creation. Additionally, the server side functionality was implemented, including registration capabilities."}/>
                    <Project
                        style={cards}
                        link={"https://nazaruk-d.github.io/EducationCards/"}
                        linkRep={"https://github.com/Nazaruk-D/EducationCards"}
                        title={"Cards"}
                        description={"Cards to study. The user selects a deck and starts the learning process. User can create your own decks and add cards there. User can also find a deck that interests you and study it. (Team project)"}/>
                </div>

            </div>
        </div>
    );
};

export default Projects;