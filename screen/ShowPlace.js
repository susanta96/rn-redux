import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import PlaceList from '../components/PlaceList/PlaceList'
import {selectPlace, deletePlace, deselectPlace} from '../store/actions/places'
import PlaceDetail from '../components/PlaceDetail/PlaceDetail'


class ShowPlace extends React.Component {

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
        return(
            <View style={styles.container}>
            <PlaceDetail 
                selectedPlace={this.props.selectedPlace} 
                onItemDeleted={this.placeDeleteHandler}
                onModalClosed={this.modalClosedHandler}
            />
            <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler}/>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container:{
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
})

const mapStateToProps = state =>  {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ShowPlace);