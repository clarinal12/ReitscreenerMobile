import React from "react";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import AuthLoading from "./components/AuthLoading";
import { DrawerNavigator } from "react-navigation";

const Home = DrawerNavigator(
  {
    AuthLoading: { screen: AuthLoading },
    Dashboard: { screen: Dashboard },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);

export default Home;
