import React, { useState } from "react";
import {
    // Text,
    StyleSheet,
    // View,
    // TextInput,
    // TouchableOpacity,
    // Platform,
    // KeyboardAvoidingView,
    // TouchableWithoutFeedback,
    // Keyboard,
    ImageBackground,
} from "react-native";
import CastomStatusBar from '../StatusBar'
// import PlusPhoto from "../../assets/image/svg/test.png";
import BackgroundImage from "../../assets/image/svg/BackgroundImage.png";
// import { useNavigation } from "@react-navigation/native";

export default function RegistrationScreen() {
    // const [email, setEmail] = useState("");
    // const [login, setLogin] = useState("");
    // const [password, setPassword] = useState("");
    // const [emailError, setEmailError] = useState("");
    // const [showPassword, setShowPassword] = useState(false);
    // const navigation = useNavigation();

    // const deliveryUserData = () => {
    //     if (emailError || email === "" || password === "") {
    //         console.log("Please enter a valid email and password");
    //         return;
    //     }
    //     const user = {
    //         login,
    //         email,
    //         password,
    //     };
    //     navigation.navigate("Home");
    // };
    // const validateEmail = (text) => {
    //     setEmail(text);
    //     let reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //     if (reg.test(text) === false) {
    //         setEmailError("Email is not correct");
    //     } else {
    //         setEmailError("");
    //     }
    // };

    // const togglePasswordVisibility = () => {
    //     setShowPassword(!showPassword);
    // };

    return (
        
            <ImageBackground
                source={BackgroundImage}
                style={stylesRegister.imageBack}
            >
                <CastomStatusBar/>
            </ImageBackground>
        
    );
}

const stylesRegister = StyleSheet.create({
    form: {
        position: "relative",
        paddingBottom: 78,
        paddingTop: 92,
        paddingRight: 16,
        paddingLeft: 16,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        textAlign: "center",
    },
    imageBack: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    image: {
        width: 120,
        height: 120,
        position: "absolute",
        backgroundColor: "#F6F6F6",
        borderRadius: 16,
        left: "39%",
        top: "-15%",
    },
    title: {
        textAlign: "center",
        fontSize: 30,
        lineHeight: 35,
        marginBottom: 33,
        fontFamily: "RobotoMedium",
    },
    input: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        marginBottom: 16,
    },
    lastInput: {
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 15,
        marginBottom: 43,
        position: "relative",
    },
    showPassword: {
        position: "absolute",
        top: 20,
        left: "75%",
    },
    textShow: {
        color: "#1B4371",
        fontFamily: "Roboto",
        fontSize: 16,
        lineHeight: 19,
    },
    buttonForm: {
        backgroundColor: "#FF6C00",
        color: "black",
        marginBottom: 16,
        paddingTop: 16,
        paddingBottom: 16,
        borderRadius: 100,
    },
    textButton: {
        color: "#FFFFFF",
        textAlign: "center",
        fontFamily: "Roboto",
    },
    textLink: {
        fontFamily: "Roboto",
        fontSize: 16,
        textAlign: "center",
        color: "#1B4371",
        alignItems: "center",
    },
    error: {
        color: "red",
        marginBottom: 16,
    },
    link: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});