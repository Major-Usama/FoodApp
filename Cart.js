import React from 'react';

import {View} from 'react-native';
import {Text,Content, CardItem} from'native-base';
import HeaderClickFood from './Components/HeaderClickFood'
import styles from './Containers/Styles/CartStyle'
import CartItem from './Components/CartItem'


export default class Cart extends React.Component
{

    render()
    {

        const {navigate} =this.props.navigation;
       return(
                      

        <View>

            <HeaderClickFood navigation={navigate}/>

            <View style={styles.parentView}>

                 <Content>

                  <CartItem title={"BBQ Burger"}/>
                  <CartItem title={"Spicy Burger"}/>
                  <CartItem title={"Zinger Burger"}/>
                  
                 </Content>

                 <View style={styles.footerContainer}>

                     <Text style={styles.footerText}>Total:</Text>

                 </View>

                


            </View>
            

        </View>

       );
    
    }

}