import React from "react"
import {
    View,
    Image,
    Text,
} from "react-native"

import { FONTS, COLORS } from "../constants"

const Delivery = ({ deliveryList }) => {
        return (
            <View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginBottom: 5
                    }}
                >
                    {
                        deliveryList?.map((item, index) => (
                            <View
                                key={index}
                                style={{
                                    height: 50,
                                    width: 50,
                                    marginLeft: 30,
                                }}
                            >
                                <Image
                                    source={item?.profilePic}
                                    style={{
                                        width: 60,
                                        height: 60,
                                    }}
                                />
                            </View>
                        ))
                    }
                </View>
                
                {/*<Text
                    style={{
                        marginTop:20,
                        color: COLORS.white,
                        textAlign: 'right',
                        ...FONTS.body3,
                        lineHeight: 18
                    }}
                >
                    Choose deliverer
                </Text> */}
            </View>
            
        )
}

export default Delivery