import * as React from "react";
import {Canvas,Label} from "mg-ui";


export default class Main extends React.Component<any,any>{

    refs:any;
    props:any;
    state:any;

    constructor(props:any){
        super(props);
        this.state = {
            click : "Empty"
        }
    }

    render(){
        return <div>

            <div className="navbar navbar-inverse navbar-static-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-globe"></span> Logo</a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar">
                        <ul className="nav navbar-nav">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="library.html">About</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services <span className="caret"></span></a>
                                <ul className="dropdown-menu" aria-labelledby="about-us">
                                    <li><a href="#">Engage</a></li>
                                    <li><a href="#">Pontificate</a></li>
                                    <li><a href="#">Synergize</a></li>
                                </ul>
                            </li>
                        </ul>


                        <form className="navbar-form navbar-right" role="search">
                            <div className="form-group">
                                <input type="text" className="form-control"/>
                            </div>
                            <button type="submit" className="btn btn-default"><span className="glyphicon glyphicon-search"></span> Search</button>
                        </form>

                    </div>
                </div>
            </div>

            <div className="container-fluid">

                <div className="col-sm-3">

                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h1 className="panel-title"><span className="glyphicon glyphicon-random"></span> Completely Synergize</h1>
                        </div>
                        <div className="list-group">
                            <a href="#" className="list-group-item">Resource Taxing</a>
                            <a href="#" className="list-group-item">Premier Niche Markets</a>
                            <a href="#" className="list-group-item">Dynamically Innovate</a>
                            <a href="#" className="list-group-item">Objectively Innovate</a>
                            <a href="#" className="list-group-item">Proactively Envisioned</a>
                        </div>
                    </div>


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h1 className="panel-title"><span className="glyphicon glyphicon-cog"></span> Dramatically Engage</h1>
                        </div>

                        <div className="panel-body">
                            <p>Objectively innovate empowered manufactured products whereas parallel platforms. Holisticly predominate extensible testing procedures for reliable supply chains. Dramatically engage top-line web services vis-a-vis cutting-edge deliverables.</p>
                            <p><button className="btn btn-default">Engage</button></p>
                        </div>
                    </div>


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <span className="glyphicon glyphicon-bullhorn"></span>
                                Active Predomination
                            </h3>
                        </div>
                        <div className="panel-body">
                            <p>Proactively envisioned multimedia based expertise and cross-media growth strategies.</p>
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-default">Resource</button>
                                <button type="button" className="btn btn-default">Envision</button>
                                <button type="button" className="btn btn-default">Niche</button>
                            </div>
                        </div>
                    </div>

                </div>



                <div className="col-sm-6">


                    <div className="alert alert-success alert-dismissible" role="alert">
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <strong>Synergize:</strong> Seamlessly visualize quality intellectual capital!
                    </div>

                    <div className="row">
                        <article className="col-xs-12">
                            <h2>Premier Niche Markets</h2>
                            <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer service through sustainable potentialities.</p>
                            <p><button className="btn btn-default">Read More</button></p>
                            <p className="pull-right"><span className="label label-default">keyword</span> <span className="label label-default">tag</span> <span className="label label-default">post</span></p>
                            <ul className="list-inline">
                                <li><a href="#">Today</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-comment"></span> 2 Comments</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-share"></span> 8 Shares</a></li>
                            </ul>
                        </article>
                    </div>
                    <hr/>
                        <div className="row">
                            <article className="col-xs-12">
                                <h2>Proactively Envisioned</h2>
                                <p>Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products. Proactively envisioned multimedia based expertise and cross-media growth strategies.</p>
                                <p><button className="btn btn-default">Read More</button></p>
                                <p className="pull-right"><span className="label label-default">keyword</span> <span className="label label-default">tag</span> <span className="label label-default">post</span></p>
                                <ul className="list-inline">
                                    <li><a href="#">Yesterday</a></li>
                                    <li><a href="#"><span className="glyphicon glyphicon-comment"></span> 21 Comments</a></li>
                                    <li><a href="#"><span className="glyphicon glyphicon-share"></span> 36 Shares</a></li>
                                </ul>
                            </article>
                        </div>
                        <hr/>
                            <div className="row">
                                <article className="col-xs-12">
                                    <h2>Completely Synergize</h2>
                                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                                    <p><button className="btn btn-default">Read More</button></p>
                                    <p className="pull-right"><span className="label label-default">keyword</span> <span className="label label-default">tag</span> <span className="label label-default">post</span></p>
                                    <ul className="list-inline">
                                        <li><a href="#">2 Days Ago</a></li>
                                        <li><a href="#"><span className="glyphicon glyphicon-comment"></span> 12 Comments</a></li>
                                        <li><a href="#"><span className="glyphicon glyphicon-share"></span> 18 Shares</a></li>
                                    </ul>
                                </article>
                            </div>
                            <hr/>
                </div>



                <div className="col-sm-3">


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <span className="glyphicon glyphicon-log-in"></span>
                                Log In
                            </h3>
                        </div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" id="uid" name="uid" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" id="pwd" name="pwd" placeholder="Password"/>
                                </div>
                                <button type="submit" className="btn btn-default">Log In</button>
                            </form>
                        </div>
                    </div>


                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">
                                <span className="glyphicon glyphicon-scale"></span>
                                Dramatically Engage
                            </h3>
                        </div>
                        <div className="panel-body">
                            <div className="progress">
                                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width:'100%'}}>
                                    100% Proactively Envisioned
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow={80}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:'80%'}}>
                                    80% Objectively Innovated
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow={45}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:'45%'}}>
                                    45% Portalled
                                </div>
                            </div>
                            <div className="progress">
                                <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow={35}
                                     aria-valuemin={0} aria-valuemax={100} style={{width:'35%'}}>
                                    35% Done
                                </div>
                            </div>
                        </div>
                    </div>


                    <h3><span className="glyphicon glyphicon-modal-window"></span> Synergization</h3>
                    <div id="side-carousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#side-carousel" data-slide-to="0" className="active"></li>
                            <li data-target="#side-carousel" data-slide-to="1"></li>
                            <li data-target="#side-carousel" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="item active">
                                <a href="#">
                                    <img className="img-responsive" src="holder.js/400x300?bg=FF8C00&text=Image%201" alt=""/>>
                                </a>
                                <div className="carousel-caption">
                                    <h3>Dramatically Engage</h3>
                                    <p>Objectively innovate empowered manufactured products whereas parallel platforms.</p>
                                </div>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img className="img-responsive" src="holder.js/400x300?bg=FF8C00&text=Image%202" alt=""/>>
                                </a>
                                <div className="carousel-caption">
                                    <h3>Efficiently Unleash</h3>
                                    <p>Dramatically maintain clicks-and-mortar solutions without functional solutions.</p>
                                </div>
                            </div>
                            <div className="item">
                                <a href="#">
                                    <img className="img-responsive" src="holder.js/400x300?bg=FF8C00&text=Image%203" alt=""/>>
                                </a>
                                <div className="carousel-caption">
                                    <h3>Proactively Pontificate</h3>
                                    <p>Holistically pontificate installed base portals after maintainable products.</p>
                                </div>
                            </div>
                        </div>
                        <a className="left carousel-control" href="#side-carousel" role="button" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#side-carousel" role="button" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

            </div>

            <footer>
                <div className="footer-blurb">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 footer-blurb-item">
                                <h3><span className="glyphicon glyphicon-text-size"></span> Dynamic</h3>
                                <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                                <p><a className="btn btn-default" href="#">Procrastinate</a></p>
                            </div>
                            <div className="col-sm-3 footer-blurb-item">
                                <h3><span className="glyphicon glyphicon-wrench"></span> Efficient</h3>
                                <p>Dramatically maintain clicks-and-mortar solutions without functional solutions. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. </p>
                                <p><a className="btn btn-default" href="#">Unleash</a></p>
                            </div>
                            <div className="col-sm-3 footer-blurb-item">
                                <h3><span className="glyphicon glyphicon-paperclip"></span> Complete</h3>
                                <p>Professionally cultivate one-to-one customer service with robust ideas. Completely synergize resource taxing relationships via premier niche markets. Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                                <p><a className="btn btn-default" href="#">Complete</a></p>
                            </div>
                            <div className="col-sm-3 footer-blurb-item">


                                <h3><span className="glyphicon glyphicon-camera"></span> Phosfluorescent</h3>
                                <div className="row">
                                    <div className="col-xs-6">
                                        <a href="#" className="thumbnail">
                                            <img src="holder.js/110x80" alt=""/>>
                                        </a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" className="thumbnail">
                                            <img src="holder.js/110x80" alt=""/>>
                                        </a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" className="thumbnail">
                                            <img src="holder.js/110x80" alt=""/>>
                                        </a>
                                    </div>
                                    <div className="col-xs-6">
                                        <a href="#" className="thumbnail">
                                            <img src="holder.js/110x80" alt=""/>>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

                <div className="small-print">
                    <div className="container">
                        <p><a href="#">Terms &amp; Conditions</a> | <a href="#">Privacy Policy</a> | <a href="#">Contact</a></p>
                        <p>Copyright &copy; Example.com 2015 </p>
                    </div>
                </div>
            </footer>
        </div>
    }

    onClick(e){
        this.setState({click : e.clicked});
    }

}