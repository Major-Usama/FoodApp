import React from 'react';

import {View,Image} from 'react-native';
import {SwipeRow,Icon,Button,Text} from 'native-base'
import styles from '../Containers/Styles/cartitemStyle'

let itemburger1=require('../images/burger.jpg')

export default class CartItem extends React.Component
{

    render()
    {

       return(
                      

        <View style={styles.itemContainer}>



            
          <View style={styles.bodyContainer}>
            

            <Image
            source={itemburger1}
            style={styles.itemImage}
            
            />

            
          </View>

          <View style={styles.textItemView}>

            <Text style={styles.itemTitle}>
              {this.props.title}

            </Text>

            <Text style={styles.itemPrice}>
               15$
            </Text>
            
          </View>

          <View style={styles.itemCounterContainer}>

            <Button 
            transparent
            onPress={()=>
            {
              alert('test')
            }
            }
            >

              <Icon name="arrow-drop-up" type='MaterialIcons' style={styles.itemCountIcon}/>


            </Button>

           <Text style={styles.underIconText}>
             2
           </Text>


           <Button
           transparent
           onPress={()=>{alert('test')}}
           >

             <Icon name='arrow-drop-down' type='MaterialIcons' style={styles.downArrowIcon} />


           </Button>

          </View>
            
    

        </View>

       );
    
    }

}