import colors from '../../themes/colors';
import { typography } from '../../themes/typography';

const BASE = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: colors.primaryLight,
};

const BASE_BOLD = {
  fontFamily: typography.bold,
  fontSize: 16,
  color: colors.primaryLight,
};

const BOLD = {
  fontFamily: typography.bold,
  color: colors.primaryLight,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 32,
  },
  h2: {
    ...BOLD,
    fontSize: 28,
  },
  h3: {
    ...BASE_BOLD,
    fontSize: 24,
  },
  h4: {
    ...BASE_BOLD,
    fontSize: 14,
  },
  small: {
    ...BASE,
    fontSize: 12,
  },
};
