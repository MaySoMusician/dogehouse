import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardPage } from "../pages/DashboardPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SchedulePage } from "../pages/SchedulePage";
import { FollowingPage } from "../pages/FollowingPage";
import { colors } from "../constants/GlobalStyles";
import Icon from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export const BottomNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Schedule") {
            iconName = "calendar";
          } else if (route.name === "Following") {
            iconName = "people";
          } else if (route.name === "Profile") {
            iconName = "settings";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.accent,
        inactiveTintColor: colors.text,
        activeBackgroundColor: colors.primary800,
        inactiveBackgroundColor: colors.primary800,
        style: {
          backgroundColor: colors.primary800,
        },
      }}
    >
      <Tab.Screen name="Home" component={DashboardPage} />
      <Tab.Screen name="Schedule" component={SchedulePage} />
      <Tab.Screen name="Following" component={FollowingPage} />
      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};
