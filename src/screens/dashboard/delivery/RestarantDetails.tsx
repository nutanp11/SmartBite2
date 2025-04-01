import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { Images } from '../../../assets/images'
import { Colors } from '../../../constants/Colors'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const RestarantDetails = () => {
    const navigation = useNavigation()
    const routeD = navigation.route

  return (
    <View style={{flexDirection:"row", alignItems:"center"}}>
        <TouchableOpacity>
            <Image style={{tintColor:Colors.black, width:25, height:18}} source={Images.back}/>
        </TouchableOpacity>
        <Text style={{marginStart:10, fontSize:20, fontWeight:'700'}}>Details</Text>
    </View>
  )
}

export default RestarantDetails