import React,{Component}  from 'react';
import {StyleSheet, 
        View, 
        ImageBackground, 
        Text, 
        TextInput, 
        TouchableOpacity, 
        Image,
        Animated,
        Dimensions,
        Keyboard,
        Platform }  from 'react-native';
import {Icon} from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height 
import * as Animatable from 'react-native-animatable';
class LoginScreen  extends Component{

    static navigationOptions = {
        header: null
    }
   
   constructor(){
       super()

       this.state={
          placeholderText:'Enter your mobile number' 
       }
   } 
    componentWillMount(){
        this.loginHeight = new Animated.Value(150)

        this.keyboadWillShowListener = Keyboard.addListener('keyboardWillShow',
        this.keyboadWillShow)

        this.keyboadWillHideListener = Keyboard.addListener('keyboardWillHide',
        this.keyboadWillHide)


        this.keyboadDidShowListener = Keyboard.addListener('keyboardDidShow',
        this.keyboadWillShow)

        this.keyboadDidHideListener = Keyboard.addListener('keyboardDidHide',
        this.keyboadWillHide)

        this.keyboadHeight = new Animated.Value(0)
        this.forwordArrowOpacity = new Animated.Value(0)
        this.borderBottomWidth = new Animated.Value(0)
    }

keyboadWillShow = (event) => {
    
    if(Platform.OS == 'android'){
        duration = 100
     }
     else{

       duration = event.duration
    }


    Animated.parallel([

        Animated.timing(this.keyboadHeight,{
            duration: duration + 100, 
            toValue: event.endCoordinates.height + 10
        }),

      
        Animated.timing(this.forwordArrowOpacity,{
          duration: duration,
          toValue: 1
      }), 
     

      Animated.timing(this.borderBottomWidth,{
        duration: duration,
        toValue: 1
    })
      
    ]).start()

}


keyboadWillHide = (event) =>{

    if(Platform.OS == 'android'){
            duration = 100
    }
    else{

        duration = event.duration
    }
    Animated.parallel([

        Animated.timing(this.keyboadHeight,{
            duration: duration + 100,
            toValue: event.endCoordinates.height + 10
        }),

      
        Animated.timing(this.forwordArrowOpacity,{
          duration: duration,
          toValue: 0
      }), 
     

      Animated.timing(this.borderBottomWidth,{
        duration: event.duration,
        toValue: 0
    })
      
    ]).start()

}





    increaseHeightOfLogin = () => {
        this.setState({placeholderText:'712345678'})  
        Animated.timing(this.loginHeight,{
            toValue: SCREEN_HEIGHT,
            duration:500
        }).start(()=>{
            this.refs.textInputMobile.focus()

        })
    }  

    decreaseHeightOfLogin = () => {

        Keyboard.dismiss()
        Animated.timing(this.loginHeight,{
            toValue: 150,
            duration:500
        }).start()

    }

   render(){

    const headerTextOpacity = this.loginHeight.interpolate({
        inputRange:[150,SCREEN_HEIGHT],
        outputRange:[1,0]
    })

    const marginTop = this.loginHeight.interpolate({
        inputRange:[150,SCREEN_HEIGHT],
        outputRange:[25,100]
    })

    const headerBackArrowOpacity = this.loginHeight.interpolate({
        inputRange:[150,SCREEN_HEIGHT],
        outputRange:[0,1]
    })




    const titleTextLeft = this.loginHeight.interpolate({
        inputRange:[150,SCREEN_HEIGHT],
        outputRange:[100,25]
    })

    const titleTextBottom = this.loginHeight.interpolate({
        inputRange:[150,400, SCREEN_HEIGHT],
        outputRange:[0,0,100]
    })

    const titleTextOpacity = this.loginHeight.interpolate({
        inputRange:[150,SCREEN_HEIGHT],
        outputRange:[0,1]
    })
    
    return(
        <View style={{flex: 1 }}>

            <Animated.View
                 style={{
                     position:'absolute',
                     height:60,width:60,
                     top:60,left:25,zIndex:100,
                     opacity:headerBackArrowOpacity
                 }}>
                  <TouchableOpacity
                         onPress = { () => this.decreaseHeightOfLogin()}
                  >
                      <Icon name='md-arrow-back' 
                            style={{color:'black'}}/>
                  </TouchableOpacity>
            </Animated.View>

            <Animated.View
                style={{
                    position: 'absolute',
                    height: 60,width:60,
                    right: 10,
                    bottom:this.keyboadHeight,
                    opacity: this.forwordArrowOpacity,
                    zIndex: 100,
                    backgroundColor: '#54575e',
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius: 30
                }}>
                 <Icon name='md-arrow-forward' style={{color:'white'}}/>
            </Animated.View>
            <ImageBackground  source={ require('../assets/4.jpg')} 
            style={{flex: 1 }}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                     <Animatable.View 
                              animation='zoomIn' iterationCount={1}   
                              style={{backgroundColor: 'white', height: 100, width: 100,justifyContent: 'center', 
                              alignItems: 'center'}}>

                       <Text style={{fontWeight:'bold', fontSize: 26}}>econ</Text>

                            </Animatable.View> 
                                </View>  

             
                <Animatable.View animation='slideInUp' iterationCount={1}>
                <Animatable.View   
                          style={{ height: this.loginHeight, backgroundColor: 'white'}}>
                
                <Animatable.View  style={{opacity: headerTextOpacity, //animated 
                               alignItems: 'flex-start',
                               paddingHorizontal: 25,
                               marginTop: marginTop //animated
                               }}>

                    <Text style={{ fontSize: 26}}> Get moving economics </Text>
                        </Animatable.View>
                     <TouchableOpacity
                          onPress = { () => this.increaseHeightOfLogin()}
                     >
                         
                         <Animated.View style={{marginTop: marginTop, //animated
                                       paddingHorizontal: 25,
                                       flexDirection: 'row'}}>
                          <Animated.Text
                                style={{
                                    fontSize:24,color:'gray',
                                    position:'absolute',
                                    bottom:titleTextBottom,
                                    left: titleTextLeft,
                                    opacity:titleTextOpacity
                                }}>
                                    Enter your mobile number
                              </Animated.Text>                 
                          <Image 
                              source={require('../assets/sri.png')}  ///need add png call +94
                              style={{height: 24,
                              width:24, resizeMode:'contain'}}/>
                           
                           <Animatable.View 
                                 pointerEvents='none'
                                 style={{flexDirection: 'row',
                                 flex:1,
                                 borderBottomWidth: this.borderBottomWidth
                                 }}>
                                 
                                 <Text style={{fontSize: 20, paddingHorizontal:10}}>
                                     +94
                                 </Text>

                                 <TextInput 
                                            maxLength = {9}
                                            keyboardType='numeric'
                                            ref='textInputMobile'
                                            style={{ flex:1, fontSize:20}}
                                            placeholder={this.state.placeholderText}
                                            underlineColorAndroid='transparent'/>
                               </Animatable.View>  
                            </Animated.View>
                     </TouchableOpacity>
                           </Animatable.View>
                           
                <View 
                       style={{ height: 70, backgroundColor: 'white', alignItems: 'flex-start',
                                justifyContent: 'center', borderTopColor: '#e8e8ec', borderTopWidth: 1, 
                                borderBottomWidth: 1, paddingHorizontal: 25 }}>
                       
                       <Text
                           style={{ color: '#5a7fdf', fontWeight: 'bold' }}>
                                    Or connect  using a social account 
                           </Text>
                                </View> 
                                 </Animatable.View>
           </ImageBackground>
        </View>
        
    );
   }
}

export default LoginScreen;
const styles = StyleSheet.create({

   container:{
       flex: 1,
       alignItems:'center',
       justifyContent:'center'
       

   }

});