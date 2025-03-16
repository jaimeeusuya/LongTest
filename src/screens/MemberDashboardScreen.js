import React, { useState } from "react";
import {Text, View, TextInput, SafeAreaView, Image, Alert, StyleSheet, TouchableOpacity } from "react-native";
import { Icons } from '../Assets/Components/icons';
import { useNavigation } from '@react-navigation/native';

import {style} from '../styles/MemberDashboardStyle';


const DashboardScreen = () => {

    const handleBackPress = () => {
        Alert.alert('Back Button Pressed', 'You can link this to navigation logic.');
    };
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.toggleDrawer();
    };


    return (
        <SafeAreaView style={style.container}>
            {/* Header Bar */}
            <View style={style.header}>
                <TouchableOpacity onPress={openDrawer}>
                <Icons.menu />
                </TouchableOpacity>

                <Text style={style.headerTitle}>GAP One</Text>

                <View style={style.spacer} /> {/* For spacing balance */}
            </View>

            {/* Page Content */}
            <View style={style.content}>
                <Image 
                    style={style.imageContainer}
                    source = {require("../Assets/GAPLogo.png")}
                />

                <Text style={style.welcomeText}>
                    The GAP One portal app is currently under development.
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default DashboardScreen;