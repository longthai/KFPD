import React from "react"
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList
} from "react-native"

import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
import { NearCard, CategoryCard } from "../components"
//import NearCard from "../components/NearCard"

const Home = ({ navigation }) => {

    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginHorizontal: SIZES.padding,
                    alignItems: 'center',
                    height: 80,
                }}
            >
                <View style={{ flex: 1 }}>
                    <Text
                        style={{
                            color: COLORS.darkViolet,
                            ...FONTS.h2
                        }}
                    >
                        Hello Long!
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => console.log("Logo")}
                >
                    <Image
                        source={images.logo}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 20
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderSearchBar() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    borderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            >
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.darkViolet,
                    }}
                    source={icons.search}
                />
                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        color: COLORS.darkViolet,
                        ...FONTS.body3
                    }}
                    placeholderTextColor={COLORS.gray}
                    placeholder="Search"
                />
            </View>
        )
    }

    function renderSeeNewsCard() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    borderRadius: 10,
                    backgroundColor: COLORS.darkViolet,
                }}
            >
                {/* Image */}
                <View
                    style={{
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={images.newsIcon}
                        style={{ width: 80, height: 80 }}
                    />
                </View>

                {/* Text */}
                <View
                    style={{
                        flex: 1,
                        paddingVertical: SIZES.radius
                    }}
                >
                    <Text
                        style={{
                            width: '80%',
                            color: COLORS.white,
                            ...FONTS.body4
                        }}
                    >
                        Check out our newsletter, latest discount offer and many more.
                    </Text>

                    <TouchableOpacity
                        style={{
                            marginTop: 10
                        }}
                        onPress={() => console.log("Go to news")}
                    >
                        <Text
                            style={{
                                color: COLORS.lightOrange,
                                textDecorationLine: 'underline',
                                ...FONTS.h4
                            }}
                        >
                            Go to news
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    function renderRestaurantSection() {
        return (
            <View
                style={{
                    marginTop: SIZES.padding
                }}
            >
                <Text
                    style={{
                        marginHorizontal: SIZES.padding,
                        color: COLORS.white,
                        ...FONTS.h2
                    }}
                >
                    Restaurants near you
                </Text>

                <FlatList
                    data={dummyData.restaurantList.sort((a,b) => (parseFloat(a.distance )> parseFloat(b.distance)) ? 1 : -1).slice(0, 3)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item, index }) => {
                        return (
                            <NearCard
                                containerStyle={{
                                    marginLeft: index == 0 ? SIZES.padding : 0
                                }}
                                restaurantItem={item}
                                onPress={() => navigation.navigate("Restaurant", { restaurant: item })}
                            />
                        )
                    }}
                />
            </View>
        )
    }

    function renderCategoryHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 20,
                    marginHorizontal: SIZES.padding,
                }}
            >
                <Text style={{ flex: 1, ...FONTS.h2, color: COLORS.white }}>Find us</Text>
                <TouchableOpacity>
                    <Text
                        style={{
                            color: COLORS.white,
                            ...FONTS.body4,
                        }}
                    >
                        View All
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.lightOrange
            }}
        >
            <FlatList
                data={dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode="on-drag"
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View>
                        {renderHeader()}
                        {renderSearchBar()}
                        {renderSeeNewsCard()}
                        {renderRestaurantSection()}
                        {renderCategoryHeader()}
                    </View>
                }
                renderItem={({ item }) => {
                    return (
                        <CategoryCard
                            containerStyle={{
                                marginHorizontal: SIZES.padding
                            }}
                            categoryItem={item}
                            onPress={() => navigation.navigate("Restaurant", { restaurant: item })}
                        />
                    )
                }}
                ListFooterComponent={
                    <View style={{ marginBottom: 100 }}></View>
                }
            />
        </SafeAreaView>
    )
}

export default Home;