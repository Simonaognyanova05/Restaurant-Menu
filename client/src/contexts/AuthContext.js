import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../config/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext();

const initialState = {
    _id: '',
    email: '',
};

export const AuthProvider = ({ children }) => {
    const [admin, setAdmin] = useState(initialState);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Слушател, който пази логина дори след refresh
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // user.uid и user.email идват директно от Firebase
                setAdmin({
                    _id: user.uid,
                    email: user.email,
                });
            } else {
                setAdmin(initialState);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const onLogin = (authData) => {
        setAdmin(authData);
    };

    const onLogout = () => {
        signOut(auth);
        setAdmin(initialState);
    };

    return (
        <AuthContext.Provider value={{ admin, onLogin, onLogout }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
