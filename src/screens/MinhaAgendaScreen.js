// ============================================================
// AgendaScreen.js — Arena Play Quadras
// Exibe as reservas futuras e passadas do usuário (dados mockados).
// ============================================================

import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Colors from '../theme/colors';
import { s, fs } from '../theme/responsive';

// Reservas mockadas do usuário
const minhasReservas = [
  {
    id: '1',
    esporte: 'Beach Tennis',
    icone: '🎾',
    data: '05/04/2026',
    horario: '18:00',
    status: 'Confirmada',
    valor: 'R$ 80,00',
  },
  {
    id: '2',
    esporte: 'Vôlei de Areia',
    icone: '🏐',
    data: '07/04/2026',
    horario: '19:00',
    status: 'Confirmada',
    valor: 'R$ 70,00',
  },
  {
    id: '3',
    esporte: 'Futevôlei',
    icone: '⚽',
    data: '20/03/2026',
    horario: '20:00',
    status: 'Concluída',
    valor: 'R$ 90,00',
  },
];

export default function MinhaAgendaScreen() {
  const proximas = minhasReservas.filter((r) => r.status === 'Confirmada');
  const historico = minhasReservas.filter((r) => r.status === 'Concluída');

  // Renderiza cada card de reserva
  const renderCard = ({ item }) => (
    <View style={[styles.card, item.status === 'Concluída' && styles.cardConcluido]}>
      <Text style={styles.cardIcone}>{item.icone}</Text>
      <View style={styles.cardInfo}>
        <Text style={styles.cardEsporte}>{item.esporte}</Text>
        <Text style={styles.cardDetalhe}>📅 {item.data} às {item.horario}</Text>
        <Text style={styles.cardValor}>{item.valor}</Text>
      </View>
      <View
        style={[
          styles.badge,
          item.status === 'Confirmada' ? styles.badgeAtivo : styles.badgeConcluido,
        ]}
      >
        <Text style={styles.badgeTexto}>{item.status}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Próximas reservas */}
      <Text style={styles.secaoTitulo}>Próximas Reservas</Text>
      {proximas.length === 0 ? (
        <Text style={styles.vazio}>Nenhuma reserva futura.</Text>
      ) : (
        <FlatList
          data={proximas}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          scrollEnabled={false}
        />
      )}

      {/* Histórico */}
      <Text style={[styles.secaoTitulo, { marginTop: s(20) }]}>Histórico</Text>
      {historico.length === 0 ? (
        <Text style={styles.vazio}>Nenhuma reserva anterior.</Text>
      ) : (
        <FlatList
          data={historico}
          keyExtractor={(item) => item.id}
          renderItem={renderCard}
          scrollEnabled={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: s(14),
  },
  secaoTitulo: {
    fontSize: fs(14),
    fontWeight: 'bold',
    color: Colors.textDark,
    marginBottom: s(10),
  },
  vazio: {
    fontSize: fs(12),
    color: Colors.textLight,
    marginBottom: s(10),
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: s(10),
    padding: s(12),
    marginBottom: s(8),
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardConcluido: {
    opacity: 0.65,
  },
  cardIcone: {
    fontSize: fs(24),
    marginRight: s(12),
  },
  cardInfo: {
    flex: 1,
  },
  cardEsporte: {
    fontSize: fs(13),
    fontWeight: 'bold',
    color: Colors.textDark,
  },
  cardDetalhe: {
    fontSize: fs(11),
    color: Colors.textMedium,
    marginTop: s(2),
  },
  cardValor: {
    fontSize: fs(11),
    color: Colors.primary,
    fontWeight: '600',
    marginTop: s(2),
  },
  badge: {
    paddingHorizontal: s(8),
    paddingVertical: s(3),
    borderRadius: s(16),
  },
  badgeAtivo: {
    backgroundColor: '#D4EDDA',
  },
  badgeConcluido: {
    backgroundColor: '#E2E3E5',
  },
  badgeTexto: {
    fontSize: fs(9),
    fontWeight: '600',
    color: Colors.textDark,
  },
});
