import React from "react";
import { Navbar } from "../components/ui/NavBar";
import { Switch, Redirect } from "react-router-dom";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { Route } from "react-router-dom";
import { SearchScreen } from "../components/search/SearchScreen";

export const DashBoardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container mt-2'>
        <Switch>
          <Route exact path="/HeroesApp/marvel" component={MarvelScreen} />
          <Route exact path="/HeroesApp/hero/:heroeId" component={HeroScreen} />
          <Route exact path="/HeroesApp/dc" component={DcScreen} />
          <Route exact path="/HeroesApp/search" component={SearchScreen} />
          <Redirect to="/HeroesApp/marvel" />
        </Switch>
      </div>
    </>
  );
};
