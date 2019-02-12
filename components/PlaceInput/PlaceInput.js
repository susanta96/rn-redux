import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet,TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';


class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    // console.log(this.state.placeName);
    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
          style={styles.placeInput}
        />
        <TouchableOpacity style={styles.placeButton} onPress={this.placeSubmitHandler}>
          <Ionicons name="ios-add-circle" size={26} />
        </TouchableOpacity>
        {/* <Button
          title="Add Place"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "10%"
  }
});

export default PlaceInput;
