import { Ref, forwardRef } from 'react';
import * as N from './BaseButton.styled';
import { Button as AntButton, ButtonProps } from 'antd';

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <N.Button
      ref={forwardedRef as Ref<HTMLButtonElement>}
      className={className}
      {...props}
    >
      {children}
    </N.Button>
  )
);
