import { EditableProfileCard } from '@/features/editableProfileCard';
import {
    EditableProfileCardHeader,
} from '@/features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack/VStack/VStack';
import { Text } from '@/shared/ui/Text/Text';
import { Page } from '@/widgets/Page/Page';

interface ProfilePageProps {
    className?: string;
}

export const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profile');


    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
};

export default ProfilePage;
