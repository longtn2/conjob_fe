import { Ref, forwardRef } from 'react';
import { ContainerButton } from './BaseButton.styled';
import { Button as AntButton, ButtonProps } from 'antd';

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, forwardedRef) => (
    <ContainerButton
      ref={forwardedRef as Ref<HTMLButtonElement>}
      className={className}
      {...props}
    >
      {children}
    </ContainerButton>
  )
);
