import React from "react";
import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import "@testing-library/jest-dom";
import { MemoryRouter, Router } from "react-router-dom";
import { Navbar } from "../../components/ui/NavBar";
import { types } from "../../types/types";

describe("Pruebas en <Navbar />", () => {
  const historyMock = {
    push: jest.fn(),
    replace: jest.fn(),
    location: {},
    listen: jest.fn(),
    createHref: jest.fn(),
  };
  const contextValue = {
    dispatch: jest.fn(),
    user: {
      logged: true,
      name: "Linda",
    },
  };

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter>
        <Router history={historyMock}>
          <Navbar />
        </Router>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(".text-info").text().trim()).toBe("Linda");
  });

  test("debe de llamar el logout y usar history", () => {
    wrapper.find("button").prop("onClick")();
    expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    expect(historyMock.replace).toHaveBeenCalledWith("/login");
  });
});
