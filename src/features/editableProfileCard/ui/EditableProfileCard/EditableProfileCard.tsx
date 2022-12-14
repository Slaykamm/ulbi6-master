import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from '@/entitles/Currency';
import { Country } from '@/entitles/Country';
import { useAppDidpatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ProfileCard } from '@/entitles/Profile';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
// import {
//     getProfileError,
//     getProfileForm,
//     getProfileIsLoading,
//     getProfileReadonly,
//     getProfileValidateError,
//     ValidateProfileError,
// } from '../../../editableProfileCard';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    ValidateProfileError,
} from '../..';
// import { ValidateProfileError } from '@/features/editableProfileCard/model/types/editableProfileCardSchema';
// import { getProfileForm } from '@/features/editableProfileCard/model/selectors/getProfileForm/getProfileForm';
// import { getProfileError } from '@/features/editableProfileCard/model/selectors/getProfileError/getProfileError';
// import { getProfileReadonly } from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
// import { getProfileIsLoading } from '@/features/editableProfileCard/model/selectors/getProfileIsLoading/getProfileIsLoading';
// import { getProfileValidateError } from '@/features/editableProfileCard/model/selectors/getProfileValidateError/getProfileValidateError';

interface EditableProfileCardProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { id, className } = props;
    const { t } = useTranslation('profile');

    const validateErrorTranslations = {
        [ValidateProfileError.SERVER_ERROR]: t(
            '???????????????? ?? ???????????????????????? ?? ??????????????',
        ),
        [ValidateProfileError.INCORECT_USER_AGE]: t('???? ???????????????????? ??????????????'),
        [ValidateProfileError.INCORECT_USER_COUNTRY]: t('???? ???????????????????? ????????????'),
        [ValidateProfileError.INCORECT_USER_DATA]: t(
            '???? ???????????????????? ?????? ?????? ??????????????',
        ),
        [ValidateProfileError.NO_DATA]: t('?????????????????????? ?????????????????????? ?? ??????????????'),
    };

    const dispatch = useAppDidpatch();

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = []; // useSelector(getProfileValidateError);

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ first: value || '' }));
        },
        [dispatch],
    );

    const onChangeLastname = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ lastname: value || '' }));
        },
        [dispatch],
    );

    const onChangeAge = useCallback(
        (value?: number | string) => {
            // eslint-disable-next-line no-restricted-globals
            if (!isNaN(Number(value))) {
                dispatch(
                    profileActions.updateProfile({ age: Number(value || 0) }),
                );
            }
        },
        [dispatch],
    );

    const onChangeCity = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ city: value || '' }));
        },
        [dispatch],
    );

    const onChangeAvatar = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ avatar: value || '' }));
        },
        [dispatch],
    );

    const onChangeUsername = useCallback(
        (value?: string) => {
            dispatch(profileActions.updateProfile({ username: value || '' }));
        },
        [dispatch],
    );

    const onChangeCurrency = useCallback(
        (currency: Currency) => {
            dispatch(profileActions.updateProfile({ currency }));
        },
        [dispatch],
    );

    const onChangeCountry = useCallback(
        (country: Country) => {
            dispatch(profileActions.updateProfile({ country }));
        },
        [dispatch],
    );

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" className={classNames('', {}, [className])} max>
                <EditableProfileCardHeader />
                {/* {validateErrors?.length
                    && validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslations[err]}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))} */}
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
        </DynamicModuleLoader>
    );
});
