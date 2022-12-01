import { getUserAuthData, getUserMounted } from 'entitles/User';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// eslint-disable-next-line no-undef
export function RequireAuth({ children }: { children: JSX.Element}) {
    const auth = useSelector(getUserAuthData);

    const location = useLocation();
    if (!auth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
}
