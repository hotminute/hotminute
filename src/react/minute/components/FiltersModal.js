import React, { useState, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Modal, Dimensions } from 'react-native';

import { Text, TabBar } from '../../common/components';
import { Colors, Fonts } from '../../../config';

import { Icon } from 'react-native-elements';

import { connect, useDispatch } from 'react-redux';
import * as ActionTypes from '../../../redux/ActionTypes';

const { height, width } = Dimensions.get('screen');

import {TabView, SceneMap } from 'react-native-tab-view';

import DistanceFilter from './DistanceFilter';
import GenderFilter from './GenderFilter';
import AgeFilter from './AgeFilter';

const FiltersModal = (props) => {

    const [filterTabIdx, setfilterTabIdx] = useState(0);
    const dispatch = useDispatch();
    const refreshFilters = () => dispatch({type: ActionTypes.FETCH_FILTERS.REQUEST});

    return (
        <Modal visible={props.showModal} transparent animated animationType={'slide'}>
            <View style={{ justifyContent: 'flex-start', marginTop: height / 3, backgroundColor: Colors.background, flex: 1, elevation: 4.0 }}>
                <TouchableOpacity onPress={() => {
                    props.onClose();
                    refreshFilters();
                }}>
                    <Icon name={'arrow-drop-down'} size={32} color={Colors.primary} />
                </TouchableOpacity>
                <Text style={{ fontFamily: Fonts.heading, fontSize: 28.0, alignSelf: 'center', marginBottom: 16.0 }}>Filters</Text>
                <TabView
                    style={{ flex: 1 }}
                    swipeEnabled={false}
                    navigationState={{ index: filterTabIdx, routes: [{ key: 'distance', title: 'distance' }, { key: 'gender', title: 'gender' }, { key: 'age', title: 'age' }] }}
                    renderScene={SceneMap({ distance: DistanceFilter, gender: GenderFilter, age: AgeFilter })}
                    renderTabBar={props => <TabBar {...props} onChangeTab={i => setfilterTabIdx(i)} />}
                    onIndexChange={idx => setfilterTabIdx(idx)}
                />
            </View>
        </Modal>
    );

}

export default FiltersModal;