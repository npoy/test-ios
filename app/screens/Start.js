import React, {Component} from 'react';
import {View} from 'react-native';
import BackgroundImage from "../components/BackgroundImage";
import AppButton from "../components/AppButton";
import {NavigationActions} from 'react-navigation';
import Toast from 'react-native-simple-toast';
import * as firebase from 'firebase';

export default class Start extends Component {

    login() {

    }

    register() {

    }

    render () {
        return (
            // <BackgroundImage>
                <View style = {{ justifyContent: 'center', flex: 1 }}>
                    <AppButton 
                        bgColor="rgba(111, 38, 74, 0.7)"
                        title="Ingresar"
                        action={this.login.bind(this)}
                        iconName="sign-in"
                        iconSize={30}
                        iconColor="#ffffff"
                    />

                    <AppButton 
                        bgColor="rgba(200, 200, 50, 0.7)"
                        title="Registro"
                        action={this.register.bind(this)}
                        iconName="user-plus"
                        iconSize={30}
                        iconColor="#ffffff"
                    />

                    <AppButton 
                        bgColor="rgba(67, 67, 146, 0.7)"
                        title="Facebook"
                        action={this.register.bind(this)}
                        iconName="facebook"
                        iconSize={30}
                        iconColor="#ffffff"
                    />
                </View>
            // </BackgroundImage>
        );
    }
}