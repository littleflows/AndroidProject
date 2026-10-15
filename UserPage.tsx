import React from 'react';
import { StyleSheet, View, Text, Pressable, StatusBar, Image, } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets, } from 'react-native-safe-area-context';

function ProfilContent() {
  const insets = useSafeAreaInsets();[]
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2D6A4F" />
      <View style={[styles.topBar, { paddingTop: insets.top + 8 }]}>
        <View style={styles.headerLeft}>
          <Pressable style={styles.backBtn}>
            <Text style={styles.backIcon}>←</Text>
          </Pressable>
          <Text style={styles.headerTitle}>Profil</Text>
        </View>

        <Pressable style={styles.iconBtn}>
          <Image
            source={require('./assets/notification.png')}
            style={styles.topIconImage}
          />
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.profileBox}>
          <View style={styles.avatarPlaceholder}>
            <Image
              source={require('./assets/user.png')}
              style={styles.avatarImage}
            />
          </View>
          <Text style={styles.profileTitle}>Tidak ada akun</Text>
          <Text style={styles.profileSubtitle}>Belum Terverifikasi</Text>
        </View>

        <View style={styles.actionContainer}>
          <Pressable style={styles.primaryButton}>
            <Text style={styles.buttonText}>Masuk</Text>
          </Pressable>

          <Text style={styles.dividerText}>Atau</Text>

          <Pressable style={styles.primaryButton}>
            <Text style={styles.buttonText}>Daftar</Text>
          </Pressable>
        </View>
      </View>

      <View style={[styles.bottomTab, { paddingBottom: Math.max(insets.bottom, 8) }]}>
        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Beranda</Text>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>🗺️</Text>
          <Text style={styles.tabLabel}>Peta</Text>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <Text style={styles.tabIcon}>✒️</Text>
          <Text style={styles.tabLabel}>Usul</Text>
        </Pressable>

        <Pressable style={styles.tabItem}>
          <Text style={[styles.tabIcon, styles.activeTabColor]}>👤</Text>
          <Text style={[styles.tabLabel, styles.activeTabColor]}>Profil</Text>
          <View style={styles.activeDot} />
        </Pressable>
      </View>
    </View>
  );
}

export default function ProfilScreen() {
  return (
    <SafeAreaProvider>
      <ProfilContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    backgroundColor: '#2D6A4F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backBtn: {
    padding: 2,
  },
  backIcon: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconBtn: {
    padding: 4,
  },
  topIconImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    justifyContent: 'flex-start',
  },
  profileBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 24,
    marginBottom: 20,
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  profileTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  profileSubtitle: {
    fontSize: 14,
    color: '#64748B',
  },
  actionContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: '#F3C653',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dividerText: {
    fontSize: 13,
    color: '#64748B',
    marginVertical: 18,
    fontWeight: '500',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabIcon: {
    fontSize: 16,
    color: '#64748B',
  },
  tabLabel: {
    fontSize: 10,
    color: '#64748B',
    marginTop: 2,
    fontWeight: '500',
  },
  activeTabColor: {
    color: '#2D6A4F',
    fontWeight: 'bold',
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2D6A4F',
    marginTop: 2,
  },
});