/** @jsx withSlots */
import * as React from 'react';
import {
  IFloatingActionButtonRenderData,
  floatingActionButtonName,
  IFloatingActionButtonType,
  IFloatingActionButtonSlotProps,
  IFloatingActionButtonProps,
} from './FloatingActionButton.types';
import { IButtonState, PrimaryButton } from '@fluentui-react-native/button';
import { compose, IUseComposeStyling } from '@uifabricshared/foundation-compose';
import { ISlots, withSlots } from '@uifabricshared/foundation-composable';
import { settings } from './FloatingActionButton.settings';
import { backgroundColorTokens, borderTokens } from '@fluentui-react-native/tokens';
import { mergeSettings } from '@uifabricshared/foundation-settings';
import { buildRootStyles } from './FloatingActionButton.tokens.root';

export const FloatingActionButton = compose<IFloatingActionButtonType>({
  displayName: floatingActionButtonName,
  usePrepareProps: (userProps: IFloatingActionButtonProps, useStyling: IUseComposeStyling<IFloatingActionButtonType>) => {
    const { icon, content, testID, onClick, disabled, size } = userProps;

    // // set up state
    const state: IButtonState = {
      info: {
        disabled: !!userProps.disabled,
        content: !!content,
        icon: !!icon,
      },
    };

    // grab the styling information, referencing the state as well as the props
    const styleProps = useStyling(userProps, (override: string) => state.info[override] || userProps[override]);

    // create the merged slot props
    const slotProps = mergeSettings<IFloatingActionButtonSlotProps>(styleProps, {
      root: {
        // can we pass content styling down?
        // for fontSize and height
        content,
        testID,
        icon,
        onClick,
        disabled,
        size,
      },
    });

    return { slotProps, state };
  },
  settings,
  render: (Slots: ISlots<IFloatingActionButtonSlotProps>, renderData: IFloatingActionButtonRenderData, ...children: React.ReactNode[]) => {
    const info = renderData.state!.info;
    // console.log(info); // to get rid of info defined but not used warning
    // colors don't match figma, but others are working on this

    // difficulties mainly come down to the differences between regular button and fab and having a way to differentiate down through all the children

    // need to invert colors for icon, this currently happens in Icon.tsx
    // Icon.tsx coloring works for outline and regular button subtle versions, it makes the icon same color as text
    // somehow need to tell Icon.tsx whether this icon is for primary/fab or outline/regular subtle
    // NOTE: icon coloring has special color prop, NOT within style prop
    // Not sure if we have outline vs. fill option for icons supported. This is for default/subtle (outline) vs primary/fab (fill)

    // text sizing and spacing
    // somehow pass sizing down to button
    // regular button font and spacing is good, FAB needs extra work to modify this

    // have not started on this
    // need to add subtle style, this only works if no text
    // do we need to check that?
    // subtle icon coloring need fill vs outline

    return <Slots.root>{children}</Slots.root>;
  },
  slots: {
    root: PrimaryButton,
  },
  styles: {
    root: [backgroundColorTokens, borderTokens, buildRootStyles],
  },
});

export default FloatingActionButton;
