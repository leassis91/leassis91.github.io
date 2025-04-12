import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {FaKaggle} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/leassis91",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "https://linkedin.com/in/leandrodestefani",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        },
        {
            id: "footer-3",
            url: "https://kaggle.com/leandrodestefani",
            className: "social-icon",
            target: "_blank",
            icon: <FaKaggle size={50}/>
        },
        {
            id: "footer-2",
            url: "https://medium.com/@leandrodestefani",
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50}/>
        }
    ]
}

export default footerConfig
