import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  StatusBar,
  Image,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function LoginContent() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />

      {/* 1. Gambar PNG Background Layar */}
      <Image
        source={require('./assets/background2.jpeg')} // Ganti dengan path PNG background login kamu
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      {/* 2. Header Back Button */}
      <View style={[styles.header, { paddingTop: insets.top + 10 }]}>
        <Pressable style={styles.backBtn}>
          <Text style={styles.backIcon}>←</Text>
        </Pressable>
      </View>

      <View style={styles.contentContainer}>
        {/* 3. Gambar PNG Logo / Tulisan KOTAKU */}
        <View style={styles.brandingContainer}>
          <Image
            source={require('./assets/title.png')} // Ganti dengan path PNG logo/tulisan KOTAKU kamu
            style={styles.kotakuImage}
          />
          <Text style={styles.appTagline}>Pelayanan Publik Digital</Text>
        </View>

        {/* 4. Form Card (Input Statis Tanpa TextInput) */}
        <View style={styles.formCard}>
          {/* Email Box */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>nama@email.com</Text>
            </View>
          </View>

          {/* Password Box */}
          <View style={styles.inputGroup}>
            <View style={styles.passwordHeader}>
              <Text style={styles.inputLabel}>Password</Text>
              <Pressable>
                <Text style={styles.forgotPasswordText}>Lupa Password?</Text>
              </Pressable>
            </View>
            <View style={styles.staticInputBox}>
              <Text style={styles.placeholderText}>••••••••</Text>
            </View>
          </View>

          {/* Button Masuk */}
          <Pressable style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Masuk</Text>
          </Pressable>
        </View>

        {/* 5. Footer Link */}
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Belum punya akun?{' '}
            <Text style={styles.registerText}>Daftar</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default function LoginScreen() {
  return (
    <SafeAreaProvider>
      <LoginContent />
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
    color: '#2D6A4F',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
  },
  brandingContainer: {
    alignItems: 'center',
    marginBottom: 28,
  },
  kotakuImage: {
    width: 180, // Ukuran lebar gambar KOTAKU
    height: 70,  // Ukuran tinggi gambar KOTAKU
    resizeMode: 'contain',
  },
  appTagline: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
  formCard: {
    width: '100%',
    backgroundColor: '#FAF8EE',
    borderRadius: 24,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  inputGroup: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 8,
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPasswordText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2D6A4F',
  },
  staticInputBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 14,
    color: '#94A3B8',
  },
  submitButton: {
    backgroundColor: '#F3C653',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 24,
  },
  footerText: {
    fontSize: 14,
    color: '#475569',
  },
  registerText: {
    color: '#2D6A4F',
    fontWeight: 'bold',
  },
});