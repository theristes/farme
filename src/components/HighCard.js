import React from 'react';
import styled from 'styled-components/native'
import { Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Content = styled.View`
    flex: 1;
    margin-top : 1%;
    margin-bottom : 1%;
    
`;

const Card = styled(Animated.View)`
    flex: 1;
    background: #ffffff;
    border-radius: 10px;
    margin: 0 20px;
    height: 100%; 
`;

const CardHeader = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-top: 3%;
    padding-left: 3%;
`;

const CardContent = styled.View`
    flex: 1;
    padding: 0% 0% 0% 2.5%;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 15px;
    color: #333;
    font-weight: 700;
`;

const CardFooter = styled.View`
    padding: 3%;
    margin-top: 1%;
    background: #eee;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`;

const HighCard = props => {
    const [translateY, setTranslateY] = React.useState(new Animated.Value(0));
    const animatedEvent = Animated.event(
        [
            { nativeEvent: { translationY :  translateY } }
        ], { useNativeDriver : true }
    );

    const didOnHandlerStateChange = e => setTranslateY(new Animated.Value(0));       
    
    return (<Content style={{ maxHeight : props.maxHeight ? props.maxHeight : null }}>

                <PanGestureHandler
                    onGestureEvent={animatedEvent}
                    onHandlerStateChange={didOnHandlerStateChange}>
                    <Card style={{ 
                        transform: [{ 
                            translateY: translateY
                                        .interpolate({ 
                                            inputRange: [-600,600],
                                            outputRange: [-100,100],
                                            extrapolate: 'clamp'
                                        })
                        }] 
                    }}>
                        <CardHeader>
                            <Icon key={props.icon.type}
                                name={props.icon.type}
                                size={props.icon.size}
                                color={props.icon.color}/>
                            <Title>{props.title}</Title>
                        </CardHeader>
                        <CardContent>
                            { props.children }
                        </CardContent>
                            { (props.footer) && 
                               <CardFooter>
                                    {props.footer}
                               </CardFooter> }
                    </Card>

                </PanGestureHandler>
            </Content>)
};


export { HighCard };