import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IndexGroups from "@screens/IndexGroups";
import IndexParticipants from "@screens/IndexParticipants";
import StoreGroup from "@screens/StoreGroup";
import { View } from "react-native";
import { useTheme } from "styled-components/native";

const Stack = createNativeStackNavigator()

export default function Routes() {
    const theme = useTheme()
    return (
        <View style={{flex: 1, backgroundColor: theme.COLORS.GRAY_600}}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="IndexGroups" component={IndexGroups} />
                    <Stack.Screen name="IndexParticipants" component={IndexParticipants} />
                    <Stack.Screen name="StoreGroup" component={StoreGroup} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    )
}