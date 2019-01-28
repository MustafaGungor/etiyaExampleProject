import * as React from "react";

export interface ButtonProps{
    outline?: boolean;
    /**
     * default false
     */
    active?: boolean;
    /**
     * default false
     */
    block?: boolean;
    color?: string;
    /**
     * default false
     */
    disabled?: boolean;
    /**
     * a or button react types
     */
    tag?: React.ReactType;
    innerRef?: string | ((instance: HTMLButtonElement) => any);
    onClick?: React.MouseEventHandler<any>;
    size?: any;
    id?: string;
    name ?: string;
}

export default class Button extends React.Component<any,any>{

    props:any;

    render(){
        const {name,...props} = this.props;
        return <button {...props}
                       name={this.props.name}>
                    {this.props.children}
                </button>
    }
}