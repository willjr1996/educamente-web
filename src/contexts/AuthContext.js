import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { notifyError } from '~utils/utils';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ token });
        }
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post("http://localhost:8080/api/auth", {
                username,
                password,
            });

            const { token } = response.data;
            localStorage.setItem("token", token);
            setUser({ token });
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            router.push("/");
        } catch (error) {
            console.error("Erro ao fazer login", error);
            notifyError("Erro ao fazer login");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        delete axios.defaults.headers.common["Authorization"];
        router.push("/login");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);