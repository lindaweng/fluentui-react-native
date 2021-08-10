import { floatingActionButtonName, IFloatingActionButtonType } from './FloatingActionButton.types';
import { IComposeSettings } from '@uifabricshared/foundation-compose';

export const settings: IComposeSettings<IFloatingActionButtonType> = [
  {
    tokens: {
      // colors somehow conflict with the Button colors
      // don't need colors here anyway since PrimaryButton colors takes care of it
      // backgroundColor: 'buttonBackground',
      // color: 'buttonText',
      // borderColor: 'buttonBorder',

      // pressed color gets lighter, should be getting darker
      size: 'large',
      borderWidth: 1,
      borderRadius: 100, // large value to get rounded corners no matter the width
    },
    root: {
      style: {
        // can add 2 shadows once shadowProps come out
        shadowColor: '#000000',
        shadowOpacity: 0.14,
        shadowRadius: 8,
        shadowOffset: {
          width: 0,
          height: 4,
        },
      },
    },
    _precedence: ['hovered', 'focused', 'pressed', 'disabled'],
    _overrides: {
      disabled: {
        tokens: {
          // backgroundColor: 'buttonBackgroundDisabled',
          // color: 'buttonTextDisabled',
          // borderColor: 'buttonBorderDisabled',
          // shadows are different for other states vs rest state
        },
        root: {
          style: {
            shadowColor: '#000000',
            shadowOpacity: 0.14,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          },
        },
      },
      hovered: {
        tokens: {
          // backgroundColor: 'buttonBackgroundHovered',
          // color: 'buttonTextHovered',
          // borderColor: 'buttonBorderHovered',
        },
        root: {
          style: {
            shadowColor: '#000000',
            shadowOpacity: 0.14,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          },
        },
      },
      pressed: {
        tokens: {
          // backgroundColor: 'buttonBackgroundPressed',
          // color: 'buttonTextPressed',
          // borderColor: 'buttonPressedBorder',
        },
        root: {
          style: {
            shadowColor: '#000000',
            shadowOpacity: 0.14,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          },
        },
      },
      focused: {
        tokens: {
          // borderColor: 'buttonBorderFocused',
          // color: 'buttonTextHovered',
          // backgroundColor: 'buttonBackgroundHovered',
        },
        root: {
          style: {
            shadowColor: '#000000',
            shadowOpacity: 0.14,
            shadowRadius: 2,
            shadowOffset: {
              width: 0,
              height: 1,
            },
          },
        },
      },
    },
  },
  floatingActionButtonName,
];
