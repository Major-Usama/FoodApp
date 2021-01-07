import {StyleSheet , Dimensions} from 'react-native'

let height=Dimensions.get('window').height;

export default StyleSheet.create({



     foodCard:{
         height:height/2,
         alignItems:'center',
         
         
     },


     promoImage:{

                  height:'100%',
     },

     textView:{

        justifyContent:'center',
        position:'absolute',
        height:'100%',
        width:'100%'
    
    

     },
     foodTitle:
     {
         color:'white',
         fontSize:34,
         fontStyle:'italic',
         fontWeight:'bold',
         textAlign:'center',
         borderWidth:1,
         borderColor:'white',
         marginLeft:'20%',
         marginRight:'20%',
         paddingTop:'3%',
         paddingBottom:'3%',
         borderRadius:10,

         

     }



}) 