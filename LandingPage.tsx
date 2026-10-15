import React from 'react';
import { StyleSheet, View, Text, Image, Pressable, Alert, StatusBar, } from 'react-native';

export default function LandingPage() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Image
        source={require('./assets/background.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Image
            source={require('./assets/title.png')}
            style={styles.titleImage}
            resizeMode="contain"
          />
          <Text style={styles.subtitle}>Pelayanan Publik Digital</Text>
        </View>

        <View style={styles.middleSection}>
          <Text style={styles.welcomeText}>Selamat Datang!</Text>
        </View>

        <View style={styles.bottomSection}>
          <Pressable
            onPress={() => Alert.alert('Informasi', 'Tombol Mulai Ditekan')}
            style={({ pressed }) => [
              styles.btn,
              { opacity: pressed ? 0.8 : 1.0 },
            ]}
          >
            <Text style={styles.btnText}>Mulai</Text>
          </Pressable>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 12, 
    marginTop: 130,
  },
  titleImage: {
    width: 160,
    height: 35,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 15,
    color: '#475569',
    fontWeight: '500',
    marginTop: 2,
  },
  middleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  bottomSection: {
    width: '100%',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: '#FACC15',
    width: '100%',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  btnText: {
    color: '#3b3b3b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
