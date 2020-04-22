import React, { Component } from 'react';
import '../Layouts/LayoutStyles/BlogDetail.css'
import Typical from 'react-typical'



class BlogDetail extends Component {
    state = {  }
    
    render() {
        const {match} = this.props;
        console.log(match.params.id);
        console.log(match);
        document.body.style.backgroundColor = this.props.match.params.bcolor;
        window.addEventListener('scroll', function(){
        document.getElementById("BlogDetailHeader").style.opacity = 1 - +this.window.pageYOffset/550+''
        document.getElementById("BlogDetailHeader").style.top = +this.window.pageYOffset+'px'
        document.getElementById("BlogDetailHeader").style.backgroundPositionY = - +this.window.pageYOffset/2+'px'
            });
        return ( 
            <React.Fragment>
                <div id="BlogDetailHeader">
                    <h1 style={{color: this.props.match.params.lcolor}} id="Title">
                        <Typical steps={['Developing', 1000, this.props.match.params.title, 500]}
                                 loop={Infinity}/>
                    </h1>
                </div>
                <div id="BodyBlog">
                    <section className="BlogSection">
                        <br/>
                        <h2 className="BodyHeader">INTRODUCTION</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam ratione impedit quidem eius nisi accusamus! Reiciendis, corrupti illum amet voluptas ut ipsam fugit rerum! Ipsa tempora nobis nemo nihil!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        </p>
                    </section>
                    <section className="BlogSection">
                        <h2 className="BodyHeader">DEMO</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam ratione impedit quidem eius nisi accusamus! Reiciendis, corrupti illum amet voluptas ut ipsam fugit rerum! Ipsa tempora nobis nemo nihil!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        </p>
                    </section>
                    <section className="BlogSection">
                        <h2 className="BodyHeader">STEP</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam ratione impedit quidem eius nisi accusamus! Reiciendis, corrupti illum amet voluptas ut ipsam fugit rerum! Ipsa tempora nobis nemo nihil!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium beatae officia, doloremque reiciendis voluptas, porro sint corrupti ratione a officiis minima nisi soluta atque neque ipsam eligendi sit unde?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, quisquam? Amet, debitis ipsa! Beatae dolorum neque voluptate quis magnam, earum ducimus quia error! Iste illum quas ipsam itaque eum pariatur.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, sapiente magni atque provident recusandae doloremque, autem quas quae vitae perferendis asperiores eum cum. Magni mollitia consectetur voluptas perferendis animi iste?
                        </p>
                    </section>
                </div>
            </React.Fragment>
            
         );
    }
}
 
export default BlogDetail;