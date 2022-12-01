import { Country } from 'entitles/Country';
import { Currency } from 'entitles/Currency';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateError,
    profileActions,
    ProfileCard,
    profileReducer,
    ValidateProfileError,
} from 'entitles/Profile';
import { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { validate } from 'schema-utils';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDidpatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { TextTheme, Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/Page';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;

    const dispatch = useAppDidpatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateError);
    const { id } = useParams<{ id: string }>();

    const { t } = useTranslation('profile');

    const validateErrorTranslations = {
        [ValidateProfileError.SERVER_ERROR]: t(
            'Проблемы с подключением к серверу'
        ),
        [ValidateProfileError.INCORECT_USER_AGE]: t('Не корректный возраст'),
        [ValidateProfileError.INCORECT_USER_COUNTRY]: t('Не корректная страна'),
        [ValidateProfileError.INCORECT_USER_DATA]: t(
            'Не корректные имя или фамилия'
        ),
        [ValidateProfileError.NO_DATA]: t('Отсутствует подключение к серверу'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch]
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch]
    );

    const onChangeAge = useCallback(
        (value?: number | string) => {
            // eslint-disable-next-line no-restricted-globals
            if (!isNaN(Number(value))) {
                dispatch(
                    profileActions.updateProfile({ age: Number(value || 0) })
                );
            }
        },
        [dispatch]
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch]
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch]
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch]
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch]
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch]
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack gap="16" max>
                    <ProfilePageHeader />
                    {validateErrors?.length &&
                        validateErrors.map((err) => (
                            <Text
                                key={err}
                                theme={TextTheme.ERROR}
                                text={validateErrorTranslations[err]}
                            />
                        ))}
                    <ProfileCard
                        data={formData}
                        error={error}
                        isLoading={isLoading}
                        readonly={readonly}
                        onChangeFirstname={onChangeFirstname}
                        onChangeLastname={onChangeLastname}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeAvatar={onChangeAvatar}
                        onChangeUsername={onChangeUsername}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
