/* eslint-disable operator-linebreak */
/* eslint-disable indent */
/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import styled, { css } from 'styled-components';

export const BurgerWrapperSt = styled.div`
  position: relative;
  cursor: pointer;
  width: ${({ burgerWidth }) => burgerWidth};

  height: 28px;
  > div {
    position: absolute;
    display: inline-block;
    width: 28px;
    height: 2px;
    background-color: ${({ burgerColor }) => burgerColor};

    transition: ${({ active }) =>
      active
        ? 'transform 0.3s ease-in-out 0.3s, top 0.3s ease-in-out;'
        : 'transform 0.3s ease-in-out, top 0.3s ease-in-out 0.3s'};
  }
`;

export const TopBunSt = styled.div`
  top: 10px;

  ${({ active }) =>
    active &&
    css`
      top: 15px;
      transform: rotate(-45deg);
    `}
`;
export const BottomBunSt = styled.div`
  top: 19px;
  ${({ active }) =>
    active &&
    css`
      top: 15px;
      transform: rotate(45deg);
    `}
`;
