import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          href: null,
        }}
      />
      <Tabs.Screen
        name="requests/index"
        options={{
          title: "Requests",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "card" : "card-outline"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="budgets/index"
        options={{
          title: "Budgets",
          tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? "cash" : "cash-outline"} color={color} />,
        }}
      />
      <Tabs.Screen
        name="purchases/index"
        options={{
          title: "Purchases",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? "receipt" : "receipt-outline"} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
