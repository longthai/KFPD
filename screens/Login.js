import React from "react";
import {
    View,
    Text,
    ImageBackground,
    StatusBar,
    TextInput,
    Image
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { images, COLORS, SIZES, FONTS,icons } from "../constants";

import { CustomButton } from "../components";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Login = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    height: SIZES.height > 700 ? "60%" : "55%"
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

                {/* Buttons */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <View
                        style={{
                            marginHorizontal: SIZES.padding,
                            marginBottom: SIZES.padding,
                        }}
                    >
                        <TextInput
                            style={{
                                marginLeft: SIZES.radius,
                                marginBottom: SIZES.radius,
                                color: COLORS.white,
                                ...FONTS.body3,
                                borderBottomColor: COLORS.darkOrange,
                                borderBottomWidth: 1,
                            }}
                            placeholderTextColor={COLORS.gray}
                            placeholder="Email/Phone number"
                        />

                        <TextInput
                            style={{
                                marginLeft: SIZES.radius,
                                color: COLORS.white,
                                ...FONTS.body3,
                                borderBottomColor: COLORS.darkOrange,
                                borderBottomWidth: 1,

                            }}
                            secureTextEntry={true}
                            placeholderTextColor={COLORS.gray}
                            placeholder="Password"
                        />
                    </View>
                    
                    <View
                        style={{
                            flexDirection: 'row',
                            marginHorizontal: SIZES.padding,
                            alignItems: 'center',
                            height: 80,
                        }}
                    >
                        <CustomButton
                            buttonText="Login"
                            buttonContainerStyle={{
                                paddingVertical: 18,
                                borderRadius: 20,
                            }}
                            colors={[COLORS.darkOrange, COLORS.lightOrange]}
                            onPress={() => navigation.replace("Home")}
                        />

                        <CustomButton
                            buttonText="Sign Up"
                            buttonContainerStyle={{
                                paddingVertical: 18,
                                borderRadius: 20,
                                borderColor: COLORS.darkOrange,
                                borderWidth: 1,
                            }}
                            colors={[]}
                            onPress={() => navigation.replace("Home")}
                        />
                    </View>
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