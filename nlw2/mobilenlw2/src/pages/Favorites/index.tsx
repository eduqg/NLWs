import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton, ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


const Favorites: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

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

          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>
      </View>

    </View>
  );
}

export default Favorites;