import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { AuthContext } from "../../../auth/AuthContext";
import { types } from "../../../types/types";

describe("Pruebas en <LoginScreen />", () => {
  const historyMock = {
    replace: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <LoginScreen history={historyMock} />
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de realizar el dispatch y la navegación", () => {
    const click = wrapper.find("button").prop("onClick");
    click();
    expect(contextValue.dispatch).toHaveBeenCalledWith({
      payload: { name: "Marcela" },
      type: types.login,
    });
    expect(historyMock.replace).toHaveBeenCalledWith("/");

    localStorage.setItem("lastPath", "/dc");
    click();
    expect(historyMock.replace).toHaveBeenCalledWith("/dc");
  });
});
