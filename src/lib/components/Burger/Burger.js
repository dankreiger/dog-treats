import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { BurgerWrapperSt, TopBunSt, BottomBunSt } from './Burger.styles';

const Burger = ({ burgerColor, burgerWidth, onClick }) => {
  const [active, setActive] = useState(false);

  const handleOnClick = useCallback(() => {
    setActive(!active);
    onClick();
  }, [onClick, active, setActive]);

  return (
    <BurgerWrapperSt
      onClick={handleOnClick}
      burgerWidth={burgerWidth}
      burgerColor={burgerColor}
      active={active}
    >
      <TopBunSt active={active} />
      <BottomBunSt active={active} />
    </BurgerWrapperSt>
  );
};

Burger.propTypes = {
  burgerWidth: PropTypes.string,
  burgerColor: PropTypes.string,
  onClick: PropTypes.func,
};

Burger.defaultProps = {
  burgerWidth: '28px',
  burgerColor: '#000',
  onClick: () => {},
};

export default Burger;
