import * as React from "react";

export default class Label extends React.Component<any,any>{

    props:any;

    render(){
        return <div {...this.props} style={{fontSize:16,font:"bold"}}>{this.props.children}</div>
    }
}