import React, { Component } from 'react';
import { View, Text} from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from "../actions";
import {Card, CardItem, Input, Button, Spinner} from './common';

const styles ={
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}



class LoginForm extends Component {
    // Calling action whenever text is changed
    onEmailChange(text){
        this.props.emailChanged(text);

    }
    // Calling an action whenever password is changed
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    // Calls loginUser with email and password
    onButtonPress(){
        const {email,password}=this.props;
        this.props.loginUser({email,password});
    }
    // Show spinner if loading and button when done.
    renderButton(){
        if (this.props.loading){
            return <Spinner/>;
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }
    // Render errors and display view with message
    renderError(){
        if (this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    // Render LoginForm with common components to be bale to input email and password
    render() {
        return (
            <Card>
                <CardItem>
                    <Input
                        label="Email"
                        onChangeText={this.onEmailChange.bind(this)}
                        value = {this.props.email}
                    />
                </CardItem>

                <CardItem>
                    <Input
                        secureTextEntry
                        label="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={ this.props.password }
                    />
                </CardItem>

                {this.renderError()}

                <CardItem>

                    {this.renderButton()}
                </CardItem>
            </Card>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    const {email,password,error,loading} = auth;
    return{email,password,error,loading};
};

export default connect(mapStateToProps,
    { emailChanged, passwordChanged ,loginUser
    }) (LoginForm);

