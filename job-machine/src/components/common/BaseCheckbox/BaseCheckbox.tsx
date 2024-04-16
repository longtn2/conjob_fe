import React from 'react';
import { CheckboxProps, CheckboxRef } from 'antd';
import { CheckboxCustom } from './BaseCheckbox.styles';

export type BaseCheckboxRef = CheckboxRef;

export type BaseCheckboxProps = CheckboxProps;

const Checkbox = React.forwardRef<BaseCheckboxRef, BaseCheckboxProps>(
  (props, ref) => {
    return <CheckboxCustom {...props} ref={ref} />;
  }
);

type CheckboxForwardRef = typeof Checkbox;

interface BaseCheckboxInterface extends CheckboxForwardRef {
  Group: typeof CheckboxCustom.Group;
}

export const BaseCheckbox = Checkbox as BaseCheckboxInterface;

BaseCheckbox.Group = CheckboxCustom.Group;
