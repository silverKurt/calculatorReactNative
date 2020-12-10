import React from 'react'
import { Text, TouchableHighlight } from 'react-native'

import BS from '../styles/ButtonStyle'

export default props => {
    const stylesButton = [BS.Button]
    if (props.double) stylesButton.push(BS.DoubleButton)
    if (props.triple) stylesButton.push(BS.TripleButton)
    if (props.operation) stylesButton.push(BS.OperationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>

    )
}

