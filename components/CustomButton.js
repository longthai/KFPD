import React from "react"
import {
    TouchableOpacity,
    Text,
} from "react-native"

import LinearGradient from 'react-native-linear-gradient';

import { COLORS, FONTS, SIZES } from "../constants";

const CustomButton = ({ buttonText, buttonContainerStyle, onPress, colors }) => {

    if (colors.length > 0) {
        return (
            <TouchableOpacity
                style = {{
                    flex:1,
                }}
                onPress={onPress}
            >
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={colors}
                    style={{ ...buttonContainerStyle }}
                >
                    <Text
                        style={{
                            textAlign: 'center',
                            color: COLORS.white,
                            ...FONTS.h3,
                        }}
                    >
                        {buttonText}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        )
    } else {
        return (
            <TouchableOpacity
                style={{ ...buttonContainerStyle, flex:1, marginLeft:'3%'}}
                onPress={onPress}
            >
                <Text
                    style={{
                        textAlign: 'center',
                        color: COLORS.white,
                        ...FONTS.h3,
                    }}
                >
                    {buttonText}
                </Text>
            </TouchableOpacity>
        )
    }

}

export default CustomButton