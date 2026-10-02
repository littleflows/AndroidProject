import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function HomeScreenContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" backgroundColor="#2D6A4F" />

      {/* 1. Header / Top Bar */}
      <View style={[styles.topBar, { paddingTop: insets.top + 10 }]}>
        <View style={styles.userInfo}>
          <Image
            source={require('./assets/user.png')}
            style={styles.avatarImage}
          />
          <Text style={styles.headerTitle}>Aspirasi Warga</Text>
        </View>

        <View style={styles.topIcons}>
          <Pressable style={styles.iconBtn}>
            <Image
              source={require('./assets/search.png')}
              style={styles.topIconImage}
            />
          </Pressable>
          <Pressable style={styles.iconBtn}>
            <Image
              source={require('./assets/notification.png')}
              style={styles.topIconImage}
            />
          </Pressable>
        </View>
      </View>

      {/* 2. Main Scroll Content */}
      <View style={styles.contentWrapper}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Banner Ucapan Selamat Datang */}
          <View style={styles.bannerSection}>
            <Text style={styles.mainHeading}>
              Aspirasi Warga, Kota{'\n'}Lebih Baik
            </Text>
            <Text style={styles.subHeading}>
              Mari bersama membangun lingkungan yang lebih cerdas dan transparan.
            </Text>
          </View>

          {/* 4 Menu Utama */}
          <View style={styles.gridContainer}>
            <View style={styles.card}>
              <View style={styles.iconBox}>
                <Text style={styles.cardIcon}>🗺️</Text>
              </View>
              <Text style={styles.cardTitle}>Peta Proyek</Text>
              <Text style={styles.cardSubtitle}>
                Pantau pembangunan real-time
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.iconBox}>
                <Text style={styles.cardIcon}>✋</Text>
              </View>
              <Text style={styles.cardTitle}>Voting Digital</Text>
              <Text style={styles.cardSubtitle}>
                Suarakan pilihan kebijakan
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.iconBox}>
                <Text style={styles.cardIcon}>✒️</Text>
              </View>
              <Text style={styles.cardTitle}>Pengusulan</Text>
              <Text style={styles.cardSubtitle}>
                Kirim ide perbaikan kota
              </Text>
            </View>

            <View style={styles.card}>
              <View style={styles.iconBox}>
                <Text style={styles.cardIcon}>🍕</Text>
              </View>
              <Text style={styles.cardTitle}>Detail Anggaran</Text>
              <Text style={styles.cardSubtitle}>
                Transparansi dana publik
              </Text>
            </View>
          </View>

          {/* SECTION BERITA TERBARU */}
          <View style={styles.newsSection}>
            <View style={styles.newsHeader}>
              <Text style={styles.newsSectionTitle}>Berita Terbaru</Text>
              <Pressable>
                <Text style={styles.seeAllText}>Lihat Semua</Text>
              </Pressable>
            </View>

            {/* Card Berita Utama (Tanpa Badge "UPDATE PROYEK") */}
            <View style={styles.newsCard}>
              <Image
                source={require('./assets/alun-alun.jpg')} // Ganti sesuai file gambar berita kamu
                style={styles.newsImage}
              />
              <View style={styles.newsOverlay}>
                <Text style={styles.newsTitle}>
                  Revitalisasi Alun-Alun Kota Selesai 90%
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* 3. Bottom Navigation Bar */}
      <View style={[styles.bottomTab, { paddingBottom: Math.max(insets.bottom, 10) }]}>
        <Pressable style={styles.tabItem}>
          <Text style={[styles.tabIcon, styles.activeTabColor]}>🏠</Text>
          <Text style={[styles.tabLabel, styles.activeTabColor]}>Beranda</Text>
          <View style={styles.activeDot} />
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
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Profil</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <HomeScreenContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBar: {
    backgroundColor: '#2D6A4F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 14,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarImage: {
    width: 38,
    height: 38,
    borderRadius: 19,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  topIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
  topIconImage: {
    width: 22,
    height: 22,
    resizeMode: 'contain',
    tintColor: '#FFFFFF',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 20,
  },
  bannerSection: {
    marginBottom: 28,
  },
  mainHeading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#0F172A',
    lineHeight: 34,
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
    marginBottom: 28,
  },
  card: {
    backgroundColor: '#FEF9C3',
    width: '47.5%',
    borderRadius: 16,
    padding: 16,
    elevation: 4,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#FDE047',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardIcon: {
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    marginBottom: 6,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#334155',
    lineHeight: 16,
  },
  // Section Berita Terbaru
  newsSection: {
    marginTop: 4,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  newsSectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F172A',
  },
  seeAllText: {
    fontSize: 14,
    color: '#3B82F6',
    fontWeight: '600',
  },
  newsCard: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  newsImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  newsOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.45)', // Overlay gelap transparan agar teks judul terbaca jelas
  },
  newsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 24,
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
    fontSize: 18,
    color: '#64748B',
  },
  tabLabel: {
    fontSize: 11,
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
    marginTop: 3,
  },
});
