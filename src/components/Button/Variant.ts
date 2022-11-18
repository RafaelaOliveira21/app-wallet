import { useTheme } from 'styled-components';

const { COLORS } = useTheme();

interface ButtonStyle {
  button: {
    backgroundColor: string;
    borderWith?: number;
    borderColor?: string;
  };
  title: {
    color: string;
  };
  icon: {
    color: string;
  };
}

export interface ButtonVariant {
  enabled: ButtonStyle;
  disabled: ButtonStyle;
}

const buttonPrimary: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: COLORS.PINK6
    },
    title: {
      color: COLORS.WHITE
    },
    icon: {
      color: COLORS.WHITE
    }
  },
  disabled: {
    button: {
      backgroundColor: COLORS.GRAY_100
    },
    title: {
      color: COLORS.WHITE
    },
    icon: {
      color: COLORS.WHITE
    }
  }
};

const buttonOutline: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: 'transparent',
      borderWith: 2,
      borderColor: COLORS.PINK6
    },
    title: {
      color: COLORS.GRAY1
    },
    icon: {
      color: COLORS.GRAY1
    }
  },
  disabled: {
    button: {
      backgroundColor: 'transparent',
      borderWith: 2,
      borderColor: COLORS.PINK6
    },
    title: {
      color: COLORS.GRAY1
    },
    icon: {
      color: COLORS.GRAY1
    }
  }
};

const buttonBlack: ButtonVariant = {
  enabled: {
    button: {
      backgroundColor: COLORS.BLACK
    },
    title: {
      color: COLORS.GRAY1
    },
    icon: {
      color: COLORS.GRAY1
    }
  },
  disabled: {
    button: {
      backgroundColor: COLORS.GRAY_100
    },
    title: {
      color: COLORS.ORANGE1
    },
    icon: {
      color: COLORS.ORANGE1
    }
  }
};

export const variants = {
  primary: buttonPrimary,
  outline: buttonOutline,
  black: buttonBlack
};
