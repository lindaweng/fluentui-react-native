import { IButtonType } from '../Button.types';
import { IComposeSettings } from '@uifabricshared/foundation-compose';

export const settings: IComposeSettings<IButtonType> = [
  {
    tokens: {
      backgroundColor: 'primaryButtonBackground',
      color: 'primaryButtonText',
      borderColor: 'primaryButtonBorder',
      borderRadius: 100,
    },
    root: {
      style: {
        shadowColor: '#000000', // shadows work
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
        minHeight: 48,
        minWidth: 48,
      },
    },
    content: {
      style: {
        fontSize: 30, // gets overridden by Button.tokens.content.ts
        height: 50,
      },
    },
    icon: {
      color: 'orange', // should be white when light and black when dark
    },
    stack: {
      style: {
        paddingVertical: 50, // gets overridden by Button.tokens.stack.ts
      },
    },
    _overrides: {
      disabled: {
        tokens: {
          backgroundColor: 'primaryButtonBackgroundDisabled',
          color: 'primaryButtonTextDisabled',
          borderColor: 'primaryButtonBackgroundDisabled',
        },
      },
      hovered: {
        tokens: {
          backgroundColor: 'primaryButtonBackgroundHovered',
          color: 'primaryButtonTextHovered',
          borderColor: 'primaryButtonBorderHovered',
        },
      },
      pressed: {
        tokens: {
          backgroundColor: 'primaryButtonBackgroundPressed',
          color: 'primaryButtonTextPressed',
          borderColor: 'primaryButtonBorderPressed',
        },
      },
      focused: {
        tokens: {
          borderColor: 'primaryButtonBorderFocused',
          backgroundColor: 'primaryButtonBackgroundHovered',
          color: 'primaryButtonTextHovered',
        },
      },
    },
  },
  'FloatingActionButton',
];
