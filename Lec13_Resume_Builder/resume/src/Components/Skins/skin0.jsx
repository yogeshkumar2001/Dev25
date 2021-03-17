
import React, { Component } from "react";
import "./skin0.css";
class Skin extends Component {
    state = {
        contactDetails: {
            fname: "The ",
            lname: "Professor",
            summary: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam reprehenderit voluptas rerum blanditiis quas quia nihil veritatis et sapiente, doloremque est sed aut laudantium consequuntur veniam animi. Error, repellat eveniet!",
            email: "Professor@gmail.com",
            phone: "987654321",
            profession: "MaterMind of heist",
            street: "",
            city: "Barcelona",
            state: "Madrid",
            country: "Spain",
            pin: "110059",
        },
        educationDetails: {
            collegeName: "Spain University",
            degree: "Btech",
            cgpa: "10cgpa",
            collegeCity: "spain",
            collegeState: "Madrid",
            graduationMonth: "Jan",
            graduationYear: "2023",
        },
        experienceDetails: [
            { companyName: "Wipro", duration: "6 months", position: "software Developer" },
            { companyName: "HCL", duration: "10Months", position: "web developer" },
            { companyName: "Google", duration: "1 year", position: "android developer" },
        ],
        projects: [
            { projectName: "Intsgram", techStack: ["React", "vue", "express"], summary: "summary", projectLink: "www.com" },
            { projectName: "Ecel clone", techStack: ["React ", "Vue", "express"], summary: "Nothing", projectLink: "excel.com" },
            { projectName: "REsume Builder", techStack: ["React", "vue", "express"], summary: "Resume summary", projectLink: "REsume.com" },
            { projectName: "Food App", techStack: ["React", "vue", "express"], summary: "Food summary", projectLink: "food.com" }
        ],
        skills: {
            language: ["English", "Hindi", "German"],
            frameworks: ["React", "vue", "express"],
            software: ["Vs code", "MS Office", "Andriod Studio"],
            ide: ["React", "vue", "express"]
        },
        profileLinks: {
            linkedIn: "www.yogeshlinkedin.com",
            github: "www.github.com"
        },
        achievements: ["React", "vue", "express"],
        hobbies: ["Footable", "reading books", "Cricket", "games",]
    };
    render() {
        let {
            fname,
            lname,
            summary,
            email,
            phone,
            profession,
            street,
            city,
            state,
            country,
            pin,
        } = this.state.contactDetails;
        let {
            collegeName,
            degree,
            cgpa,
            collegeCity,
            collegeState,
            graduationMonth,
            graduationYear,
        } = this.state.educationDetails;
        let experienceDetails = this.state.experienceDetails;
        let projects = this.state.projects;
        let {
            language,
            frameworks,
            software,
            ide
        } = this.state.skills;
        let { linkedIn, github } = this.state.profileLinks;
        return (
            <div className="resume-skin">
                {/* <div className="left-resume">
                    <div className="vl"></div>
                </div> */}
                <div className="resume-right">

                    <div className="resume-header">
                        <h1>{fname}</h1>
                        <h1>{lname}</h1>
                    </div>
                    <div className="resume-content">

                        <div className="resume-summary">
                            <div className="resume-summary-icon">
                                <img className="img " src="./images/summary2.png" alt="" />
                            </div>
                            <h2>Resume Summary</h2>
                        </div>
                        <div className="summary">
                            <p>{summary}</p>
                        </div>


                        <div className="resume-experience">
                            <div className="resume-summary-icon">
                                <img className="img " src="./images/experince.png" alt="" />
                            </div>
                            <h2>Experience</h2>
                        </div>
                        <div className="experience">
                            {experienceDetails.map(obj => {
                                return <ul>
                                    <li >{obj.companyName}</li>
                                    <li>{obj.duration}</li>
                                    <li>{obj.position}</li>
                                </ul>
                            })}
                        </div>


                    </div>

                    <div className="resume-achievements">
                        <div className="resume-summary-icon">
                            <img className="img " src="./images/achievements.png" alt="" />
                        </div>
                        <h2>Achievements</h2>
                    </div>
                    <div className="achievements">
                        <ul>
                            <li >{this.state.achievements}</li>
                        </ul>
                    </div>
                    <div className="resume-personal-info">
                        <div className="resume-summary-icon">
                            <img className="img " src="./images/p.jpg" alt="" />
                        </div>
                        <h2>Projects</h2>
                    </div>
                    <div className="personal-info-content-projects">
                        <div className="project-content">
                            {projects.map(obj => {
                                return <div className="project">
                                    <h4>Project Name-</h4>
                                    <ul>
                                        <li>{obj.projectName}</li>
                                    </ul>
                                    <h4>Tech Stack-</h4>
                                    <ul>
                                        <li>{obj.techStack}</li>
                                    </ul>
                                    <h4>Project Summary-</h4>
                                    <ul>
                                        <li>{obj.summary}</li>
                                    </ul>
                                    <h4>Project Links-</h4>
                                    <ul>
                                        <li>{obj.projectLink}</li>
                                    </ul>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="resume-personal-info">
                        <div className="resume-personal-info-icon">
                        <img className="img " src="./images/hobby1.png" alt="" />
                        </div>
                        <h2>Hobbies</h2>
                    </div>
                    <div className="hobbies">
                        {this.state.hobbies}
                    </div>

                </div>
                <div className="resume-left">
                    <div className="resume-personal-info">
                        <div className="resume-personal-info-icon">
                            <img className="img " src="./images/person-male.png" alt="" />
                        </div>
                        <h2>Personal Info</h2>
                    </div>
                    <div className="personal-info-content">
                        <h4>Email</h4>
                        <p>{email}</p>
                        <h4>Phone no.</h4>
                        <p>{phone}</p>
                        <h4>Profession</h4>
                        <p>{profession}</p>
                    </div>

                    <div className="resume-personal-info">
                        <div className="resume-personal-info-icon">
                            <img className="img " src="./images/skill-icon.jpg" alt="" />
                        </div>
                        <h2>Skills</h2>
                    </div>
                    <div className="personal-info-content">
                        <h4>Language</h4>
                        <div className="personal-info-content-para">
                            <p>{language}</p>
                        </div>
                        <h4>Frameworks</h4>
                        <div className="personal-info-content-para">
                            <p>{frameworks}</p>
                        </div>
                        <h4>Software</h4>
                        <div className="personal-info-content-para">
                            <p>{software}</p>
                        </div>
                    </div>

                    <div className="resume-personal-info">
                        <div className="resume-personal-info-icon">
                            <img className="img " src="./images/education.png" alt="" />
                        </div>
                        <h2>Education</h2>
                    </div>
                    <div className="personal-info-content">
                        <div className="education">
                            <div className="college-details">
                                <strong>College Name</strong>  : {collegeName}
                            </div><div className="college-details">
                                <strong>Degree</strong>  {degree}
                            </div><div className="college-details">
                                <strong>Cpga</strong> : {cgpa}
                            </div><div className="college-details">
                                <strong>College City</strong> : {collegeCity}
                            </div><div className="college-details">
                                <strong>College State</strong> : {collegeCity}
                            </div>
                        </div>
                    </div>

                    <div className="resume-personal-info">
                        <div className="resume-personal-info-icon">
                            <img className="img " src="./images/links.png" alt="" />
                        </div>
                        <h2>profile Links</h2>
                    </div>
                    <div className="profile links">
                        <div className="college-details">
                            <strong>LinkedIN</strong>  : {linkedIn}
                        </div>
                        <div className="college-details">
                            <strong>Github</strong>  {github}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default Skin;