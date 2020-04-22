import React, { Component, useState } from 'react';
import NeumorphismButtonComponent from '../Components/NeumorphismButtonComponent';
import '../Layouts/LayoutStyles/WelComePage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fab,faFacebookSquare,faTwitterSquare,faGithubSquare,faDribbble, faTwitter, faGithub, faDribbbleSquare} from "@fortawesome/free-brands-svg-icons";
import Modal from 'react-modal';
import { CircularProgressbar, CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { Line, Circle } from 'rc-progress';
import Typical from 'react-typical';



class WelcomePage extends Component {
    state = {show: false};
    showModal = () => {
        this.setState({ show: true });
      };
    closeModal = () => {
        this.setState({ show: false });
      };
    render() {
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)',
              background            : '#0a012c',
            },overlay: {zIndex: 1000}
          };
        return ( 
            <div id="WelcomeSection">
                <div id="WelComeButton">
                    {/* <NeumorphismButtonComponent Click = {this.showModal} Buttoncontent = "WelCome, Strypper ?"/> */}
                    <a className="ModalButton" onClick = {this.showModal}>Welcome, is this Strypper ? 🤖</a>
                    <div id="SocialContact">
                        {/* <NeumorphismButtonComponent Link = "https://www.facebook.com/StrypperJasonOCG" Buttoncontent = {<FontAwesomeIcon icon={faFacebookSquare} />}/>
                        <NeumorphismButtonComponent Link = "https://twitter.com/Strypper2" Buttoncontent = {<FontAwesomeIcon icon={faTwitterSquare} />}/>
                        <NeumorphismButtonComponent Link = "https://github.com/" Buttoncontent = {<FontAwesomeIcon icon={faGithubSquare} />}/> */}
                        <button style={{backgroundColor: '#036ae3'}} className="SocialButton"><FontAwesomeIcon icon={faFacebookSquare} /></button>
                        <button style={{backgroundColor: '#1da1f2'}} className="SocialButton"><FontAwesomeIcon icon={faTwitter} /></button>
                        <button style={{backgroundColor: '#ffffff'}} className="SocialButton"><FontAwesomeIcon icon={faGithub} /></button>
                        <button style={{backgroundColor: '#ff2f49'}} className="SocialButton"><FontAwesomeIcon icon={faDribbble} /></button>
                    </div>
                    <p id="Intro">
                        <Typical steps={['Research', 1000, 'Research Reputation and Beyond', 500]}
                                 loop={Infinity} wrapper="p"/>
                    </p>
                    <Line percent="80" strokeWidth="1" strokeColor="#ffa530" />
                    <Modal id="PopUp" closeTimeoutMS={500} isOpen={this.state.show} style={customStyles}>
                        <div id="ModalLayout">
                            <div>
                            <h1>PROVE THAT YOU ARE STRYPPER 😂</h1>
                            <input id="PasswordInput" type="password" placeholder="GIMME THE SECRET CODE"></input>
                            <div className="Wrapper">
                                {/* <NeumorphismButtonComponent Click = {this.closeModal} Buttoncontent = "YES, IT'S ME 😎"/> */}   
                                <a className="ModalButton">YES, IT'S ME 😎</a>
                            </div>
                            <div className="Wrapper">
                                {/* <NeumorphismButtonComponent Click = {this.closeModal} Buttoncontent = "NO, I'M NOT STRYPPER 🤓"/> */}
                                <a className="ModalButton" onClick = {this.closeModal}>NO, I'M NOT STRYPPER 🤓</a>
                            </div>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
         );
    }
}
 
export default WelcomePage;