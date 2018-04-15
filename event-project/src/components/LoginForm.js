import React, { Component } from 'react';
import { Card, CardItem, Input, Button} from './common';

class LoginForm extends Component {
    render(){
        return(
            <Card>
                <CardItem>
                    <Input
                    label="Email"
                    />
                </CardItem>

                <CardItem>
                    <Input
                    secureTextEntry
                    label="Password"
                    />
                </CardItem>

                <CardItem>
                    <Button>
                        Log in
                    </Button>
                </CardItem>
            </Card>
        );
    }
}

export default LoginForm;

