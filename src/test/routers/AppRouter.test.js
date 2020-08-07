import React from "react";
import { mount } from "enzyme";
import { AppRouter } from "../../routers/AppRouter";
import { AuthContext } from "../../auth/AuthContext";
import '@testing-library/jest-dom'

describe("Pruebas en <AppRouter />", () => {
  
  test("debe de mostrar el login si no esta autenticado", () => {
    const contextValue = {
      dispatch:jest.fn(),
      user: {
        logged: false
      }
    }
  
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter
        />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar el componente marvel si esta autenticado", () => {
    const contextValue = {
      dispatch:jest.fn(),
      user: {
        name: 'Marcela',
        logged: true
      }
    }
  
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter 
        />
      </AuthContext.Provider>
    );

    expect(wrapper.find('.navbar').exists()).toBe(true);
  });
});
