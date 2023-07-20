import { Component, useEffect } from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { getToken } from "../../api/helper";
import { selectCurrentUserProfile } from "../../redux/profile/profile.selector";
import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Login from "../../views/auth/Login";
import CompanyLayout from '../../layouts/CompanyLayout';

const CompanyGuard = ({ userProfile }) => {
    return userProfile && userProfile.role == 2 ? <Outlet /> : <Login />
};

const mapStateToProps = createStructuredSelector({
    userProfile: selectCurrentUserProfile,
});

export default connect(mapStateToProps, null)(CompanyGuard)