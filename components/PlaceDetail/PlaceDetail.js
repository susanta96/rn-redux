import React from 'react'
import { Text, View, Modal, Image, Button, StyleSheet, TouchableNativeFeedback } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const placeDetail = props => {
    let modalContent = null;
    
    if(props.selectedPlace) {
        modalContent =(
            <View>
                <Image source={props.selectedPlace.image} style={styles.placeImage}/>
                <Text style={styles.placeName}>{props.selectedPlace.name}</Text>
            </View>
        );
    }
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View style={styles.ButtonStyle}>
                    <TouchableNativeFeedback onPress={props.onModalClosed}>
                        <Ionicons name="ios-arrow-back" size={32} />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback onPress={props.onItemDeleted}>
                        <Ionicons name="ios-trash" size={32} color="red"/>
                    </TouchableNativeFeedback>
                    
                    {/* <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                    <Button title="Close" onPress={props.onModalClosed}/> */}
                </View>
            </View>
        </Modal>
    );
 
};

const styles = StyleSheet.create({
    modalContainer: {
        margin: 22
    },
    placeImage: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontSize: 26,
        fontWeight: "bold",
        textAlign: "center"
    },
    ButtonStyle: {
        flex: 1,
        margin: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"

    }
})

export default placeDetail;