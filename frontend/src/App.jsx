import routes from './routes';
import { useRoutes } from 'react-router';
import AuthContext from './context/authContext';
import './App.css';
import { useCallback, useEffect, useState } from 'react';

export default function App() {
    const router = useRoutes(routes);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const [token, setToken] = useState(null);
    const [userInfos, setUserInfos] = useState(null);

    const login = useCallback((userInfos, token) => {
        setToken(token);
        setIsLoggedIn(true);
        setUserInfos(userInfos);
        localStorage.setItem('user', JSON.stringify({ token }));
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserInfos({});
        localStorage.removeItem('user');
    });

    useEffect(() => {
        const localStorageData = JSON.parse(localStorage.getItem('user'));
        if (localStorageData) {
            fetch(`http://localhost:3000/v1/auth/me`, {
                headers: { Authorization: `Bearer ${localStorageData.token}` },
            })
                .then((res) => res.json())
                .then((userData) => {
                    setIsLoggedIn(true);
                    setUserInfos(userData);
                });
        }
        console.log(localStorageData);
    }, [login]);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                token,
                userInfos,
                login,
                logout,
            }}
        >
            {router}
        </AuthContext.Provider>
    );
}
