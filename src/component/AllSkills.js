import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";

const myStyle = {
    color: "black",
    width: "50%",
    height: "50%"
}

const AllSkills = [
    {
        id: 1,
        title: "html",
        img: <FaHtml5 style={myStyle} />
    },
    {
        id: 2,
        title: "css",
        img: <IoLogoCss3 style={myStyle} />
    },
    {
        id: 3,
        title: "javascript",
        img: <SiJavascript style={myStyle} />
    },
    {
        id: 4,
        title: "react",
        img: <FaReact style={myStyle} />

    },
    {
        id: 5,
        title: "python",
        img: <FaPython style={myStyle} />
    },
    {
        id: 6,
        title: "java",
        img: <FaJava style={myStyle} />
    },
    {
        id: 7,
        title: "mySql",
        img: <SiMysql style={myStyle} />
    },
    {
        id: 8,
        title: "nodejs",
        img: <FaNodeJs style={myStyle} />
    },
    {
        id: 9,
        title: "Bootstrap",
        img: <FaBootstrap style={myStyle} />
    },
    {
        id: 10,
        title: "Azure",
        img: <SiMicrosoftazure style={myStyle} />
    }



]
export default AllSkills;