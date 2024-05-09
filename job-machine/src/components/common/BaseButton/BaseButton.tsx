import { forwardRef } from 'react';
import { CustomButton } from './BaseButton.styled';
import { ButtonProps } from 'antd';

const buttonSizes = {
  small: { width: '70px', height: '20px' },
  middle: { width: '90px', height: '30px' },
  large: { width: '93px', height: '40px' }
};

export const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'middle', ...props }, forwardedRef) => (
    <CustomButton
      ref={forwardedRef}
      style={{ ...props.style, ...buttonSizes[size] }}
      {...props}
    >
      {children}
    </CustomButton>
  )
);
