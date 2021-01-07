import {StyleSheet,Dimensions} from 'react-native'


let height=Dimensions.get('window').height;
let width=Dimensions.get('window').width;

let scale=height/width;

export default StyleSheet.create({


FoodItemView:
{

    width:'100%',
    height:height/4,
    paddingLeft:'5%',
    paddingTop:'5%'

    
   

},

priceView:
{
    backgroundColor:'#29a8ab',
    width:'18%',
    height:'25%',
    justifyContent:'center',
    borderRadius:10,
    zIndex:5,
    position:'relative',
    bottom:3,
    right:10,
    

},
priceText:
{

    color:'white',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:17,




},

foodImageView:{

    width:'55%',
    height:'70%',
    position:'absolute',
    paddingTop:'15%',
    paddingLeft:'5%',
    marginTop:'2%',
    
    
    

},

foodImage:
{
    width:'100%',
    height:'130%',
    borderRadius:40,
    

},

//Textdesign
textDescriptionView:
{

    backgroundColor:'#f4f4f8',
    width:'72%',
    height:'75%',
    borderRadius:25,
    zIndex:-5,
    position:'relative',
    left:'24%',
    bottom:'23%',
    
    


},

textTitle:
{
    alignSelf:'center',
    fontWeight:'bold',
    alignItems:'flex-end',
    marginTop:'5%',
    position:'relative',
    left:52,
    fontSize:16
     


},

textDescription:
{
        marginTop:'2%',
        flex: 1,
        alignSelf:'flex-end',
          width:115,
      fontSize:scale*7,
}

})