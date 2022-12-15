import {
    useState, useRef, MutableRefObject, useEffect, useCallback,
} from 'react';

interface UseMOdalProps {
    onClose?: () => void;
    isOpen?: boolean;
    animationDelay: number;
}

export function useModal(props: UseMOdalProps) {
    const {
        onClose,
        isOpen,
        animationDelay,
    } = props;

    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const timerRef = useRef() as MutableRefObject<
        ReturnType<typeof setTimeout>
    >;

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    // Новые ссылки!!!
    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                close();
            }
        },
        [close],
    );

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        isClosing,
        close,
        isMounted,
    };
}
