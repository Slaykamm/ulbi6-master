import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react'
import { Dropdown } from 'shared/ui/Popups';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, isUserAdmin, isUserManager, userActions } from 'entitles/User';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {

    const {
        className,
    } = props

    const dispatch = useDispatch();
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const onLogOut = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const authData = useSelector(getUserAuthData);
    const isAdminPanelAvailable = isAdmin || isManager;

    const { t } = useTranslation();

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames(cls.AvatarDropdown, {}, [className])}
            direction="bottom left"
            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t('Админ'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Профиль'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Выйти'),
                    onClick: onLogOut,
                },
            ]}
            trigger={<Avatar size={30} src={authData.avatar} />}
        />
    )
})