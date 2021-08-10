import { IButtonTokens } from './Button.types';
import { TextStyle } from 'react-native';
import { ITextProps } from '@fluentui-react-native/adapters';
import { styleFunction } from '@uifabricshared/foundation-tokens';
import { ITheme } from '@uifabricshared/theming-ramp';

const _contentKeyProps: (keyof IButtonTokens)[] = ['size'];

function _buildContentStyles(tokenProps: IButtonTokens /*, theme: ITheme */): ITextProps {
  const contentStyle: TextStyle = {};
  const { size } = tokenProps;

  // default is 'large'
  contentStyle.fontSize = 17;
  contentStyle.height = 24;
  if (size) {
    // for regular button, not fab
    // fab: fontSize = 15, height = 20
    if (size == 'medium' || size == 'small') {
      contentStyle.fontSize = 13;
      contentStyle.height = 16;
    }
  }

  return { style: contentStyle };
}

export const buildContentStyles = styleFunction<ITextProps, IButtonTokens, ITheme>(_buildContentStyles, _contentKeyProps);
