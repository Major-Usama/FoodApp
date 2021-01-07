import React from 'react';
import {Text ,View,Image,TouchableOpacity} from 'react-native';

//styles
import styles from '../Containers/Styles/PromoFoodStylesItem';




 class PromoFoodItem extends React.Component 
{
    
         
    render()
    {
        
        
       
            return(

                <TouchableOpacity onPress={()=>this.props.navigation('FoodClickScreen',
                { images:this.props.images,
                foodTitles:this.props.foodTitles, pricetags:this.props.pricetags,
                foodDetails:this.props.foodDetails,

                images2:this.props.images2,
                foodTitles2:this.props.foodTitles2, pricetags2:this.props.pricetags2,
                foodDetails2:this.props.foodDetails2,
                title:this.props.text,

                images3:this.props.images3,
                foodTitles3:this.props.foodTitles3, pricetags3:this.props.pricetags3,
                foodDetails3:this.props.foodDetails3,
                
                }
            
                )
                
                }>              
              <View style={styles.foodCard}>

                  <View>
                   <Image style={styles.promoImage} source={this.props.image} resizeMode={'contain'} blurRadius={1} />
                  </View>


                  <View style={styles.textView}>
            <Text style={styles.foodTitle}>{this.props.text}</Text>
                  </View>
                                
                              
            </View>
                
            </TouchableOpacity>


            );

    }

}
export default PromoFoodItem;
