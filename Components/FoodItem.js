import React from 'react';
import {Text ,View,Image,TouchableOpacity} from 'react-native';

//styles
import styles from '../Containers/Styles/FoodItemStyle';




//et burger1= require('../images/burger2.jpg');

 class FoodItem extends React.Component 
{
    
        
    render()
    
    {  
        
        
       
            return(

                <TouchableOpacity onPress={()=>this.props.navigation('FoodDetails',
                {
                    image1:this.props.images,
                    image2:this.props.images2,
                    image3:this.props.images3,

                    price1:this.props.tags,
                    price2:this.props.tags2,
                    price3:this.props.tags3,

                    title1:this.props.foodItems,
                    title2:this.props.foodItems2,
                    title3:this.props.foodItems3,
                    

                })
                } >     


                <View style={styles.FoodItemView}>

                    <View style={styles.priceView}> 

                     <Text style={styles.priceText}>
                         {this.props.tags}
                         {this.props.tags2}
                         {this.props.tags3}
                     
                     </Text>

                    </View>


                    <View style={styles.foodImageView}>
                        <Image  style={styles.foodImage} source={this.props.images} 
                        
                        
                        />
                        
                    </View>
                    <View style={styles.foodImageView}>
                        <Image  style={styles.foodImage} source={this.props.images2} 
                        
                        
                        />

                    </View>
                    <View style={styles.foodImageView}>
                        <Image  style={styles.foodImage} source={this.props.images3} 
                        
                        
                        />                   

                    </View>


                    <View style={styles.textDescriptionView}>

                        <Text style={styles.textTitle}>
                          
                          {this.props.foodItems}
                          {this.props.foodItems2}
                          {this.props.foodItems3}
                        </Text>

                        <Text style={styles.textDescription}>
                          {this.props.foodDetails}
                          {this.props.foodDetails2}
                          {this.props.foodDetails3}
                        </Text>


                    </View>


                      

                </View>         
              
                
            </TouchableOpacity>


            );

    }

}
export default FoodItem;
