import React from 'react';
import {Text,View} from 'react-native'

//styles
import styles from '../Containers/Styles/HeaderScreenStyles'
import { Container ,Header,Left,Body,Right,Button, Icon} from 'native-base';

export default class HeaderClickFood extends React.Component
{

   render(navigation)
   {
    
       
  return(

          <Container style={styles.containerStyle}>

              <Header style={styles.headerStyle}>

                  <Left>
                   <Button transparent onPress={()=>alert('Back Button Pressed')}>

                   <Icon    style={styles.iconStyle} type='Ionicons' name="md-arrow-round-back"/>
                   </Button>
                      
                  </Left>


                  <Body>
                      <Text style={styles.textStyle}>BBQ</Text>
                  </Body>

                  <Right>
                     
                     <Button transparent onPress={()=> this.props.navigation('Cart')}>
                     <Icon style={styles.iconStyle} type='FontAwesome5' name="shopping-cart"/>
                     </Button>

                  </Right>
              </Header>
          </Container>

     );


   }


}
