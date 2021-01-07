import React from 'react';
import {Text , View, ScrollView } from 'react-native';
import HeaderLanding from './Components/HeaderLanding';
import PromoFoodItem from './Components/PromoFoodItem';

import {Drawer} from 'native-base';
import Sidebar from './Sidebar'

//styles
import styles from './Containers/Styles/LaunchScreenStyles';



let burgerImage=require('./images/burger.jpg');
let chickenImage=require('./images/chicken.jpg');
let pizzaImage=require('./images/pizza.jpg');
let pastaImage=require('./images/Pasta.jpg');
let sandwhichImage=require('./images/sandwhich.jpg');

//Food Click Screen Images Burgers
let burger1=require('./images/burger2.jpg');
let burger2=require('./images/burger3.jpg');
let burger3=require('./images/burger4.jpg');


//Food Click Screen Images Burgers
let pizza1=require('./images/pizza1.jpg');
let pizza2=require('./images/pizza2.jpg');
let pizza3=require('./images/pizza3.jpg');

//Food Click Screen Images Pasta
let pasta1=require('./images/pasta1.jpg');
let pasta2=require('./images/pasta2.jpg');
let pasta3=require('./images/pasta3.jpg');




 class LaunchScreen extends React.Component 
{
  
    closeDrawer=()=>
    {
        this.drawer._root.close();
    }

    openDrawer=()=>
    {
        this.drawer._root.open();
    }
       
    gotoBurger=()=>
    {
        this.props.navigation.navigate('FoodClickScreen',{

                  foodTitles:"Grill Burger",
                    pricetags: "10$",
                    foodDetails:"Our Grill Burger is totally tasty ,Yummy and delicius.",
                    images:burger1,
                    title:"BURGERS",

                    //2nd burger BBQ
                    foodTitles2:"BBQ Burger",
                    pricetags2:"15$",
                    foodDetails2:"Our BBQ Burger is fulll of taste and love",
                    images2:burger2,

                    //Third Burger
                    foodTitles3:"Cheese Burger",
                    pricetags3:"20$",
                    foodDetails3:"Our Cheeze Burger will fill your mouth with Water",
                    images3:burger3,

        },
        
        );

        this.closeDrawer();
    }

   //Pizza Click Drawer
   gotoPizza=()=>
    {
        this.props.navigation.navigate('FoodClickScreen',{

                  foodTitles:"Greek Pizza",
                    pricetags: "20$",
                    foodDetails:"Greek pizza is full of cheeze and crust",
                    images:pizza1,
                    title:"PIZZA",

                    //2nd Pizza
                    foodTitles2:"California Pizza",
                    pricetags2:"22$",
                    foodDetails2:"California pizza,is known for unusual ingredients",
                    images2:pizza2,

                    //Third Pizza
                    foodTitles3:"Chicken Tikka",
                    pricetags3:"25$",
                    foodDetails3:"Chicken Tikka Pizza is full with chicken sprinkles and cheese",
                    images3:pizza3,

        },
        
        );

        this.closeDrawer();
    } 


    //Pasta Click Drawer
    gotoPasta=()=>
    {
        this.props.navigation.navigate('FoodClickScreen',{

                  foodTitles:"Bucatini Pasta",
                    pricetags: "25$",
                    foodDetails:"Bucatini is a long pasta that’s similar to spaghetti,but thicker.",
                    images:pasta1,
                    title:"PASTA",

                    //2nd Pasta
                    foodTitles2:"Cavatelli Pasya",
                    pricetags2:"30$",
                    foodDetails2:"Considered one of the oldest pasta types,cooked with broccoli.",
                    images2:pasta2,

                    //Third Pasta
                    foodTitles3:"Farfalle Pasta",
                    pricetags3:"35$",
                    foodDetails3:"known as butterfly pasta,it is perfect for cream-based sauces",
                    images3:pasta3,

        },
        
        );

        this.closeDrawer();
    } 



    render()
    {
        const { navigate }= this.props.navigation;
          

            return(

              
                 

              <Drawer 
              ref={(ref)=> {this.drawer=ref; }}
              content={

                <Sidebar 
                
                gotoBurger={this.gotoBurger}
                gotoPizza={this.gotoPizza}
                gotoPasta={this.gotoPasta}
                />
              }

              onClose={()=>this.closeDrawer()}
              >






              <View>
                
                   <HeaderLanding  navigation={navigate} openDrawer={this.openDrawer} />

                    <ScrollView>

                    <PromoFoodItem  navigation={navigate} 
                    image={burgerImage}                   
                    text={"BURGERS"}
                 //   foodSize={3}
                    foodTitles={"Grill Burger"}
                    pricetags={"10$"}
                    foodDetails={"Our Grill Burger is totally tasty ,Yummy and delicius."}
                    images={burger1}

                    foodTitles2={"BBQ Burger"}
                    pricetags2={"15$"}
                    foodDetails2={"Our BBQ Burger is fulll of taste and love"}
                    images2={burger2}
                    

                    foodTitles3={"Cheese Burger"}
                    pricetags3={"20$"}
                    foodDetails3={"Our Cheeze Burger will fill your mouth with Water"}
                    images3={burger3}

                    //For Piiza Click Screen
                    
                    />                   
                    <PromoFoodItem   navigation={navigate} image={pizzaImage} text={"PIZZA"}
                    foodTitles={"Greek Pizza"}
                    pricetags={"20$"}
                    foodDetails={"Greek pizza is full of cheeze and crust"}
                    images={pizza1}

                    foodTitles2={"California Pizza"}
                    pricetags2={"22$"}
                    foodDetails2={"California pizza,is known for unusual ingredients"}
                    images2={pizza2}
                    

                    foodTitles3={"Chicken Tikka"}
                    pricetags3={"25$"}
                    foodDetails3={"Chicken Tikka Pizza is full with chicken sprinkles and cheese."}
                    images3={pizza3}
                    
                    />
                

                    <PromoFoodItem  navigation={navigate} image={pastaImage} text={"PASTA"}
                    //for pasta click screen
                    
                    foodTitles={"Bucatini Pasta"}
                    pricetags={"25$"}
                    foodDetails={"Bucatini is a long pasta that’s similar to spaghetti,but thicker."}
                    images={pasta1}

                    foodTitles2={"Cavatelli Pasta"}
                    pricetags2={"30$"}
                    foodDetails2={"Considered one of the oldest pasta types,cooked with broccoli."}
                    images2={pasta2}
                    

                    foodTitles3={"Farfalle Pasta"}
                    pricetags3={"35$"}
                    foodDetails3={"known as butterfly pasta,it is perfect for cream-based sauces"}
                    images3={pasta3}
                    
                    
                    />                    
                    <PromoFoodItem  navigation={navigate} image={chickenImage} text={"CHICKEN"}/>
                    <PromoFoodItem  navigation={navigate} image={sandwhichImage} text={"SANDWHICH"}/>

                    </ScrollView>
        
                    
                    
                </View>


               
                </Drawer>


                

            );

    }




}

export default LaunchScreen;
