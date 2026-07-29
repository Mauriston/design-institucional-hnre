/**
 * HNRe — Tema institucional (MIV MB, dez/2025) para React / React Native.
 * Cores institucionais são imutáveis. Estados funcionais (success/warning/danger/info)
 * são de UI e NUNCA se aplicam à marca. Nomes de fonte dependem do registro dos
 * arquivos licenciados no projeto — não redistribuir fontes sem autorização.
 */
export const hnreTheme = {
  colors: {
    brand: {
      navy: "#050F41",   // Azul Marinha — dominante
      gold: "#FAB932",   // Amarelo Ouro — acento/foco
      green: "#079551",  // Verde Brasil — confirmação/positivo
      white: "#FFFFFF",
      black: "#000000",
    },
    background: "#FFFFFF",
    surface: "#FFFFFF",
    surfaceSubtle: "rgba(5, 15, 65, 0.04)",
    surfaceMuted: "rgba(5, 15, 65, 0.08)",
    border: "rgba(5, 15, 65, 0.16)",
    borderStrong: "rgba(5, 15, 65, 0.32)",
    text: "#050F41",
    textMuted: "rgba(5, 15, 65, 0.72)",
    textDisabled: "rgba(5, 15, 65, 0.46)",
    onBrand: "#FFFFFF",
    // Estados funcionais (UI, não institucionais):
    success: "#079551",
    warning: "#9A6700",
    danger: "#B42318",
    info: "#175CD3",
    focus: "#FAB932",
  },
  typography: {
    displayFamily: "OctinCollege-Bold",
    displayFallback: "BebasNeuePro-Bold",
    bodyFamily: "Montserrat-Regular",
    bodyMedium: "Montserrat-Medium",
    bodySemibold: "Montserrat-SemiBold",
    bodyBold: "Montserrat-Bold",
    sizes: {
      caption: 12,
      small: 14,
      body: 16,
      bodyLarge: 18,
      title: 18,
      h3: 20,
      h2: 24,
      h1: 28,
      display: 32,
    },
    lineHeights: {
      caption: 16,
      small: 20,
      body: 24,
      bodyLarge: 28,
      title: 24,
      h3: 26,
      h2: 30,
      h1: 34,
      display: 36,
    },
  },
  spacing: { 1: 4, 2: 8, 3: 12, 4: 16, 6: 24, 8: 32, 12: 48, 16: 64 },
  radius: { small: 4, medium: 8, large: 12, pill: 999 },
  control: { minHeight: 48, touchTarget: 48 },
  motion: {
    durationFast: 120,
    durationBase: 200,
    durationSlow: 300,
  },
} as const;

export type HnreTheme = typeof hnreTheme;
