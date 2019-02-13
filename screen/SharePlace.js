import React from 'react'
import {View, StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import PlaceInput from '../components/PlaceInput/PlaceInput'
import {addPlace} from '../store/actions/places'
import ShowPlace from '../screen/ShowPlace'

class SharePlace extends React.Component {

    placeAddedHandler = placeName => {
        Promise.all(this.props.onAddPlace(placeName)).then(
                this.props.navigation.navigate('ShowPlace')
            
        )
        
    };

    render() {
        return(
            <View style={styles.container}>
            <PlaceInput onPlaceAdded={this.placeAddedHandler} />
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

const mapStateToProps = state => {
    return {
        itemAdded: state.places.itemAdded
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onAddPlace: (name) => dispatch(addPlace(name))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SharePlace);