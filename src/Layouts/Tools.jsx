import React, { Component } from 'react';
import '../Layouts/LayoutStyles/Tools.css'
import { Spring,useTransition,animated } from 'react-spring/renderprops';
import { CircularProgressbar, CircularProgressbarWithChildren,buildStyles} from "react-circular-progressbar";


class Tools extends Component {
    state = { 
        circle: [
            {
                id: 1,
                Name: "UWP",
                value: 95,
                color: "#7dcb23"
            },
            {
                id: 2,
                Name: "Uno",
                value: 90,
                color: "#f45976"
            },
            {
                id: 3,
                Name: ".NET",
                value: 85,
                color: "#5c2992"
            },
            {
                id: 4,
                Name: "Android",
                value: 85,
                color: "#7cb342"
            },
            {
                id: 5,
                Name: "IOS",
                value: 50,
                color: "#a1acb2"
            },            {
                id: 6,
                Name: "Xamarin",
                value: 70,
                color: "#039be5"
            },
            {
                id: 7,
                Name: "ReactJS",
                value: 50,
                color: "#5ed4f4"
            },
            {
                id: 8,
                Name: "Unity",
                value: 40,
                color: "#212121"
            },
            {
                id: 9,
                Name: "Arduino",
                value: 30,
                color: "#109ea9"
            },
            {
                id: 10,
                Name: "NodeJS",
                value: 70,
                color: "#8bc34a"
            },
            {
                id: 11,
                Name: "Azure",
                value: 80,
                color: "#0666dd"
            },
            {
                id: 12,
                Name: "GitHub",
                value: 80,
                color: "#212121"
            },
        ]
     }
    render() {
        return ( 
        <div className="Tool">
            {this.state.circle.map((circle) => (
                <Spring
                    from={{ number: 0 , opacity: 0}}
                    to={{ number: circle.value, opacity: 1}}
                    config={{delay:2500}}>
                    {props => (
                        <div className="Circlecard">
                            <div style={{ width: "300px" }}>
                                <CircularProgressbar value = {props.number} 
                                                    text= {circle.Name} 
                                                    styles={buildStyles({
                                                        textColor: circle.color,
                                                        pathColor: circle.color,
                                                    })}
                                                    strokeWidth = {4} />
                                <h5>Universal Windows Platform</h5>
                            </div>
                        </div>
                    )}
                </Spring>
                ))}
        </div> 
        );
    }
}
 
export default Tools;