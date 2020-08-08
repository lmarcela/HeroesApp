import React from "react";
import { mount } from "enzyme";
import "@testing-library/jest-dom";
import { MemoryRouter, Router, Route } from "react-router-dom";
import { HeroScreen } from "../../../components/heroes/HeroScreen";

describe("Pruebas en <HeroScreen />", () => {
    
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
      };

  test("debe de mostrar el componente redirect si no hay argumentos en el URL correctamente", () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero"]}>
        <HeroScreen history={history} />
      </MemoryRouter>
    );
    expect(wrapper.find("Redirect").exists()).toBe(true);
  });

  test("debe de mostrar un heroe si el parametro existe y se encuentra", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-captain"]}>
        <Route path="/hero/:heroeId" component={HeroScreen} />
      </MemoryRouter>
    );
    expect(wrapper.find(".row").exists()).toBe(true);
  });

  test("debe de regresar a la pantalla anterior con Push", () => {
    const history = {
      length: 1,
      push: jest.fn(),
      goBack: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-captain"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(history.push).toHaveBeenCalledWith("/");
    expect(history.goBack).not.toHaveBeenCalled();
  });

  test("debe de regresar a la pantalla anterior GoBack", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-captain"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );
    wrapper.find("button").prop("onClick")();
    expect(history.push).not.toHaveBeenCalled();
    expect(history.goBack).toHaveBeenCalled();
  });

  test("debe de llamar el Redirect si el heroe no existe", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/hero/marvel-captainyffnffk"]}>
        <Route
          path="/hero/:heroeId"
          component={(props) => <HeroScreen history={history} />}
        />
      </MemoryRouter>
    );
    expect(wrapper.text()).toBe('');
  });
});
