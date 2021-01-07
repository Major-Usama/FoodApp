import {StyleSheet, Platform} from 'react-native'


export default StyleSheet.create({



itemContainer:
{
    
    width:'100%',
    height:140,
},

bodyContainer:
{


    flex:1,
    flexDirection:'row',
    justifyContent:'flex-start',
    marginLeft:10,
    width:'100%',
    left:40.
 


},

itemImage:
{
    top:20,
    height:100,
    width:100,
    borderRadius:10

},

textItemView:
{
    marginRight:5,
    flexDirection:'column',
    justifyContent:'space-evenly',
    
    

},
itemTitle:
{
    color:'black',
    fontWeight:'bold',
    fontSize:14,
    marginLeft:"50%",
    marginBottom:'20%'

},

itemPrice:
{
    color:'grey',
    fontSize:14,
    marginLeft:"50%",
     bottom:70

}
,
itemCounterContainer:
{

      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      position:'absolute',
      right:0,
      width:70,
      height:'100%',
      



},

itemCountIcon:
{

    fontSize:Platform.OS==='ios'?30:35,
    bottom:10
    
}

,
underIconText:
{
    bottom:19,
    fontSize:12

},

downArrowIcon:
{
bottom:25,
fontSize:Platform.OS==='ios'?50:35,

},






})