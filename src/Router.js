import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

import {Intro, Select} from "./pages";

const Stek = createStackNavigator();

function Router() {
    return(
        <NavigationContainer>
            <Stek.Navigator screenOptions={{headerShown: false}}>
                <Stek.Screen name = "Intro" component={Intro}/>
                <Stek.Screen name = "Select" component={Select}/>
                </Stek.Navigator>
        </NavigationContainer>
    )
};

export default Router;