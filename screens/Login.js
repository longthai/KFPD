import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StatusBar
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, SIZES, FONTS } from "../constants";

import { CustomButton } from "../components";

const Login = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "65%" : "60%"
                }}
            >
                <ImageBackground
                    style={{
                        flex: 1,
                        justifyContent: 'flex-end'
                    }}
                    resizeMode="cover"
                    source={images.loginBackground}
                >
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={[
                            COLORS.transparent,
                            COLORS.black
                        ]}
                        style={{
                            height: 200,
                            justifyContent: 'flex-end',
                            paddingHorizontal: SIZES.padding
                        }}
                    >
                        <Text
                            style={{
                                width: "80%",
                                color: COLORS.white,
                                lineHeight: 45,
                                ...FONTS.largeTitle
                            }}
                        >
                            KUNG FOOD PANDA
                        </Text>
                    </LinearGradient>
                </ImageBackground>
            </View>
        )
    }

    function renderDetail() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* Description */}
                <Text
                    style={{
                        marginTop: SIZES.radius,
                        width: '70%',
                        color: COLORS.lightOrange,
                        ...FONTS.body3
                    }}
                >
                    Black belt in the kitchen
                </Text>

                {/* Buttons */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <CustomButton
                        buttonText="Login"
                        buttonContainerStyle={{
                            paddingVertical: 18,
                            borderRadius: 20,
                        }}
                        colors={[COLORS.darkViolet, COLORS.lightViolet]}
                        onPress={() => navigation.replace("Home")}
                    />

                    <CustomButton
                        buttonText="Sign Up"
                        buttonContainerStyle={{
                            marginTop: SIZES.radius,
                            paddingVertical: 18,
                            borderRadius: 20,
                            borderColor: COLORS.lightViolet,
                            borderWidth: 1,
                        }}
                        colors={[]}
                        onPress={() => navigation.replace("Home")}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.black }}>
            <StatusBar barStyle="light-content" />

            {/* Header */}
            {renderHeader()}

            {/* Detail */}
            {renderDetail()}
        </View>
    )
}



export default Login;