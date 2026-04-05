// ============================================================
// Utilidades de responsividade — Arena Play Quadras
// Escala tamanhos relativos à largura do dispositivo.
// Base: iPhone 12/13 (375pt de largura).
// Em web/desktop, limita a largura efetiva para não estourar.
// ============================================================

import { Dimensions, Platform } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const BASE_WIDTH = 375;
const MAX_WIDTH = 500;   // maior celular (~430) + margem
const MIN_WIDTH = 300;   // menor celular viável

// Largura efetiva usada nos cálculos (limitada ao range de celular)
const effectiveWidth = Math.min(Math.max(SCREEN_WIDTH, MIN_WIDTH), MAX_WIDTH);

// Escala proporcional (paddings, margens, dimensões)
export function s(size) {
  return Math.round((effectiveWidth / BASE_WIDTH) * size);
}

// Escala moderada para fontes (cresce menos em telas grandes)
export function fs(size, factor = 0.5) {
  return Math.round(size + (s(size) - size) * factor);
}

export { SCREEN_WIDTH, SCREEN_HEIGHT, effectiveWidth };
