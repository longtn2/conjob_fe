import { forwardRef } from 'react';
import * as N from './BaseButton.styled';
import { Button as AntButton, ButtonProps } from 'antd';

export const BaseButton = forwardRef<HTMLElement, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <N.Button ref={forwardedRef} className={className} {...props}>
      {children}
    </N.Button>
  )
);
