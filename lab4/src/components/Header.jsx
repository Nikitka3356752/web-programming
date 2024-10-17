import { useState, useEffect } from "react";

import headerData from "../mockData/headerData";

// блокируем и разблокируем скролл во время открытия модального окна
const body = document.querySelector("body");
const noOverflow = () => body.classList.add("oh");
const overflow = () => body.classList.remove("oh");

export const Logo = ({ logoData: { alt, href, src } }) => {
  return (
    <div className="header__logo">
      <a href={href} className="logo__link">
        <img className="link__name" src={src} alt={alt} />
      </a>
    </div>
  );
};

export const Burger = ({ isBurgerActive, setIsMenuShown }) => (
  <div
    className={
      isBurgerActive ? "header__burger_menu " : "header__burger_menu hidden"
    }
    onClick={() => {
      setIsMenuShown(true);
      noOverflow();
    }}
  >
    <div className="burger_menu__line"></div>
    <div className="burger_menu__line"></div>
    <div className="burger_menu__line"></div>
  </div>
);

export const MenuItem = ({ menuItemData: { title, href } }) => {
  return (
    <li className="menu__item">
      <a href={href} className="item__link">
        {title}
      </a>
    </li>
  );
};

export const Button = ({ buttonData }) => {
  const { title, href, isPrimary } = buttonData;

  return (
    <a href={href}>
      <button
        className={`cta_buttons__signin btn${isPrimary ? " primary-btn" : ""}`}
      >
        {title}
      </button>
    </a>
  );
};

// функция создания шаблона с параметрами правой части меню
export const RightHeader = ({
  rightHeaderData,
  isBurgerActive,
  isMenuShown,
  setIsMenuShown,
}) => {
  const { menuData, buttonsData } = rightHeaderData;

  return (
    <>
      <div className={isMenuShown ? "header__right" : "header__right hidden"}>
        <aside className="header__menu">
          <div
            className={isBurgerActive ? "menu__close" : "menu__close hidden"}
            onClick={() => {
              setIsMenuShown(false);
              overflow();
            }}
          >
            <div className="menu__line"></div>
            <div className="menu__line"></div>
          </div>
          <ul className="menu">
            {menuData.map((item, index) => (
              <MenuItem key={index} menuItemData={item} />
            ))}
          </ul>
        </aside>
        <div className="cta_buttons">
          {buttonsData.map((button, index) => (
            <Button key={index} buttonData={button} />
          ))}
        </div>
      </div>
    </>
  );
};

const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

  const { logoData, menuData, buttonsData } = headerData;

  useEffect(() => {
    const updateBurgerState = () => {
      const width = window.innerWidth;

      if (width <= 1024) {
        overflow();
        setIsBurgerActive(true);
        setIsMenuShown(false);
        return;
      }

      setIsBurgerActive(false);
      setIsMenuShown(true);
    };

    updateBurgerState();

    // вешаем прослушку события резсайза для обновления состояния бургера
    window.addEventListener("resize", updateBurgerState);

    // возвращаем функцию очистки прослушки на ресайз окна
    return () => {
      window.removeEventListener("resize", updateBurgerState);
    };
  }, []);

  return (
    <>
      <Logo logoData={logoData} />
      <Burger isBurgerActive={isBurgerActive} setIsMenuShown={setIsMenuShown} />
      <RightHeader
        rightHeaderData={{ menuData, buttonsData }}
        isBurgerActive={isBurgerActive}
        isMenuShown={isMenuShown}
        setIsMenuShown={setIsMenuShown}
      />
    </>
  );
};

export default Header;
