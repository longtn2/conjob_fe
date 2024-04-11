import React from "react";
import {
  Button as AntButton,
  ButtonProps as AntButtonProps,
  Button,
} from "antd";
import type { Severity } from "interfaces/interfaces";
import { BtnContainer } from "./CustomButton.styled";

interface BaseButtonProps extends AntButtonProps {
  severity?: Severity;
  noStyle?: boolean;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
  severity,
  noStyle,
  children,
  ...props
}) => (
  <BtnContainer>
    <AntButton className="custom-button-content" {...props}>
      {children}
    </AntButton>
  </BtnContainer>
);
