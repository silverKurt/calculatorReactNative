import React from 'react'
import {StyleSheet, Dimensions} from 'react-native'

export default StyleSheet.create({
    Button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width /4,
        padding: 15,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    OperationButton: {
        color: '#FFF',
        backgroundColor: '#FA8231'
    },
    DoubleButton: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    TripleButton: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})