import React from 'react';
import {Text , View, } from 'react-native';
import {Container ,Content} from 'native-base';
//styles
import HeaderClickFood from './Components/HeaderClickFood'
import styles from './Containers/Styles/FoodClickScreenStyles'
import FoodItem from './Components/FoodItem'





 export default  class  FoodClickScreen extends React.Component
{

   

    render()
    {
        const { navigate }= this.props.navigation;


        const { navigation, route } = this.props;

        //For Isr Burger
        const {images}=route.params;
        const {foodTitles}=route.params;
        const {pricetags}=route.params;
        const {foodDetails}=route.params;
        const {title}=route.params;


        //for 2nd burger
        const {images2}=route.params;
        const {foodTitles2}=route.params;
        const {pricetags2}=route.params;
        const {foodDetails2}=route.params;


        //For Third Burger
        const {images3}=route.params;
        const {foodTitles3}=route.params;
        const {pricetags3}=route.params;
        const {foodDetails3}=route.params;










        //----------------------------------------
        
          


 


        
        
            return(

                <Container>

                
               
                <HeaderClickFood  navigation={navigate}/>


               <Content style={styles.titleTextContent}>
                   
               <Text style={styles.titleText}>{title}</Text>

               <FoodItem  
             tags={pricetags}
             images={images}
             foodItems={foodTitles}
             foodDetails={foodDetails}
             navigation={navigate}
            
            /> 
             
             <FoodItem  
             tags2={pricetags2}
             images2={images2}
             foodItems2={foodTitles2}
             foodDetails2={foodDetails2}
             navigation={navigate}
            
            /> 

            
             <FoodItem  
             tags3={pricetags3}
             images3={images3}
             foodItems3={foodTitles3}
             foodDetails3={foodDetails3}
             navigation={navigate}
            

            
            /> 
             
                   
                   </Content>     
                 
           
                
                    
                    
                
                </Container>

            );


    }




}
