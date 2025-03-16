import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert } from "react-native";

import {style} from "../styles/MemberLoginStyle";

import Buttons from "../Assets/Components/buttons";

const MemberLoginScreen = ({ navigation }) => {

        const [formData, setFormData] = useState({
            username: '',
            password: ''
        });

        const [errors, setErrors] = useState({ username: '', password: '' });

        const handleInputChange = (field, value) => {
            setFormData({ ...formData, [field]: value })

            setErrors({ ...errors, [field]: ''});
        };

        const validateForm = () => {
            let valid = true;
            const newErrors = {} // temporarily collects error messages

            if (!formData.username.trim()) {
                newErrors.username = "Username is required.";
                valid = false;
            }

            if (!formData.password.trim()) {
                newErrors.password = "Password is required.";
                valid = false;
            }

            setErrors(newErrors);

            if (valid) {
                Alert.alert("Success", "Login Successful!");
                navigation.replace("MainDrawer");;
            }
        }

    return(

            <SafeAreaView style={style.container}>

                <Image 
                    style={style.imageContainer}
                    source = {require("../Assets/GAPLogo.png")}
                />

                <Text style={style.appTitle}>
                    GAP One
                </Text>

                
                <TextInput 
                    style={[style.TextInput, errors.username && style.inputError]} 
                    value={formData.username}
                    placeholder="Enter Username"                    // username can be any string
                    placeholderTextColor="black"
                    onChangeText = {(value) => handleInputChange('username', value)}
                />
                {errors.username ? <Text style={style.errorText}>{errors.username}</Text> : null}

                <TextInput
                    style={[style.passwordInput, errors.password && style.inputError]}
                    value={formData.password}
                    placeholder="Enter Password"                   // password can be any string
                    placeholderTextColor="black"
                    onChangeText = {(value) => handleInputChange('password', value)}
                    secureTextEntry = {true}
                />

                {errors.password ? <Text style={style.errorText}>{errors.password}</Text> : null}

                <View style={style.buttonsContainer}>

                    <Buttons.PrimaryButton 
                        title="Log in"
                        onPress={validateForm}
                    />

                </View>

            </SafeAreaView>
    );

}

export default MemberLoginScreen

