import React,{Component} from "react";

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false
        }
    }

    componentDidCatch(error,info){
        this.setState({hasError:true})
    }


    render(){
        if(this.state.hasError){
            return<h2>OOPPPS! that's not good</h2>
        }
        else{
            return this.props.children
        }
    }
}

export default ErrorBoundary;