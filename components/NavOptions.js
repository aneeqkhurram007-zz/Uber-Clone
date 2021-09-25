import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/core';
const data = [

    {
        title: 'Get a ride',
        screen: 'MapScreen',
        image: 'https://links.papareact.com/3pn',
        id: '123'
    },
    {
        title: 'Order Found',
        screen: 'EatsScreen',
        image: 'https://links.papareact.com/28w',
        id: '456'
    }

]
const NavOptions = () => {
    const navigation = useNavigation();
    return (
        <FlatList
            keyExtractor={(item) => item.id}
            data={data}
            horizontal
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate(item.screen)}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}>
                    <View>
                        <Image
                            source={{ uri: item.image }}
                            style={{ width: 120, height: 120, resizeMode: "contain" }}

                        />
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            type="antdesign"
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions


