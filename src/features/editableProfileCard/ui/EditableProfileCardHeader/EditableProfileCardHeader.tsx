import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entitles/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDidpatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import {
    getProfileData,
    getProfileReadonly,
    profileActions,
    updateProfileData,
} from '../..';
// import { getProfileData } from '@/features/editableProfileCard/model/selectors/getProfileData/getProfileData';
// import { getProfileReadonly } from '@/features/editableProfileCard/model/selectors/getProfileReadonly/getProfileReadonly';
// import { profileActions } from '@/features/editableProfileCard/model/slice/ProfileSlice';
// import { updateProfileData } from '@/features/editableProfileCard/model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;

        const { t } = useTranslation();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;
        const readonly = useSelector(getProfileReadonly);

        const dispatch = useAppDidpatch();
        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Text title={t('??????????????')} />
                {canEdit && (
                    <div>
                        {readonly ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditButton"
                            >
                                {t('??????????????????????????')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                >
                                    {t('??????????????????')}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                >
                                    {t('????????????????')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        );
    },
);
