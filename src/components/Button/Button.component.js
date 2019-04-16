import React from 'react';
import styled from 'styled-components';
import { elements } from '../../styles/elements';

export const Button = styled.button`
  background-color: ${elements.button.default_background_color};
  height: ${elements.button.default_height};
  width: ${elements.button.default_width};
  font-weight: ${elements.button.default_font_weight};
  border: 1px solid ${elements.button.default_border_color};
  border-radius: 3px;
  box-shadow: ${elements.button.default_box_shadow};
  cursor: pointer;
  :hover {
  background-color: ${elements.button.default_background_hover_color};
  border: ${elements.button.default_background_hover_color};
  }
  :disabled, :disabled:hover {
    cursor: not-allowed;
    border-color: ${elements.button.disabled_background_color};
    background-color: ${elements.button.disabled_background_color};
    color: ${elements.button.disabled_text_color};
  }
`;
