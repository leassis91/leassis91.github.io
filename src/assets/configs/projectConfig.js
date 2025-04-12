import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
// import {ImBook} from "react-icons/im";
import {MdRealEstateAgent} from "react-icons/md"
import {FaTelegramPlane, FaKaggle} from "react-icons/fa";
import {SiTableau} from "react-icons/si"
import {SiGooglesheets} from "react-icons/si";

import health_insurance from "../images/health_insurance.png"
import road_safety from "../images/road_safety.png"
import rossmann from "../images/rossmann.jpg"
import hackday from "../images/hackday.png"
import housesale from "../images/housesale.jpg"
import mcars from "../images/mcars.jpg"
import tableaulk from "../images/tableaulk.png"



import React from 'react'

const projectConfig = [
    {
        id: "project-6",
        title: "Health Insurance Ranking",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/health-insurance/",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/health-insurance/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/health-insurance/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "demo",
                url: "https://github.com/leassis91/health-insurance/blob/main/image/score-sheets.gif",
                icon: <SiGooglesheets/>,
            }
        ],
        image: health_insurance,
        description: "Creation of a ranking algorithm for new customers, based on interest survey data carried out with old customers. The project was deployed via Google Sheets with Apps Script.",
        target: "_blank"
    },
    {
        id: "project-5",
        title: "Hackday 2nd Edition",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/mobilitycars/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/mobilitycars/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/mobilitycars/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "kaggle-comp",
                url: "https://www.kaggle.com/competitions/mobilitycars/overview",
                icon: <FaKaggle/>
            }
        ],
        image: mcars,
        description: "Solution for 2nd place in Hackday, a regression modeling hackathon on vehicle sale prices in Brazil, hosted by Comunidade DS.",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "LinkedIn Data Analysis",
        links: [
            {
                name: "repo",
                url: "https://public.tableau.com/app/profile/leandrodestefani/viz/LinkedInDataAnalysis_16608723114230/Dashboard1",
                icon: <SiTableau/>
            }
            // {
            //     name: "fork",
            //     url: "https://github.com/leassis91/rossmann_store/fork",
            //     icon: <BiGitRepoForked/>
            // },
            // {
            //     name: "subscription",
            //     url: "https://github.com/leassis91/rossmann_store/subscription",
            //     icon: <AiFillEye/>
            // },
            // {
            //     name: "",
            //     url: "https://t.me/rossmannleassis_bot",
            //     icon: <FaTelegramPlane/>
            // }
        ],
        image: tableaulk,
        description: "Brief analysis of my LinkedIn Profile Data, using some tools like Python (Pandas), MS Excel, Figma deployed in Tableau.",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Rossmann Store Sales",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/rossmann_store/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/rossmann_store/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/rossmann_store/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "telegram-bot",
                url: "https://t.me/rossmannleassis_bot",
                icon: <FaTelegramPlane/>
            }
        ],
        image: rossmann,
        description: "Forecast of the sales of over 3,000 stores up to 6 weeks in advance. The values can be accessed from a Telegram Bot.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Hackday Competition",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/hackday_ds/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/hackday_ds/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/hackday_ds/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "kaggle-comp",
                url: "https://www.kaggle.com/competitions/inclusao-financeira-na-africa",
                icon: <FaKaggle/>
            }
        ],
        image: hackday,
        description: "Achieved 3rd place in a live ML competition by Comunidade DS, focused on predicting bank account ownership.",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Road Safety",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/Portfolio_Projects/blob/main/Insights_Projects/Accidents/",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/Portfolio_Projects/blob/main/Insights_Projects/Accidents/",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/Portfolio_Projects/blob/main/Insights_Projects/Accidents/",
                icon: <AiFillEye/>
            }
            // {
            //     name: "docs",
            //     url: "https://pyworkforce.readthedocs.io/en/stable/",
            //     icon: <ImBook/>,
            // }
        ],
        image: road_safety,
        description: "Report based on intense data exploration, created to help UK Government to increase road safety and save lives.",
        target: "_blank"
    },
    {
        id: "project-0",
        title: "House Rocket",
        links: [
            {
                name: "repo",
                url: "https://github.com/leassis91/Portfolio_Projects/tree/main/Insights_Projects/HouseRocketEDA",
                icon: <AiFillGithub/>
            },
            {
                name: "fork",
                url: "https://github.com/leassis91/HouseRocketApp/fork",
                icon: <BiGitRepoForked/>
            },
            {
                name: "subscription",
                url: "https://github.com/leassis91/HouseRocketApp/subscription",
                icon: <AiFillEye/>
            },
            {
                name: "dashboard",
                url: "https://leassis91-houserocketapp-dashboard-bxzs7g.streamlitapp.com/",
                icon: <MdRealEstateAgent/>
            }
        ],
        image: housesale,
        description: "Identified properties priced below the average and defined optimal resale values to maximize profit in an interactive dashboard.",
        target: "_blank"
    }
]

export default projectConfig