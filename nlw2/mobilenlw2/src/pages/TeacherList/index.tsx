import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import PageHeader from '../../components/PageHeader';


const TeacherList: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis"/>
    </View>
  );
}

export default TeacherList;