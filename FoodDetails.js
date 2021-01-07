import React from 'react';

import {View, Image, ImageBackground} from 'react-native';
 import {Text,Content, Button, Icon, Container} from'native-base';
import HeaderClickFood from './Components/HeaderClickFood';


export default class copyClass extends React.Component
{

    
    render()
    {

          const {navigate} =this.props.navigation;
          const { route } = this.props;
          

       
          const {image1}=route.params;
          const {image2}=route.params;
          const {image3}=route.params;

          
          const {price1}=route.params;
          const {price2}=route.params;
          const {price3}=route.params;

          const {title1}=route.params;
          const {title2}=route.params;
          const {title3}=route.params;


       return(
                      

                                 <View style={{flex:1,}}>
                    <HeaderClickFood navigation={navigate} />
                   
                    
                        <ImageBackground style={{flex:1,flexDirection:'row',}} 
                        
                         source={image1}
                         
                         >

                             



                        <View  style={{flexDirection:'row', justifyContent:'center',alignItems:'center',
                    position:'absolute',top:80}}>
                             <Text style={{fontSize:28,fontWeight:'bold',color:'white',
                            left:20
       }}>
         {title1}
         {title2}
         {title3}
       </Text>
                             <Text style={{fontSize:28,fontWeight:'bold',color:'white',
                            left:120
                         }}>{price1}
                            {price2}
                            {price3}
                         
                         </Text>
                         </View>




                       
                       <Button 
                         
                         onPress={()=>alert('Add Button Clicked')}
                         
                         style={{height:40,width:90,backgroundColor:'tomato',borderRadius:20
                         ,top:'60%',left:80
                         
                         }}> 

                         
                       
                       

                       <Icon name='plus' type='MaterialCommunityIcons'
                       style={{left:35}}
                       />


                         </Button>

                    
                        
                         
                         </ImageBackground>
                         
                      
                      



                        


                         
                   


                 </View>
   
         
       );
    
    }

}