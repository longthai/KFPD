import React from "react";
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    Platform,
    StyleSheet
} from "react-native";
import { BlurView } from "@react-native-community/blur";

import { SIZES, COLORS, FONTS, icons } from "../constants";

const RestaurantCardDetails = ({ restaurantItem }) => {
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}
            >
                <Text
                    style={{
                        width: "70%",
                        color: COLORS.white,
                        ...FONTS.h3,
                        fontSize: 18
                    }}
                >
                    {restaurantItem.name}
                </Text>
                <Image
                    source={restaurantItem.isBookmark ? icons.bookmarkFilled : icons.bookmark}
                    style={{
                        width: 20,
                        height: 20,
                        marginRight: SIZES.base,
                        tintColor: COLORS.darkOrange,
                    }}
                />
            </View >

            <Text
                style={{
                    color: COLORS.lightGray,
                    ...FONTS.body4
                }}
            >
                {restaurantItem.distance} km away
            </Text>
        </View>
    )
}

const RestaurantCardInfo = ({ restaurantItem }) => {
    if (Platform.OS === 'ios') {
        return (
            <BlurView
                style={styles.restaurantCardContainer}
                blurType="dark"
            >
                <RestaurantCardDetails
                    restaurantItem={restaurantItem}
                />
            </BlurView>
        )
    } else {
        return (
            <View
                style={{
                    ...styles.restaurantCardContainer,
                    backgroundColor: COLORS.transparentDarkGray
                }}
            >
                <RestaurantCardDetails
                    restaurantItem={restaurantItem}
                />
            </View>
        )
    }

}

const NearCard = ({ containerStyle, restaurantItem, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                height: 350,
                width: 250,
                marginTop: SIZES.radius,
                marginRight: 20,
                borderRadius: SIZES.radius,
                ...containerStyle
            }}
            onPress={onPress}
        >
            {/* Background Image */}
            <Image
                source={restaurantItem.image}
                resizeMode="cover"
                style={{
                    width: 250,
                    height: 350,
                    borderRadius: SIZES.radius
                }}
            />

            {/* Category */}
            <View
                style={{
                    position: 'absolute',
                    top: 20,
                    left: 15,
                    paddingHorizontal: SIZES.radius,
                    paddingVertical: 5,
                    backgroundColor: COLORS.transparentGray,
                    borderRadius: SIZES.radius
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h4 }}>{restaurantItem.location}</Text>
            </View>

            {/* Card Info */}
            <RestaurantCardInfo
                restaurantItem={restaurantItem}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    restaurantCardContainer: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    }
})

export default NearCard