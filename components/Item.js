import React from "react";
import { View, Text } from "react-native";

class ItemComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            price : 0,
            name : ""
        }
    }
    changePrice(newPrice){
        this.setState({price: newPrice});
    }
    changeName(newName){
        this.setState({name: newName});
    }
    
    render(){
        return (
            <h1>{this.state.name + " is " + this.state.price}</h1>
            // <View> <Text> First Item, class-based<Text/>
            // <View />
        );
    }
}

export default ItemComponent;