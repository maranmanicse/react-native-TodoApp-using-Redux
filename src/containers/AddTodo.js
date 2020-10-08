import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,TextInput,TouchableOpacity
} from "react-native";
import { connect } from 'react-redux';
import { addTodo,toggleTodo} from '../actions/index';
import todos from "../reducers/todos";

class AddTodo extends Component {
    state ={
        text:''
    };
    addTodo = (text)=>{
        this.props.dispatch(addTodo(text));
        this.setState({text:""});
     
    }

    render() {
        return (
            <View style={{flexDirection:'row',marginHorizontal:20}}>
            <TextInput 
                placeholder="eg: just take photo"
                style={{borderColor:'#ced4da',borderWidth:1,backgroundColor:'#f6f6f6',height:50,flex:1,padding:5}}
                onChangeText = {(value)=>{this.setState({text:value})}} value={this.state.text}
            />
            <TouchableOpacity onPress= {()=>{this.addTodo(this.state.text)}} >
                <View style={{backgroundColor:'#007bff',borderColor:'#007bff',height:50,justifyContent:"center",padding:5}}>
                        <Text style={{color:'white'}}> Add Todo</Text>
                </View>
            </TouchableOpacity>
        </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});