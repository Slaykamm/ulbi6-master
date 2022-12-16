import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/entitles/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
