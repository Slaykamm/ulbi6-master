import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entitles/User';
import MainIcon from '@/shared/assets/icons/home.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile-20-20.svg';
import ArticleIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { SidebarItemType } from '../types/sidebar';
import {
    getRouteAbout,
    getRouteArticles,
    getRouteMain,
    getRouteProfile,
} from '@/shared/const/router';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная',
            Icon: MainIcon,
        },
        {
            path: getRouteAbout(),
            text: 'О сайте',
            Icon: AboutIcon,
        },
    ];
    if (userData) {
        sidebarItemsList.push(
            {
                // eslint-disable-next-line no-unsafe-optional-chaining
                path: getRouteProfile(userData?.id),
                text: 'Профиль',
                Icon: ProfileIcon,
                authOnly: true,
            },
            {
                path: getRouteArticles(),
                text: 'Статьи',
                Icon: ArticleIcon,
                authOnly: true,
            },
        );
    }
    return sidebarItemsList;
});
