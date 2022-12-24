import react from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Base from '../Base.css';

/*

    AGGIEDATE HOME PAGE
    <------------------>
    Keywords:
    agd -> Aggie Date (logo)
    nt -> Normal Text (format purposes)
    maincontainer -> The main container of the page that holds the hook and instructions
    hook -> The hook of the page (the main text)
    instructions -> The instructions of the page (the subtext)
    createprofile -> The create profile div that hosts all the information to be input
    profilec -> The create profile text

*/


const Home = () => {

    const QuickStart = () => {
        // QuickStart is a function that will be called when the user clicks the "START NOW" button
        // It creates an animation that slides in the create profile div from the left
        // The create profile div is initially set to the CSS Property : left: -100%
        // Call the animation "move_from_left"

        // Get the create profile div
        const createprofile = document.getElementById("createprofile");

        // Set the animation
        createprofile.style.animation = "move_from_left 1.2s ease-in-out";

        // Set the style to visible 
        createprofile.style.visibility = "visible";
    }

    return (
        <>
            <div id="navigation_bar">
                <div className="agd" id="aggiedate">AggieDate</div>
                <div className="nt" id="login">➤ &nbsp;LOGIN</div>
                <div className="nt" id="signup">➤ &nbsp;ABOUT</div>
            </div>

            <div className="maincontainer">
                <div id="createprofile">
                    <div id="profilecontainer">
                        <div id="profilec">
                            Tell us about yourself!
                        </div>

                        <input className="profileinput" type="text" id="fname" name="fname" placeholder="First Name"></input>
                        <input className="profileinput" type="text" id="mjr" name="mjr" placeholder="Major"></input>
                        <div id="gradct">
                            <div id="gradyeartext">Graduation Year</div>
                            <select className="profileselect">
                                <option id="22">2022</option>
                                <option id="23">2023</option>
                                <option id="24">2024</option>
                                <option id="25">2025</option>
                                <option id="26">2026</option>
                                <option id="27">2027</option>
                                <option id="28">2028 or later</option>
                            </select>
                        </div>

                        <div id="gradct">
                            <div id="gradyeartext">Gender</div>
                            <select className="profileselect">
                                <option id="male">Male</option>
                                <option id="female">Female</option>
                                <option id="other">Other</option>
                            </select>
                        </div>

                        <div id="signupbutton" style={{marginTop: '25px', width: '15%'}}>
                            ➤ &nbsp;CONTINUE
                        </div>
                        

                    </div>
                    
                </div>

                <div id="instructions">
                    <div id="hooktext">
                        Meet your next date, right here, right now.
                    </div>

                    <div id="maintext">
                        Introducing AggieDate, an app built by Aggies, for Aggies.
                        <br></br><br></br>
                        AggieDate is a dating app that allows you to meet other Aggies in your area.
                        <br></br><br></br>
                        If you're tired of the traditional dating apps, then AggieDate is for you.
                        If you're an Aggie, of course.
                    </div>

                    <div id="signupbutton" onClick={QuickStart}>
                        ➤ &nbsp;START NOW
                    </div>

                </div>
            </div>
        </>
    );

};

export default Home;