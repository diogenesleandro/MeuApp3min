import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        // Identidade visual ETEC (Fundo escuro e detalhes em Ciano)
        tabBarActiveTintColor: '#00d4ff',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#001a33',
          borderTopWidth: 1,
          borderTopColor: '#00d4ff',
          height: 65,
          paddingBottom: 10,
          paddingTop: 5,
        },
        headerStyle: {
          backgroundColor: '#001a33',
        },
        headerTintColor: '#00d4ff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      {/* 1. TELA HOME */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'ETEC ITANHAÉM',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} color={color} />,
        }}
      />

      {/* 2. TELA 1º MIN */}
      <Tabs.Screen
        name="primeiro"
        options={{
          title: '1º ANO - MIN',
          tabBarLabel: '1MIN',
          tabBarIcon: ({ color }) => <Ionicons name="code-slash" size={24} color={color} />,
        }}
      />

      {/* 3. TELA 2º MIN */}
      <Tabs.Screen
        name="segundo"
        options={{
          title: '2º ANO - MIN',
          tabBarLabel: '2MIN',
          tabBarIcon: ({ color }) => <Ionicons name="layers" size={24} color={color} />,
        }}
      />

      {/* 4. TELA 3º MIN */}
      <Tabs.Screen
        name="terceiro"
        options={{
          title: '3º ANO - MIN',
          tabBarLabel: '3MIN',
          tabBarIcon: ({ color }) => <Ionicons name="ribbon" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}