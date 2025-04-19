import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function MatchScreen() {
  const [photo, setPhoto] = useState(null);
  const [answers, setAnswers] = useState({
    aggressive: '',
    confused: '',
    approachable: '',
  });
  const [result, setResult] = useState(null);

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Allow access to photos to upload.');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) setPhoto(result.assets[0].uri);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('aggressive', answers.aggressive || 'No');
    formData.append('confused', answers.confused || 'No');
    formData.append('approachable', answers.approachable || 'Yes');
    if (photo) {
      formData.append('photo', {
        uri: photo,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });
    }
    try {
      const safetyResponse = await axios.post('http://<your-fastapi-url>/assess', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      let resultText = safetyResponse.data.recommendation;
      if (photo) {
        const matchResponse = await axios.post('http://<your-fastapi-url>/match', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        resultText += `\nMatches: ${JSON.stringify(matchResponse.data, null, 2)}`;
      }
      setResult(resultText);
    } catch (error) {
      console.error(error);
      setResult('Error assessing or matching');
    }
  };

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Found Someone?</Text>
      <Text className="mb-2">Is the pet/person aggressive? (Yes/No)</Text>
      <TextInput
        className="border border-gray-300 p-2 mb-2 rounded"
        placeholder="No"
        onChangeText={text => setAnswers({ ...answers, aggressive: text })}
        value={answers.aggressive}
      />
      <Text className="mb-2">Is the person confused? (Yes/No)</Text>
      <TextInput
        className="border border-gray-300 p-2 mb-2 rounded"
        placeholder="No"
        onChangeText={text => setAnswers({ ...answers, confused: text })}
        value={answers.confused}
      />
      <Text className="mb-2">Is the pet/person approachable? (Yes/No)</Text>
      <TextInput
        className="border border-gray-300 p-2 mb-2 rounded"
        placeholder="Yes"
        onChangeText={text => setAnswers({ ...answers, approachable: text })}
        value={answers.approachable}
      />
      <Button title="Pick Photo (Optional)" onPress={pickImage} color="#007AFF" />
      {photo && <Image source={{ uri: photo }} className="w-32 h-32 mt-2 rounded" />}
      <View className="mt-4">
        <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
      </View>
      {result && <Text className="mt-4 text-lg">{result}</Text>}
    </View>
  );
}