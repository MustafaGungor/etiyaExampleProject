import * as React from "react";
import {Canvas,Label} from "mg-ui";
import Header from "./layout/Header";
import Container from "./layout/Container";
import Footer from "./layout/Footer";


export default class Main extends React.Component<any,any>{

    refs:any;
    props:any;
    state:any;

    constructor(props:any){
        super(props);

    }

    render(){
        return <div>

                    <Header/>

                    <Container/>

                    <Footer/>

                </div>
    }


}