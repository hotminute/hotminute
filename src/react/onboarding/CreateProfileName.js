import React from 'react';
import { View, Platform, ScrollView, Image } from 'react-native';

import { Text, DismissKeyboardView } from '../common/components';

import { connect } from 'react-redux';
import * as ActionTypes from '../../redux/ActionTypes';
import * as States from '../../redux/ActionTypes';

import { Fonts, Colors } from '../../config';

import DateTimePicker from '@react-native-community/datetimepicker';
import { Input, Button } from 'react-native-elements';

import { RadioButton } from './components';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

class CreateProfileName extends React.Component {

    state = {
        fname: '',
        lname: '',
    }

    lnameInput = React.createRef();

    async componentDidMount() {
        let profileSnapshot = await firestore().collection('profiles').doc(auth().currentUser.uid).get();
        let profileData = profileSnapshot.data();
        if (profileSnapshot.exists && profileData.bioComplete) {
            this.props.navigation.navigate('CreateProfileMedia');
        }
    }

    onDonePressed = () => {
        this.props.navigation.navigate('CreateProfileDob', { fname: this.state.fname, lname: this.state.lname });
    }

    render() {
        return (
            <DismissKeyboardView>
                <View style={{ flex: 1, backgroundColor: Colors.background, alignItems: 'center', justifyContent: 'space-evenly', padding: 16.0 }}>
                    <View style={{ flex: 1, paddingTop: 16.0, width: '100%' }}>
                        <Text style={{ fontFamily: Fonts.heading, fontSize: 24.0, color: Colors.heading }}>Who Are You?</Text>
                    </View>
                    {/* <Image source={require('../../../assets/img/name-visual.png')} style={{height: 144, width: 144}} /> */}
                    <View style={{ flex: 3, justifyContent: 'center', width: '100%' }}>
                        <Input
                            containerStyle={{ marginBottom: 32.0 }}
                            inputStyle={{ fontFamily: Fonts.primary, fontWeight: 'normal', color: Colors.text }}
                            inputContainerStyle={{ borderColor: Colors.accent }}
                            labelStyle={{ fontFamily: Fonts.primary, fontWeight: 'normal', color: Colors.text }}
                            keyboardType={'default'}
                            placeholder={'First Name'}
                            placeholderTextColor={Colors.textLightGray}
                            onChangeText={fname => this.setState({ fname })}
                            onSubmitEditing={() => this.lnameInput.current.focus()}
                            returnKeyType={'done'}
                            value={this.state.fname}
                        />
                        <Input
                            ref={this.lnameInput}
                            containerStyle={{ marginBottom: 32.0 }}
                            inputStyle={{ fontFamily: Fonts.primary, fontWeight: 'normal', color: Colors.text }}
                            inputContainerStyle={{ borderColor: Colors.accent }}
                            labelStyle={{ fontFamily: Fonts.primary, fontWeight: 'normal', color: Colors.text }}
                            keyboardType={'default'}
                            placeholder={'Last Name'}
                            placeholderTextColor={Colors.textLightGray}
                            onChangeText={lname => this.setState({ lname })}
                            value={this.state.lname}
                            returnKeyType={'done'}
                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', paddingBottom: 32.0, width: '100%' }}>
                        <Button disabled={!this.state.fname || !this.state.lname || this.state.fname.length < 2 || this.state.lname.length < 2} title={"That's Me"} onPress={this.onDonePressed} />
                    </View>
                </View>
            </DismissKeyboardView>
        )
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateProfileName);