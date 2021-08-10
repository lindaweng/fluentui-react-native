import { IRenderData } from '@uifabricshared/foundation-composable';
import { IButtonProps, IButtonTokens, IButtonState } from '@fluentui-react-native/button';

export const floatingActionButtonName = 'FloatingActionButton';

/**
 * Button takes care of Accent/Primary, Subtle/Stealth styles
 */

/**
 * FAB always has an icon, icon field should be required, not optional
 * Should it though?
 */

type FloatingActionButtonSize = 'small' | 'large';
export interface IFloatingActionButtonProps extends IButtonProps {
  /**
   * Size of the FAB: either 'small' or 'large'
   * fontSize of large: 17, fontSize of small: 15
   * @default 'large'
   */
  FloatingActionButtonsize?: FloatingActionButtonSize;
}

export interface IFloatingActionButtonTokens extends IButtonTokens, IFloatingActionButtonProps {}

export interface IFloatingActionButtonSlotProps {
  root: IFloatingActionButtonProps;
}

export type IFloatingActionButtonRenderData = IRenderData<IFloatingActionButtonSlotProps, IButtonState>;

export interface IFloatingActionButtonType {
  props: IFloatingActionButtonProps;
  tokens: IFloatingActionButtonTokens;
  slotProps: IFloatingActionButtonSlotProps;
  state: IButtonState;
}
