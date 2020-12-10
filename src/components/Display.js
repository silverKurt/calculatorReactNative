import React from 'react'
import { Text, View } from 'react-native'

import DS from '../styles/DisplayStyle'

export default props => {
    return (
        <View style={DS.Display}>
            <Text style={DS.DisplayValue} numberOfLines={1}>
                {props.value}
            </Text>
        </View>
    )
}