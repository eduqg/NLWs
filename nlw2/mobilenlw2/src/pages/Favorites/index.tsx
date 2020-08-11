import React from 'react';
import { View, Image, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import PageHeader from '../../components/PageHeader';


const Favorites: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses')
  }

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus Proffys Favoritos" />

      </View>

    </View>
  );
}

export default Favorites;