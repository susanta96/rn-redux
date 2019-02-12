import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import PlaceInput from './components/PlaceInput/PlaceInput'
import PlaceList from './components/PlaceList/PlaceList'
import PlaceDetail from './components/PlaceDetail/PlaceDetail'
import {addPlace, deletePlace, selectPlace, deselectPlace} from './store/actions/places';

class AppContainer extends React.Component {

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  placeDeleteHandler = () => {
    this.props.onDeletePlace();
  }

  modalClosedHandler =() => {
    this.props.onDeselectPlace();
  }

  render() {
    
    return (
      <View style={styles.container}>

        <PlaceDetail 
          selectedPlace={this.props.selectedPlace} 
          onItemDeleted={this.placeDeleteHandler}
          onModalClosed={this.modalClosedHandler}/>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});

const mapStateToProps = state =>  {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);