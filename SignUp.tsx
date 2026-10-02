import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function RegisterContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* Gambar PNG Background Layar */}
      <Image
        source={require('./assets/background2.jpeg')} // Sesuaikan path background PNG kamu
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* Header Back Button */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Pressable style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: Math.max(insets.bottom, 24) },
        ]}>
        {/* Gambar PNG KOTAKU */}
        <View style={styles.brandingContainer}>
          <Image
            source={require('./assets/title.png')} // Sesuaikan path PNG logo/tulisan KOTAKU kamu
            style={styles.kotakuImage}
          />
          <Text style={styles.appDescription}>
            Buat akun baru untuk mulai berpartisipasi dalam pembangunan kota
            yang lebih cerdas.
          </Text>
        </View>

        {/* Form Card (Input Statis dengan <Text>) */}
        <View style={styles.formCard}>
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Nama Lengkap</Text>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>
                Masukkan nama lengkap Anda
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email</Text>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>contoh@email.com</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>No. Telp</Text>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>0812xxxx</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Alamat</Text>
            <View style={[styles.staticInputBox, styles.addressBox]}>
              <Text style={styles.placeholderText}>
                Masukkan alamat lengkap
              </Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>••••••••</Text>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Konfirmasi Password</Text>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>••••••••</Text>
            </View>
          </View>

          <Pressable style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Daftar Sekarang</Text>
          </Pressable>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Sudah punya akun? <Text style={styles.loginText}>Masuk</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default function RegisterScreen() {
  return (
    <SafeAreaProvider>
      <RegisterContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
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
  header: {
    paddingHorizontal: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  backIcon: {
    fontSize: 24,
    color: '#0F172A',
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  brandingContainer: {
    marginBottom: 20,
  },
  kotakuImage: {
    width: 160,
    height: 45,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  appDescription: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },
  formCard: {
    width: '100%',
    backgroundColor: '#FFFDF0',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#FEF08A',
  },
  inputGroup: {
    marginBottom: 14,
  },
  inputLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 6,
  },
  staticInputBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  addressBox: {
    height: 90,
    justifyContent: 'flex-start',
  },
  placeholderText: {
    fontSize: 13,
    color: '#94A3B8',
  },
  submitButton: {
    backgroundColor: '#F3C653',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 6,
  },
  footerText: {
    fontSize: 13,
    color: '#475569',
  },
  loginText: {
    color: '#2D6A4F',
    fontWeight: 'bold',
  },
});