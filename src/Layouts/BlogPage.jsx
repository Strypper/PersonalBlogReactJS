import React, { Component } from 'react';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import BlogDetail from '../Layouts/BlogDetail';
import '../Layouts/LayoutStyles/BlogPage.css'
import NeumorphismButtonComponent from '../Components/NeumorphismButtonComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Line, Circle } from 'rc-progress';
import { Spring,useTransition,animated } from 'react-spring/renderprops';
import {fab,faGithubSquare,faReadme} from "@fortawesome/free-brands-svg-icons";
import Android from '../Assets/Android.png'
import Xamarin from '../Assets/Xamarin.png'
import UWP from '../Assets/UWP.png'
import DotNet from '../Assets/DotNet.png'
import ReactJS from '../Assets/ReactJS.png'
import AndroidCover from '../Assets/CoverImage/AndroidCover.png'
import XamarinCover from '../Assets/CoverImage/XamarinCover.png'
import UWPCover from '../Assets/CoverImage/UWPCover.png'
import dotNETCover from '../Assets/CoverImage/dotNETCover.png'
import ReactJSCover from '../Assets/CoverImage/BlogCover.png'


class BlogPage extends Component {
    state = {
        requests: [
            {
                id: 1,
                Logo: Android,
                Name: 'Android',
                CoverImageUrl: AndroidCover,
                Title: "Develop Native Android App",
                Summary: 'This is a summary',
                BackgroundColor: "#b8e994",
                LogoColor: '#94bd31',
                progress: 80
            },
            {
                id: 2,
                Logo: Xamarin,
                Name: 'Xamarin',
                CoverImageUrl: XamarinCover,
                Title: "Develop Xamarin Form App",
                Summary: 'This is a summary',
                BackgroundColor: "#82ccdd",
                LogoColor: '#039be5',
                progress: 100
            },
            {
                id: 3,
                Logo: UWP,
                Name: 'UWP',
                CoverImageUrl: UWPCover,
                Title: "Develop Universal Windows Platform",
                Summary: 'This is a summary',
                BackgroundColor: "#7dcb23",
                LogoColor: '#fbbc09',
                progress: 100
            },
            {
                id: 4,
                Logo: DotNet,
                Name: '.NET Core',
                CoverImageUrl: dotNETCover,
                Title: "Develop ASP.NET Cloud API",
                Summary: 'This is a summary',
                BackgroundColor: "#6d429c",
                LogoColor: '#5c2992',
                progress: 60
            },
            {
                id: 5,
                Logo: ReactJS,
                Name: 'ReactJS',
                CoverImageUrl: ReactJSCover,
                Title: "Make Personal Blog Using ReactJS",
                Summary: 'This is a summary',
                BackgroundColor: "#80deea",
                LogoColor: '#2294ff',
                progress: 60
            },
        ]   
    }
    // to={`BlogDetail/${request.id}/${request.Title}`}
    render() {
        document.body.style.backgroundColor = '#fbe5d8';
        return ( 
        <React.Fragment>
            <div className="container">
                {this.state.requests.map((request) => (
                <div className="card" key={request.id}>
                    <div className="additional" style={{backgroundColor: request.BackgroundColor}}>
                        <div className="user-card">
                            <div id="cardheader">
                                <img id="Logo" src={request.Logo}/>
                                <h5>{request.Name}</h5>
                            </div>
                        </div>
                        <div className="more-info">
                            <h2>Info</h2>
                            <p id="Summary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis commodi dolor aperiam beatae dolores eveniet voluptas perspiciatis pariatur deserunt? Rerum, rem at. Nihil, ipsam neque soluta aliquid eos dignissimos debitis.</p>
                            <Link id="ReadMore" to={{pathname: `/${request.id}/${request.Title}/${request.BackgroundColor}/${request.LogoColor}/${request.Name}`}}> Read More </Link>
                        </div>
                    </div>
                    <div className="general">
                        <h2>{request.Title}</h2>
                        <img id="PreviewImage" src={request.CoverImageUrl}/>
                    </div>
                </div>
                ))}
            </div>

        </React.Fragment> );
    }
}
 
export default BlogPage;