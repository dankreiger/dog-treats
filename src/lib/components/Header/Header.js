import React, { useCallback, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import { DefaultItem, DefaultLogo } from './Header.defaults';
import {
  HeaderWrapperSt,
  HeaderMobileMenuWrapperSt,
  HeaderMobileOverlaySt,
  HeaderMobileMenuSt,
  HeaderBurgerWrapperSt,
  HeaderDesktopItemsWrapperSt,
  HeaderLogoSt,
  HeaderItemsSt,
  HeaderItemSt,
  MobileHeaderItemSt,
} from './Header.styles';
import Burger from '../Burger';

const Header = ({
  logo,
  items,
  mobileWrapperHeight,
  mobileWrapperPadding,
  wrapperHeight,
  wrapperPadding,
  backgroundColor,
  color,
  desktopMenuMinWidth,
  burgerMenu,
  mobileMenuBackgroundColor,
  headerFixedTop,
}) => {
  const itemKeys = [];
  useMemo(() => {
    items.forEach(() => itemKeys.push(Math.random()));
  }, [items?.length]);

  const [mobileMenuToggled, toggleMobileMenu] = useState(false);

  const handleToggleMobileMenu = useCallback(() => {
    toggleMobileMenu(!mobileMenuToggled);
  }, [mobileMenuToggled, toggleMobileMenu]);

  const handleCloseMobileMenu = useCallback(() => {
    toggleMobileMenu(false);
  }, [mobileMenuToggled, toggleMobileMenu]);

  return (
    <>
      <HeaderWrapperSt
        headerFixedTop={headerFixedTop}
        backgroundColor={backgroundColor}
        color={color}
        desktopMenuMinWidth={desktopMenuMinWidth}
        mobileWrapperHeight={mobileWrapperHeight}
        mobileWrapperPadding={mobileWrapperPadding}
        wrapperHeight={wrapperHeight}
        wrapperPadding={wrapperPadding}
      >
        <HeaderMobileMenuWrapperSt>
          <HeaderMobileOverlaySt
            mobileMenuToggled={mobileMenuToggled}
            onClick={handleCloseMobileMenu}
          />
          <HeaderMobileMenuSt
            mobileMenuBackgroundColor={mobileMenuBackgroundColor}
            mobileMenuToggled={mobileMenuToggled}
            mobileWrapperHeight={mobileWrapperHeight}
          >
            {items.map((item, i) => (
              <MobileHeaderItemSt key={`${itemKeys[i]}-mobile`}>
                {item}
              </MobileHeaderItemSt>
            ))}
          </HeaderMobileMenuSt>
          {burgerMenu || (
            <HeaderBurgerWrapperSt>
              <Burger
                onClick={handleToggleMobileMenu}
                burgerColor={color}
                openStateFromOutside={mobileMenuToggled}
              />
            </HeaderBurgerWrapperSt>
          )}
        </HeaderMobileMenuWrapperSt>

        <HeaderDesktopItemsWrapperSt>
          <HeaderLogoSt>{logo}</HeaderLogoSt>
          <HeaderItemsSt>
            {items.map((item, i) => (
              <HeaderItemSt key={itemKeys[i]}>{item}</HeaderItemSt>
            ))}
          </HeaderItemsSt>
        </HeaderDesktopItemsWrapperSt>
      </HeaderWrapperSt>
    </>
  );
};

Header.propTypes = {
  logo: PropTypes.node,
  /** Header items */
  items: PropTypes.arrayOf(PropTypes.node),
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  desktopMenuMinWidth: PropTypes.number,
  mobileWrapperHeight: PropTypes.number,
  mobileWrapperPadding: PropTypes.string,
  wrapperHeight: PropTypes.number,
  wrapperPadding: PropTypes.string,
  burgerMenu: PropTypes.node,
  mobileMenuBackgroundColor: PropTypes.string,
  headerFixedTop: PropTypes.bool,
};

Header.defaultProps = {
  logo: <DefaultLogo />,
  items: [
    <DefaultItem key="item-0" text="item 1" />,
    <DefaultItem key="item-1" text="item 2" />,
    <DefaultItem key="item-2" text="item 3" />,
  ],
  desktopMenuMinWidth: 760,
  backgroundColor: '#fff',
  color: '#000',
  mobileWrapperHeight: 72,
  mobileWrapperPadding: '0 16px',
  wrapperHeight: 80,
  wrapperPadding: '0 20px',
  burgerMenu: null,
  mobileMenuBackgroundColor: '#ddd',
  headerFixedTop: false,
};

export default Header;
