import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe("Pruebas en authReducer", () => {
  test("debe de retornar el estado por defecto ", () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test("debe de autenticar y colocar el name del usuario ", () => {
    const state = authReducer(
      { logged: false },
      {
        type: types.login,
        payload: {
          nombre: "Marcela",
        },
      }
    );
    expect(state).toEqual({
      logged: true,
      nombre: "Marcela",
    });
  });

  test("debe de borrar el name del usuario y logged en false ", () => {
    const state = authReducer(
      {
        logged: true,
        nombre: "Marcela",
      },
      {
        type: types.logout,
      }
    );

    expect(state).toEqual({
      logged: false,
    });
  });
});
