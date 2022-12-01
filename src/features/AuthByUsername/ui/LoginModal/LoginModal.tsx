import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { Modal } from 'shared/ui/Modal/ui/Modal';
import LoginForm from '../LoginForm/LoginForm';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
   isOpen: boolean;
   onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const {
        isOpen,
        onClose,
    } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
