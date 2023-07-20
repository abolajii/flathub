import React, { useEffect } from "react";
import "./assets/css/main.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import routes, { renderRoutes } from "./routes";
// import Home from './views/statics';
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Dashboard from "./views/company/Dashboard";
import CompanyProfile from "./views/company/CompanyProfile";
import Landlord from "./views/company/landlord";
import AddLandlord from "./views/company/landlord/AddLandlord";
import PostProperty from "./views/company/property/PostProperty";
import UserLayout from "./layouts/UserLayout";
import PropertyList from "./views/company/property/PropertyList";
import Tenants from "./views/company/tenants";
import Rents from "./views/company/rents";
import Profile from "./views/account/profile";
import ProfileAdd from "./views/account/profile/AddProfile";
import ApartmentAdd from "./views/account/apartment/AddFutureApartment";
import EmploymentAdd from "./views/account/employment/AddEmployment";
import CompanyGuard from "./route-manager/guards/company.guards";
import UserGuards from "./route-manager/guards/user.guards";
import GuestGuards from "./route-manager/guards/guest.guards";
import { useDispatch } from "react-redux";
import { getUser } from "./redux/profile/profileSlice";
import NotFoundView from "./views/errors/NotFoundView";
import CompanyLayout from "./layouts/CompanyLayout";
import SubscriptionPlans from "./views/company/subscription/plans";
import Home from "./views/home/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<GuestGuards />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<CompanyGuard />}>
          <Route
            path="/company/dashboard"
            element={
              <CompanyLayout>
                <Dashboard />
              </CompanyLayout>
            }
          />
          <Route
            path="/company/landlord"
            element={
              <CompanyLayout>
                <Landlord />
              </CompanyLayout>
            }
          />
          <Route
            path="/company/landlord/add"
            element={
              <CompanyLayout>
                <AddLandlord />
              </CompanyLayout>
            }
          />
          <Route
            path="/company/property/post"
            element={
              <CompanyLayout>
                <PostProperty />
              </CompanyLayout>
            }
          />
          <Route
            path="/company/property"
            element={
              <CompanyLayout>
                <PropertyList />
              </CompanyLayout>
            }
          />
          <Route
            path="/company/tenant"
            element={
              <CompanyLayout>
                <Tenants />
              </CompanyLayout>
            }
          />
          <Route
            path="/company/rent"
            element={
              <CompanyLayout>
                <Rents />
              </CompanyLayout>
            }
          />
          <Route path="/company/subscription" element={<SubscriptionPlans />} />
          <Route
            path="/company/profile"
            element={
              <CompanyLayout>
                <ProfileAdd />{" "}
              </CompanyLayout>
            }
          />
        </Route>

        <Route element={<GuestGuards />}>
          <Route
            path="/user/dashboard"
            element={
              <UserLayout>
                <Profile />{" "}
              </UserLayout>
            }
          />
          <Route
            path="/user/profile"
            element={
              <UserLayout>
                <Profile />{" "}
              </UserLayout>
            }
          />
          <Route
            path="/user/profile/add"
            element={
              <UserLayout>
                <ProfileAdd />{" "}
              </UserLayout>
            }
          />
          <Route
            path="/user/apartment"
            element={
              <UserLayout>
                <ApartmentAdd />{" "}
              </UserLayout>
            }
          />
          <Route
            path="/user/employment/add"
            element={
              <UserLayout>
                <EmploymentAdd />{" "}
              </UserLayout>
            }
          />
        </Route>

        <Route path="*" element={<NotFoundView />} />
      </Routes>
    </Router>
  );
};

export default App;
