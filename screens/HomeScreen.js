import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_KEY } from '@env'

const HomeScreen = () => {
    return (
        <SafeAreaView style={tw`bg-white h-full`}>
            <View style={tw`p-5`}>
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: 'https://links.papareact.com/gzs'

                    }}
                />
                <GooglePlacesAutocomplete
                    nearbyPlacesAPI="GooglePlacesSearch"
                    onPress={(data, details = null) => {
                        console.log(data)
                        console.log(details)
                    }}
                    debounce={400}
                    placeholder="Where From?"
                    minLength={2}
                    enablePoweredByContainer={false}
                    query={{
                        key: GOOGLE_MAPS_KEY,
                        language: "en"
                    }}
                    styles={{
                        container: {
                            flex: 0,
                        },
                        textInput: {
                            fontSize: 18
                        }

                    }}
                />
                <NavOptions />
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({

})
