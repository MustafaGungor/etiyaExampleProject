import * as React from "react";

export interface ICanvasProps{
    width : number;
    height : number;
    ref : string;
    onClick ?: any;
    onChange ?: any;
    id ?: string | number;
    style ?: object;
    className ?: string;
}

export interface ICanvasState{
    centerX1 : number;
    centerX2 : number;
    centerY1 : number;
    centerY2 : number;
    radius : number;

}

export default class Canvas extends React.Component<ICanvasProps,ICanvasState>{

    props:any;
    state:any;
    refs:any;
    statement:string = "BOS";




    static defaultProps:Partial<ICanvasProps> = {

    }

    centerX1 : number =  100;
    centerX2 : number =  200;
    centerY1 : number =  100;
    centerY2 : number =  200;

    constructor(props:any){
        super(props);
        this.state = {
            ref : "defaultCanvasName",
            centerX1 : 100,
            centerX2 : 200,
            centerY1 : 100,
            centerY2 : 200,
            radius : 50
        }
    }

    render(){
        return <canvas
            id={this.props.id}
            style={this.props.style}
            className={this.props.className}
            ref={this.state.ref}
            width={this.props.width}
            height={this.props.height}
            onChange={this.props.onChange}
            onClick={this.onClick.bind(this)}
        />
    }


    onClick(e:any){
        let canvas = this.props.ref ? this.refs[this.props.ref] : this.refs[this.state.ref];
        let context = canvas.getContext("2d");
        //A için
        if((e.clientX <= this.centerX1 + this.state.radius) &&
            (e.clientY <= this.centerY1+this.state.radius) &&
            (e.clientX >= this.centerX1 - this.state.radius) &&
            (e.clientY >= this.centerY1-this.state.radius)){
            console.log("A clicked");
            e.clicked = "A";
            this.clearElement(context);
            this.setSettings(context,e.clientX,e.clientY,"A");
            this.statement = "A";



        }//B için
        else if((e.clientX <= this.centerX2 + this.state.radius) &&
            (e.clientY <= this.centerY2+this.state.radius) &&
            (e.clientX >= this.centerX2 - this.state.radius) &&
            (e.clientY >= this.centerY2-this.state.radius)){
            console.log("B clicked")
            e.clicked = "B";
            this.clearElement(context);
            this.statement = "B"
            this.setSettings(context,e.clientX,e.clientY,"B");

        }else{
            console.log("İkiside tıklanmadı")
            e.clicked = "Empty";
            if(this.statement == "A"){
                this.clearElement(context);
                this.setSettings(context,e.clientX,e.clientY,"A");
                this.statement = "BOS";
            }else if(this.statement == "B"){
                this.clearElement(context);
                this.setSettings(context,e.clientX,e.clientY,"B");
                this.statement = "BOS";
            }else{}


        }
        if(this.props.onClick){
            this.props.onClick(e);
        }


    }

    setSettings(context:any,x:number,y:number,type:string){
        if(type == "A"){
            this.centerX1 = x;
            this.centerY1 = y;
            this.moveToElementA(context,x,y);
            this.moveToElementB(context,this.centerX2,this.centerY2);
        }else if(type == "B"){
            this.centerX2 = x;
            this.centerY2 = y;
            this.moveToElementB(context,x,y);
            this.moveToElementA(context,this.centerX1,this.centerY1);
        }
    }


    moveToElementA(context:any,X1:number,Y1:number){
        context.beginPath();
        context.arc(X1,Y1, this.state.radius,0,7,false);
        context.fillStyle = "rgb(207,68,0)"
        context.fill();

        context.beginPath();
        context.font = "25px Arial";
        context.textAlign = 'center';
        context.fillStyle = "black"
        context.fillText('A', X1,Y1);
        context.fill();

        this.moveToLineElement(context);

    }

    moveToElementB(context:any,X2:number,Y2:number){
        context.beginPath();
        context.arc(X2,Y2, this.state.radius,0,7,false);
        context.fillStyle = "rgb(207,68,0)"
        context.fill();

        context.beginPath();
        context.font = "25px Arial";
        context.textAlign = 'center';
        context.fillStyle = "black"
        context.fillText('B', X2,Y2);
        context.fill();

        this.moveToLineElement(context);
    }

    moveToLineElement(context:any){
        context.beginPath();
        context.moveTo(this.centerX1, this.centerY1);
        context.lineTo(this.centerX2, this.centerY2);
        context.fillStyle = "black"
        context.stroke();
    }

    //Panel temizleniyor
    clearElement(context:any){
        context.clearRect(0, 0, this.props.width, this.props.height);
    }


    /**
     * Render olduktan hemen sonra görüntü basılıyor
     * A elementi, B elementi
     */
    componentDidMount(){
        let canvas = this.props.ref ? this.refs[this.props.ref] : this.refs[this.state.ref];
        let context = canvas.getContext("2d");
        this.moveToElementA(context,this.state.centerX1,this.state.centerY1);
        this.moveToElementB(context,this.state.centerX2,this.state.centerY2);
    }
}