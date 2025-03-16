import { StyleSheet } from "react-native";

export const style = StyleSheet.create (
    {
        container: {
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "#F0FFFF"
        },

        imageContainer: {
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: 200,
            height: 200,
            marginBottom: 20
        },

        appTitle: {
            fontSize: 50,
            fontWeight: "bold",
            marginBottom: 20
        },

        passwordInput: {
            width: 200,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 5,
            marginTop: 10,
            color: "black",
            backgroundColor: "white",
        },
        
        TextInput: {
            width: 200,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 5,
            color: "black",
            backgroundColor: "white",
        },

        buttonsContainer: {
            flexDirection: "column", 
            justifyContent: "space-between",
            gap: 10,
            marginBottom: 100,
        },

        errorText: {
            color: 'red',
            fontSize: 14,
            marginBottom: 10,
        },
        
        inputError: {
            borderColor: 'red',
            borderWidth: 1
        }
       
    }
)