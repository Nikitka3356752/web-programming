const initBurger = (headerNode) => {
  // ищем ноды (элементы DOM-дерева) в переданной ноде для их получения и последующих манипуляций
  const burgerNode = headerNode.querySelector(".header__burger_menu");
  const headerMenuNode = headerNode.querySelector(".header__right");
  const closeMenuNode = headerNode.querySelector(".menu__close");
  const bodyNode = document.querySelector("body");

  // блокируем и разблокируем скролл во время открытия модального окна
  const noOverflow = () => bodyNode.classList.add("oh");
  const overflow = () => bodyNode.classList.remove("oh");

  // показываем и скрываем меню
  const showMenu = () => headerMenuNode.classList.remove("hidden");
  const hideMenu = () => headerMenuNode.classList.add("hidden");

  // показываем и скрываем бургер
  const hideBurger = () => {
    burgerNode.classList.add("hidden");
    closeMenuNode.classList.add("hidden");
    showMenu();
    overflow();
  };

  const showBurger = () => {
    burgerNode.classList.remove("hidden");
    closeMenuNode.classList.remove("hidden");
    hideMenu();
    overflow();
  };

  // обновляем состояние бургера при ресайзе окна
  const updateBurgerState = () => {
    const width = window.innerWidth;

    if (width <= 1024) return showBurger();

    return hideBurger();
  };

  // выполняем ресайз окна на старте для получения корректного состояния меню при загрузке страницы
  updateBurgerState();

  // вешаем прослушку события резсайза для обновления состояния бургера
  window.addEventListener("resize", updateBurgerState);

  // обработчик закрытия меню
  const handleCloseMenu = () => {
    overflow();
    hideMenu();
  };

  // обработчик клика на бургер
  const handleBurgerClick = () => {
    if (headerMenuNode.classList.contains("hidden")) {
      noOverflow();
      return showMenu();
    }

    handleCloseMenu();
  };

  // вешаем прослушку клика по бургеру
  burgerNode.addEventListener("click", handleBurgerClick);

  // вешаем прослушку на клик по кнопке "Закрыть меню"
  closeMenuNode.addEventListener("click", handleCloseMenu);
};

export default initBurger;
