type MenuOptions = "" | "all" | "dog" | "cat" | "fish";

type MenuObjectProps = {
  all: boolean;
  dog: boolean;
  cat: boolean;
  fish: boolean;
};

export const createMenuObject = (activeMenu: MenuOptions): MenuObjectProps => {
  const menuObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (activeMenu !== "") {
    menuObject[activeMenu] = true;
  }

  return menuObject;
};
