import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const AuthSuccess = () => {
    const { setToken } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get('token');
        const error = queryParams.get('error');

        if (token) {
            localStorage.setItem('token', token);
            setToken(token);
            navigate('/');
        } else if (error) {
            navigate('/login', { state: { error: 'Google authentication failed.' } });
        }
    }, [location, setToken, navigate]);

    return (
        <div className='min-h-[80vh] flex items-center justify-center'>
            <p>Authenticating...</p>
        </div>
    );
};

export default AuthSuccess;