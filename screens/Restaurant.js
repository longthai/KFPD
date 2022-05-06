import React, { useRef } from "react"
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Animated,
    Platform
} from "react-native"
import { BlurView } from "@react-native-community/blur";

import { SIZES, FONTS, icons, COLORS } from "../constants"

import { Delivery } from "../components"

const HEADER_HEIGHT = 350;

const RestaurantCreatorCardDetail = ({ selectedRestaurant }) => {
    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.darkViolet,
                borderRadius: 10,
            }}
        >

            <View style={{ flex: 1, marginHorizontal: 30 }}>
                <Text style={{ color: COLORS.lightOrange, ...FONTS.h3 }}>{selectedRestaurant?.name}</Text>
                <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{selectedRestaurant?.address}</Text>
            </View>

            <TouchableOpacity
                onPress={() => console.log("View in map")}
                style={{
                    width: 30,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 20,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: COLORS.lightOrange,
                }}
            >
                <Image
                    source={icons.map}
                    style={{
                        width: 15,
                        height: 15,
                        tintColor: COLORS.lightOrange
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

const RestaurantCreatorCardInfo = ({ selectedRestaurant }) => {
    if (Platform.OS === 'ios') {
        return (
            <BlurView
                style={{
                    flex: 1,
                    borderRadius: SIZES.radius,
                }}
                blurType="dark"
            >
                <RestaurantCreatorCardDetail
                    selectedRestaurant={selectedRestaurant}
                />
            </BlurView>
        )
    } else {
        return (
            <View
                style={{
                    flex: 1,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.transparentBlack9,
                }}
            >
                <RestaurantCreatorCardDetail
                    selectedRestaurant={selectedRestaurant}
                />
            </View>
        )
    }
}

const Restaurant = ({ navigation, route }) => {

    const [selectedRestaurant, setSelectedRestaurant] = React.useState(null)

    const scrollY = useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
        let { restaurant } = route.params
        console.log(restaurant)
        setSelectedRestaurant(restaurant)
    }, [])

    function renderHeaderBar() {
        return (
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 90,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: 10,
                }}
            >
                {/* Screen Overlay */}
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: COLORS.black,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
                            outputRange: [0, 1],
                        }),
                    }}
                />

                {/* Header Bar Title */}
                <Animated.View
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        paddingBottom: 10,
                        opacity: scrollY.interpolate({
                            inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                            outputRange: [0, 1],
                        }),
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 50],
                                    outputRange: [50, 0],
                                    extrapolate: 'clamp'
                                }),
                            },
                        ]
                    }}
                >
                    <Text style={{ color: COLORS.lightOrange, ...FONTS.h3 }}>{selectedRestaurant?.name}</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{selectedRestaurant?.address}</Text>
                </Animated.View>

                {/* Back button */}
                <TouchableOpacity
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35,
                        borderRadius: 18,
                        borderWidth: 1,
                        borderColor: COLORS.lightGray,
                        backgroundColor: COLORS.transparentBlack5,
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={icons.back}
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>

                {/* Bookmark */}
                <TouchableOpacity
                    onPress={() => console.log("Bookmark")}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 35,
                        width: 35,
                    }}
                >
                    <Image source={selectedRestaurant?.isBookmark ? icons.bookmarkFilled : icons.bookmark} style={{ width: 30, height: 30, tintColor: COLORS.darkViolet }} />
                </TouchableOpacity>
            </View >
        )
    }

    function renderRestaurantCardHeader() {
        return (
            <View
                style={{
                    marginTop: -1000,   // To make sure header image doesn't scroll
                    paddingTop: 1000,   // To make sure header image doesn't scroll
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <Animated.Image
                    source={selectedRestaurant?.image}
                    resizeMode="contain"
                    style={{
                        height: HEADER_HEIGHT,
                        width: "200%",
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                                }),
                            },
                            {
                                scale: scrollY.interpolate({
                                    inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                                    outputRange: [2, 1, 0.75],
                                })
                            }
                        ]
                    }}
                />

                {/* Restaurant creator card */}
                <Animated.View
                    style={{
                        position: 'absolute',
                        bottom: 10,
                        left: 30,
                        right: 30,
                        height: 80,
                        transform: [
                            {
                                translateY: scrollY.interpolate({
                                    inputRange: [0, 170, 250],
                                    outputRange: [0, 0, 100],
                                    extrapolate: 'clamp'
                                }),
                            },
                        ]
                    }}
                >
                    <RestaurantCreatorCardInfo
                        selectedRestaurant={selectedRestaurant}
                    />
                </Animated.View>
            </View>
        )
    }

    function renderRestaurantInfo() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 130,
                    width: SIZES.width,
                    paddingHorizontal: 30,
                    paddingVertical: 20,
                    alignItems: 'center',
                }}
            >
                {/* Opening Hours */}
                <View
                    style={{
                        flex: 1.5,
                        justifyContent: 'center',
                    }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.darkViolet }}>Opening hours</Text>
                    <Text
                        style={{
                            marginTop: 5,
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        {selectedRestaurant?.hour}
                    </Text>
                </View>

                {/* Delivery */}
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                    }}
                >
                    <Delivery deliveryList={selectedRestaurant?.viewers} />
                </View>
            </View >
        )
    }

    function renderFoodHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 30,
                    marginTop: SIZES.radius,
                    marginBottom: SIZES.padding
                }}
            >
                <Text
                    style={{
                        flex: 1,
                        ...FONTS.h2,
                        color: COLORS.darkViolet
                    }}
                >
                    Menu
                </Text>
                <Text
                    style={{
                        color: COLORS.white,
                        ...FONTS.body4,
                    }}
                >
                    {selectedRestaurant?.ingredients.length} items
                </Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightOrange }}>
            <Animated.FlatList
                data={selectedRestaurant?.ingredients}
                keyExtractor={item => `${item.id}`}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderRestaurantCardHeader()}
                        {renderRestaurantInfo()}
                        {renderFoodHeader()}
                    </View>
                }
                scrollEventThrottle={16}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: scrollY } } }
                ], { useNativeDriver: true })}
                renderItem={({ item }) => (
                    <View
                        style={{
                            flexDirection: 'row',
                            paddingHorizontal: 30,
                            marginVertical: 5,
                        }}
                    >
                        {/* Icon */}
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: 80,
                                width: 80,
                                borderRadius: 5,
                                backgroundColor: COLORS.lightGray,
                            }}
                        >
                            <Image
                                source={item.icon}
                                style={{
                                    height: 70,
                                    width: 70
                                }}
                            />
                        </View>

                        {/* Description */}
                        <View
                            style={{
                                flex: 1,
                                paddingHorizontal: 20,
                                justifyContent: 'center'
                            }}
                        >
                        </View>

                        {/* Quantity */}
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end'
                            }}
                        >
                            <Text style={{ ...FONTS.body3, color: COLORS.white}}>{item.description}</Text>
                        </View>
                    </View>
                )}
                ListFooterComponent={
                    <View
                        style={{
                            marginBottom: 100
                        }}
                    />
                }
            />

            {/* Header Bar */}
            {renderHeaderBar()}
        </View>

    )
}

export default Restaurant;