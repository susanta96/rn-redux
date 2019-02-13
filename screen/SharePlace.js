import React from 'react'
import {View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import PlaceInput from '../components/PlaceInput/PlaceInput'
import {addPlace} from '../store/actions/places'

class SharePlace extends React.Component {

    // placeAddedHandler = placeName => {
    //     this.props.onAddPlace(placeName)
        
    // };

    render() {
        return(
            <View style={styles.container}>
            <PlaceInput onPlaceAdded={(placeName) => this.props.navigation.navigate('Show', this.props.onAddPlace(placeName))} />
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

const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (name) => dispatch(addPlace(name))
    }
}


export default connect(null,mapDispatchToProps)(SharePlace);