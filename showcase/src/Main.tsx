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
            <div>
                <Canvas
                    id={"2d"}
                    ref={"canvas"}
                    style={{border:"1px solid #000000"}}
                    width={1000}
                    height={500}
                    onClick={this.onClick.bind(this)}
                />
            </div>
            <div className={"label-mg"}>
                <Label>State : <b>{this.state.click}</b> Clicked</Label>
            </div>
        </div>
    }

    onClick(e){
        this.setState({click : e.clicked});
    }

}