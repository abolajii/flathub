import React, { lazy, Suspense, Fragment } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import HomeView from '../views/statics';
// import {LoadingScreen} from './components/LoadingScreen';
import { AuthGuard } from '../components/AuthGuard';
import { GuestGuard } from '../components/GuestGuard';
import MainLayout from '../layouts/MainLayout';
import CompanyLayout from '../layouts/CompanyLayout';

export const renderRoutes = (routes = []) => (
    <Suspense fallback=" Loading ">
        <Routes>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;
                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        element={props => (
                            <Guard>
                                <Layout>
                                    {route.routes ? (
                                        renderRoutes(route.routes)
                                    ) : (
                                        <Component {...props} />
                                    )}
                                </Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Routes>
    </Suspense>
);

const routes = [
    {
        exact: true,
        path: '/404',
        component: lazy(() => import('../views/errors/NotFoundView')),
    },
    {
        exact: true,
        guard: GuestGuard,
        path: '/login',
        component: lazy(() => import('../views/auth/Login')),
    },
    {
        exact: true,
        guard: GuestGuard,
        path: '/logout',
        component: lazy(() => import('../views/auth/Logout')),
    },
    {
        exact: true,
        guard: GuestGuard,
        // layout: MainLayout,
        path: '/register',
        component: lazy(() => import('../views/auth/Register')),
    },
    {
        path: '/company',
        guard: AuthGuard,
        layout: CompanyLayout,
        routes: [
            {
                exact: true,
                path: '/company',
                component: lazy(() => import('../views/company/Dashboard')),
            },
            {
                exact: true,
                path: '/company/edit',
                component: lazy(() => import('../views/company/CompanyProfile')),
            },
            {
                exact: true,
                path: '/company/post-property',
                component: lazy(() => import('../views/company/property/PostProperty')),
            },

        ],
    },
    {
        path: '*',
        routes: [
            {
                exact: true,
                path: '/',
                component: HomeView,
            },
            {
                component: () => <Navigate to="/404" />,
            },
        ],
    },
];

export default routes;
