import React from "react";
import { connect } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { getToken } from "../../api/helper";
import { selectCurrentUserProfile } from "../../redux/profile/profile.selector";
import Login from "../../views/auth/Login";
import CompanyLayout from '../../layouts/CompanyLayout';
import UserLayout from '../../layouts/UserLayout';
import Dashboard from "../../views/company/Dashboard";
import Profile from '../../views/account/profile';

const GuestGuard = ({ userProfile }) => {
    console.log(userProfile);
    return !userProfile ? <Outlet /> : userProfile?.role == 2 ? <CompanyLayout><Dashboard /></CompanyLayout> : <UserLayout><Profile /> </UserLayout>
};

const mapStateToProps = createStructuredSelector({
    userProfile: selectCurrentUserProfile,
});

export default connect(mapStateToProps, null)(GuestGuard)