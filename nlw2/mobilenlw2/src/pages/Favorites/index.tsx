import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native'
import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import AsyncStorage from '@react-native-community/async-storage';


const Favorites: React.FC = () => {
  const [favorites, setFavorites] = useState([])

  async function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavorites(favoritedTeachers)
      }
    })
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus Proffys Favoritos" />

        <ScrollView
          style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >

          {favorites.map((teacher: Teacher) => {
            return (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited={true}
              />
            )
          })}
        </ScrollView>
      </View>

    </View>
  );
}

export default Favorites;