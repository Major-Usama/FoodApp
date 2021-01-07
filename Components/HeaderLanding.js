import React from 'react';
import {Text,View} from 'react-native'

//styles
import styles from '../Containers/Styles/HeaderScreenStyles'
import { Container ,Header,Left,Body,Right,Button, Icon} from 'native-base';

class HeaderLanding extends React.Component
{

   render()
   {
  return(

          <Container style={styles.containerStyle}>

              <Header style={styles.headerStyle}>

                  <Left>
                   <Button transparent onPress={()=> this.props.openDrawer()}>

                   <Icon style={styles.iconStyle} name="ios-menu"/>
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
export default HeaderLanding;