import React from 'react';
import { Modal, ModalProps } from 'antd';

interface BaseModalProps extends ModalProps {
  size?: 'small' | 'medium' | 'large';
}

export enum WidthCategory {
  /** mobile */
  small = 'xs',
  /** tablet */
  medium = 'md',
  /** desktop */
  large = 'xl'
}

export type WidthCategories = Record<WidthCategory, number | string>;
export const modalSizes: WidthCategories = {
  xs: '400px',
  md: '600px',
  xl: '800px'
};

export const BaseModal: React.FC<BaseModalProps> = ({
  size = 'medium',
  children,
  ...props
}) => {
  const modalSize = modalSizes[size];

  return (
    <Modal getContainer={false} width={modalSize} {...props}>
      {children}
    </Modal>
  );
};
