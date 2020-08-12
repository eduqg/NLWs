import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput } from 'react-native-gesture-handler';

const TeacherList: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" >

        <View style={styles.searchForm}>
          <Text style={styles.label}>
            Matéria
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Qual a mateŕia?"
          />
          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>
                Dia da semana
              </Text>
            </View>
          </View>

        </View>
      </PageHeader>

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
  );
}

export default TeacherList;