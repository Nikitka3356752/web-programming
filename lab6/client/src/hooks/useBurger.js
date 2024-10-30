import { useEffect, useState } from "react";

// блокируем и разблокируем скролл во время открытия модального окна
const body = document.querySelector("body");
export const noOverflow = () => body.classList.add("oh");
export const overflow = () => body.classList.remove("oh");

const useBurger = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);
  const [isMenuShown, setIsMenuShown] = useState(false);

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

  return {
    isBurgerActive,
    isMenuShown,
    setIsBurgerActive,
    setIsMenuShown,
  };
};

export default useBurger;
