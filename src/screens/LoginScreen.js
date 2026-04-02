// ============================================================
// Tela de Login — Arena Play Quadras
// Tela inicial do app com campos de e-mail e senha.
// A autenticação é simulada (não há validação real).
// ============================================================

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import Colors from '../theme/colors';

export default function LoginScreen({ navigation }) {
  // Estados dos campos de entrada
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função chamada ao pressionar "Entrar"
  // Em um app real, aqui seria feita a autenticação com o backend
  const handleLogin = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert('Atenção', 'Por favor, preencha o e-mail e a senha.');
      return;
    }
    // Navega para a Home sem validação real (projeto acadêmico)
    navigation.replace('Home');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        {/* ---- Logo da empresa ---- */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/logo.jpeg')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* ---- Título ---- */}
        <Text style={styles.titulo}>Bem-vindo!</Text>
        <Text style={styles.subtitulo}>
          Faça login para reservar sua quadra
        </Text>

        {/* ---- Campo de E-mail ---- */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="seuemail@exemplo.com"
            placeholderTextColor={Colors.textLight}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* ---- Campo de Senha ---- */}
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor={Colors.textLight}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        </View>

        {/* ---- Botão Entrar ---- */}
        <TouchableOpacity style={styles.botaoEntrar} onPress={handleLogin}>
          <Text style={styles.botaoEntrarTexto}>Entrar</Text>
        </TouchableOpacity>

        {/* ---- Link de recuperação (decorativo) ---- */}
        <TouchableOpacity style={styles.linkEsqueceu}>
          <Text style={styles.linkTexto}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        {/* ---- Rodapé ---- */}
        <Text style={styles.rodape}>
          Esportes de Areia & Lazer
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// ---- Estilos da tela de Login ----
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 40,
  },

  // Logo
  logoContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logo: {
    width: 180,
    height: 180,
    borderRadius: 20,
  },

  // Textos de boas-vindas
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 15,
    color: Colors.textMedium,
    textAlign: 'center',
    marginBottom: 32,
  },

  // Inputs
  inputContainer: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.textDark,
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.card,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: Colors.textDark,
  },

  // Botão principal
  botaoEntrar: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
    // Sombra sutil
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  botaoEntrarTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },

  // Link decorativo
  linkEsqueceu: {
    alignItems: 'center',
    marginTop: 16,
  },
  linkTexto: {
    color: Colors.secondary,
    fontSize: 14,
  },

  // Rodapé
  rodape: {
    textAlign: 'center',
    color: Colors.textLight,
    fontSize: 12,
    marginTop: 40,
    letterSpacing: 1,
  },
});
