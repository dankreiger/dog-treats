/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import styled, { css } from 'styled-components';

export const HeaderMobileMenuWrapperSt = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
export const HeaderDesktopItemsWrapperSt = styled.div``;
export const HeaderWrapperSt = styled.header`
  display: flex;
  align-items: center;
  position: ${({ headerFixedTop }) => (headerFixedTop ? 'fixed' : 'sticky')};
  top: 0;
  left: 0;
  height: ${({ mobileWrapperHeight }) => `${mobileWrapperHeight}px`};
  padding: ${({ mobileWrapperPadding }) => mobileWrapperPadding};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  ${HeaderDesktopItemsWrapperSt} {
    display: none;
  }
  ${({ desktopMenuMinWidth }) =>
    css`
      @media (min-width: ${desktopMenuMinWidth}px) {
        height: ${({ wrapperHeight }) => `${wrapperHeight}px`};
        padding: ${({ wrapperPadding }) => wrapperPadding};
        ${HeaderMobileMenuWrapperSt} {
          display: none;
        }
        ${HeaderDesktopItemsWrapperSt} {
          display: flex;
          width: 100%;
          height: 100%;
          justify-content: space-between;
          align-items: center;
        }
      }
    `}
`;

export const HeaderBurgerWrapperSt = styled.div`
  z-index: 1;
`;

export const HeaderMobileOverlaySt = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  pointer-events: ${({ mobileMenuToggled }) =>
    mobileMenuToggled ? 'auto' : 'none'};

  opacity: ${({ mobileMenuToggled }) => (mobileMenuToggled ? '1' : '0')};
  transform: ${({ mobileMenuToggled }) =>
    !mobileMenuToggled && 'translate3d(100%, 0px, 0px)'};
  transition: ${({ mobileMenuToggled }) =>
    mobileMenuToggled
      ? 'opacity 0.3s ease 0s'
      : 'opacity 0.3s ease 0s, transform 0s ease 0.3s'};
`;

export const HeaderMobileMenuSt = styled.div`
  background-color: ${({ mobileMenuBackgroundColor }) =>
    mobileMenuBackgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  height: 100vh;
  top: 0;
  left: 0;
  padding-top: ${({ mobileWrapperHeight }) => `${mobileWrapperHeight}px`};

  transform: ${({ mobileMenuToggled }) =>
    !mobileMenuToggled
      ? 'translate3d(-200%, 0px, 0px)'
      : 'translate3d(0%, 0px, 0px)'};
  transition: transform 0.3s ease;

  position: fixed;
`;

export const HeaderLogoSt = styled.div``;

export const HeaderSpacerSt = styled.div`
  flex-grow: 1;
`;
export const HeaderItemsSt = styled.div`
  display: flex;
`;

export const MobileHeaderItemSt = styled.div`
  margin-bottom: 20px;
`;

export const HeaderItemSt = styled.div`
  padding: 0 10px;
  &:last-child {
    padding-right: 0px;
  }
`;
