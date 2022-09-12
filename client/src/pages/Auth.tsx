import store from 'store2';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Auth = () => {
    const { token } = useParams();
    const navigation = useNavigate();
    
    useEffect(() => {
        const storeToken = (async() => {
            if(token) {
            await store.set('authToken',token);
        }})
        storeToken();
        navigation("/");
    })

  return null
}

export default Auth;