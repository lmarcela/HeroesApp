import React from "react";
import { mount, shallow } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import "@testing-library/jest-dom";
import { DashBoardRoutes } from "../../routers/DashBoardRoutes";
import { MemoryRouter } from "react-router-dom";

describe("Pruebas en <DashboardRoutes />", () => {
  test("debe de mostrarse correctamente", () => {
    const contextValue = {
      dispatch: jest.fn(),
      user: {
        logged: true,
        name: 'Lina'
      },
    };

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <DashBoardRoutes />
        </MemoryRouter>
      </AuthContext.Provider>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('Lina');
  });

  /* test("debe de mostrar el componente marvel si esta autenticado", () => {
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
  }); */
});
