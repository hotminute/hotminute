import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { Text } from '../../common/components';
import { Fonts, Colors, AgoraConfig } from '../../../config';

export default class RadioButton extends Component {

    state = {
        value: this.props.options[0].key,
    };

    render() {
        const { options } = this.props;
        const { value } = this.state;

        return (
            <View>
                {options.map(res => {
                    return (
                        <View key={res.key} style={styles.container}>
                            <Text style={styles.radioText}>{res.text}</Text>
                            <TouchableOpacity
                                style={styles.radioCircle}
                                onPress={() => {
                                    this.setState({
                                        value: res.key,
                                    });
                                    if (this.props.onOptionChange) {
                                        this.props.onOptionChange(res.key);
                                    }
                                }}>
                                {value === res.key && <View style={styles.selectedRb} />}
                            </TouchableOpacity>
                        </View>
                    );
                })}
                <Text> Selected: {options.filter(option => option.key === this.state.value)[0].text} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 35,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    radioText: {
        marginRight: 35,
        fontSize: 20,
        color: '#000',
        fontWeight: '700'
    },
    radioCircle: {
        height: 30,
        width: 30,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#3740ff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedRb: {
        width: 15,
        height: 15,
        borderRadius: 50,
        backgroundColor: '#3740ff',
    },
    result: {
        marginTop: 20,
        color: 'white',
        fontWeight: '600',
        backgroundColor: '#F3FBFE',
    },
});