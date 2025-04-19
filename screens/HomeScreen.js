import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for testing
    const mockListings = [
      { listing_id: '1', name: 'Buddy', type: 'pet', description: 'Black Labrador', location: 'Davis Park' },
      { listing_id: '2', name: 'Jane', type: 'person', description: 'Blue jacket, confused', location: 'Main St' },
    ];
    setListings(mockListings);
    setLoading(false);
    // Uncomment when backend is ready
    /*
    axios.get('http://<your-fastapi-url>/list_missing')
      .then(response => {
        setListings(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
    */
  }, []);

  if (loading) return <ActivityIndicator size="large" className="flex-1" />;

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Missing Loved Ones</Text>
      <FlatList
        data={listings}
        keyExtractor={item => item.listing_id}
        renderItem={({ item }) => (
          <View className="p-4 mb-2 bg-gray-100 rounded">
            <Text className="text-lg">{item.name} ({item.type})</Text>
            <Text>{item.description}</Text>
            <Text>Last Seen: {item.location}</Text>
          </View>
        )}
      />
      <View className="mt-4 space-y-2">
        <Button title="Report Missing" onPress={() => navigation.navigate('Post')} color="#007AFF" />
        <Button title="Found Someone?" onPress={() => navigation.navigate('Match')} color="#007AFF" />
      </View>
    </View>
  );
}