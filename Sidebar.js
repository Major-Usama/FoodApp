import React from 'react';
import {Container, Left,ListItem,Body,Icon,List,Right} from 'native-base';
import {Text}  from 'react-native';


export default class Sidebar extends React.Component

{


    render()
    {


        return(


            <Container
            style={{backgroundColor:'#ffa500',}}
            >


                <List>

                   <ListItem itemDivider >
                   <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Food</Text>
                       <Body style={{alignItems:'flex-end'}}>

                           <Icon type="MaterialCommunityIcons" name="food"/>
                       </Body>
                       
                  
                       </ListItem>



                       <ListItem button onPress={this.props.gotoBurger}>

                      

                    <Left>
                          <Icon  name="hamburger" type="FontAwesome5" />

                    </Left>


                       <Body>
                           <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Burgers</Text>
                       </Body>
                            
                   </ListItem>

                   <ListItem button onPress={this.props.gotoPizza}>
                       <Left>
                           <Icon type="Ionicons" name="md-pizza" />


                       </Left>
                       <Body>
                           <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Pizza</Text>
                       </Body>
                   </ListItem>

                   <ListItem button onPress={this.props.gotoPasta}>

                        <Left>

                            <Icon  type="Entypo" name="bowl"/>


                        </Left>
                        <Body>

                            <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Pasta</Text>
                            
                        </Body>

                   </ListItem>

                   <ListItem itemDivider >
                   <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Drinks</Text>
                       <Body style={{alignItems:'flex-end'}}>

                           <Icon type="Entypo" name="drink"/>
                       </Body>
                       
                  
                       </ListItem>

                       <ListItem>


                                 <Left>

                                     <Icon name="ios-beer" type="Ionicons" />
                                 </Left>

                                 <Body>
                                     <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>Ice-Shake</Text>
                                 </Body>

                       </ListItem>
                   


                </List>

            </Container>
        )
    }
}