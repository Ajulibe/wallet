import * as React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import { Text, View, Button , } from 'react-native';
import { CompositeNavigationProp,  RouteProp} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { CommonActions } from '@react-navigation/native';
import {AuthStackParamList} from '../../navigation/AuthStack'
import {ROUTES} from '../../navigation/Routes'


type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_PHONE_NO_SCREEN>;

// class AuthPhoneNo extends React.PureComponent<Props>  = (props) =>  {
class AuthPhoneNo extends React.PureComponent<Props> {
  //Define your state for your component.
  constructor(props:Props) {
    super(props);
    this.state = {
      //Assing a array to your movieList state
      movieList: [],
    };
  }


  render(){
    //Destruct navigation from props
    const { navigation } = this.props;


    return (
      <View style={styles.container}>
            
      </View>
    );
    }
}

export default AuthPhoneNo;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

