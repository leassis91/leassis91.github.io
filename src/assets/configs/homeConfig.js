import React from 'react'
// import {BsClipboardData} from "react-icons/bs";
// import {DiCodeigniter} from "react-icons/di";
// import {GiCommercialAirplane} from "react-icons/gi";
// import {FaHouseDamage} from "react-icons/fa";
import {GiMaterialsScience} from "react-icons/gi";
import {GiOilPump} from "react-icons/gi";
import {GiSoccerField} from "react-icons/gi"
import {MdOutlineAnalytics} from "react-icons/md"
import {BsBank} from "react-icons/bs"
// import {MdLocalMall} from "react-icons/md";
import {MdOutlineShoppingBag} from "react-icons/md";


const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Leandro Destefani!</strong>
        </h1>,
    titles: [
        "Data Scientist",
        "Data Analyst",
        "Machine Learning Engineer",
        "Data Governance Analyst",
        "Brazilian"
    ],
    about: {
        start: `I am a data driven professional with critical thinking and problem-solving skills, experienced in translating complex tasks into simple business solutions 
        using data science concepts and engineering tools. `,
        exit: `
        Fluent at Python, SQL, with a strong background in data analysis, machine learning and data visualization tools.`

        // I'm always excited by learning new things, contributing to the data science community, sharing knowledge and spreading the word of data.
        // A chemical engineer passionate about data. I'm a Data-driven thinker, seeking to leverage all sorts of machine learning models to 
        // build greater business strategies and customer products. Always excited by learning new things, contributing to the data science community 
        // and spreading the word of data!`,

        // exit: "I work with most various tools, like Python, SQL, Tableau and Machine Learning, " +
        //     "with a deep interest in Deep Learning, Computer Vision and all sorts of AI application."
    },
    workTimeline: [
        {
            id: "work-6",
            title: "Sr Data Governance Analyst",
            company: "ALLOS",
            description: "Optimizing data management processes and data quality pipelines of metadata, helping consolidation of MDM solutions.", // +
                // "Main .",
            date: "2025-present",
            icon: <MdOutlineShoppingBag/>,
            tags: ["databricks", "llm", "ai-ethics", "data-governance"]
        },        {
            id: "work-5",
            title: "Data Analyst",
            company: "TAG-IMF",
            description: "Conducted modeling of credit card financial data for MVP definitions, working through huge databases, building ETLs, data lakes and machine learning models.", // +
                // "Main .",
            date: "2023-2025",
            icon: <BsBank/>,
            tags: ["sql", "gcp", "azure", "python", "looker", "dataproc", "git"]
        },
        {
            id: "work-4",
            title: "Data Scientist",
            company: "Comunidade DS",
            description: "Practicing all kind of Data Science related stuff, always focusing on developing end-to-end data science projects.", // +
                // "Main .",
            date: "2022-2023",
            icon: <GiMaterialsScience/>,
            tags: ["python", "ml", "networking", "docker", "git", "github", "heroku"]
        },
        // {
        //     id: "work-3",
        //     title: "Backoffice Analyst",
        //     company: "Invest Prime",
        //     description: "Assistance to the sales team performing health and life plans' implementation support; " +
        //         "Performed market research and presented many benefits for clients.",
        //     date: "2020-2021",
        //     icon: <FaHouseDamage/>,
        //     tags: ["kanban", "scrum", "excel", "health-care", "real estate", "trello", "bitrix"]
        // },
        {
            id: "work-2",
            title: "Lead Performance Analyst",
            company: "Ortec Sports",
            description: "Analysis of soccer players’ performance through an optimized software developed by Ortec. ", // +
                // "including the construction of ETLs, data lakes, data warehouses, and machine learning models.",
            date: "2017-2019",
            icon: <GiSoccerField/>,
            // icon: <FaMobileAlt/>,
            tags: ["soccer", "performance", "stats", "player", "football", "logistic", "software"]
        },
        {
            id: "work-1",
            title: "Freelance Business Analyst",
            company: "McKinsey & Company",
            description: "Contributed to create profiles from a research for a statistical analysis. " +
                "Assisted with data catalog.",
            date: "2016-2017",
            icon: <MdOutlineAnalytics/>,
            tags: ["excel", "pbi", "powerpoint"]
        },
        {
            id: "work-0",
            title: "Business Intelligence Intern",
            company: "Gas Energy",
            description: "Analyzed data of natural gas, oil and its derivatives. " +
                "Prospected the use of “Supply and Demand” balance concepts for natural gas in Brazil and Latin America.",
            date: "2014",
            icon: <GiOilPump/>,
            tags: ["excel", "powerpoint", "word", "storytelling"]
        }
    ]
}


export default homeConfig