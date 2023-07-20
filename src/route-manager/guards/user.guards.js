import { Component } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../api/helper";
import { selectCurrentUserProfile } from "../../redux/profile/profile.selector";
import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import CompanyLayout from '../../layouts/CompanyLayout';
import Login from "../../views/auth/Login";

const UserGuard = ({ userProfile }) => {
    return userProfile && userProfile?.role == 1 ? <Outlet /> : <Login />
};


const mapStateToProps = createStructuredSelector({
    userProfile: selectCurrentUserProfile,
});

export default connect(mapStateToProps, null)(UserGuard)