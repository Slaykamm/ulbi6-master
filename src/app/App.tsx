/* eslint-disable react/button-has-type */
/* eslint-disable i18next/no-literal-string */
import { useTheme } from '@/app/providers/ThemeProvider';
import { getUserMounted, userActions } from '@/entitles/User';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    const isUserMounted = useSelector(getUserMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">

                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    {isUserMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
