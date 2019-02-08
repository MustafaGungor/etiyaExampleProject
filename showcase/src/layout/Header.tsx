import * as React from "react";

export default class Header extends React.Component<any,any>{
    constructor(props:any){
        super(props);

    }
    render(){
        return <div className="navbar navbar-inverse navbar-static-top" role="navigation">
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
        </div>;
    }
}