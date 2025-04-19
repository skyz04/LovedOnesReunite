import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  type: Yup.string().oneOf(['person', 'pet']).required('Required'),
});

export default function PostScreen() {
  const [photo, setPhoto] = useState(null);

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

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Report Missing</Text>
      <Formik
        initialValues={{ name: '', description: '', location: '', type: 'pet' }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          const formData = new FormData();
          formData.append('name', values.name);
          formData.append('description', values.description);
          formData.append('location', values.location);
          formData.append('type', values.type);
          if (photo) {
            formData.append('photo', {
              uri: photo,
              name: 'photo.jpg',
              type: 'image/jpeg',
            });
          }
          try {
            await axios.post('http://<your-fastapi-url>/post_missing', formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            Alert.alert('Success', 'Posted successfully!');
            resetForm();
            setPhoto(null);
          } catch (error) {
            console.error(error);
            Alert.alert('Error', 'Failed to post');
          }
        }}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              className="border border-gray-300 p-2 mb-2 rounded"
              placeholder="Name"
              onChangeText={handleChange('name')}
              value={values.name}
            />
            {touched.name && errors.name && <Text className="text-red-500 mb-2">{errors.name}</Text>}
            <TextInput
              className="border border-gray-300 p-2 mb-2 rounded"
              placeholder="Description (e.g., breed, clothing)"
              onChangeText={handleChange('description')}
              value={values.description}
            />
            {touched.description && errors.description && <Text className="text-red-500 mb-2">{errors.description}</Text>}
            <TextInput
              className="border border-gray-300 p-2 mb-2 rounded"
              placeholder="Last Seen Location"
              onChangeText={handleChange('location')}
              value={values.location}
            />
            {touched.location && errors.location && <Text className="text-red-500 mb-2">{errors.location}</Text>}
            <TextInput
              className="border border-gray-300 p-2 mb-2 rounded"
              placeholder="Type (person or pet)"
              onChangeText={handleChange('type')}
              value={values.type}
            />
            {touched.type && errors.type && <Text className="text-red-500 mb-2">{errors.type}</Text>}
            <Button title="Pick Photo (Optional)" onPress={pickImage} color="#007AFF" />
            {photo && <Image source={{ uri: photo }} className="w-32 h-32 mt-2 rounded" />}
            <View className="mt-4">
              <Button title="Submit" onPress={handleSubmit} color="#007AFF" />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}