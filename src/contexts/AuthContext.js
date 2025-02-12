import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        // Verifica se há um token salvo no localStorage ao carregar a aplicação
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ token }); // Define o usuário autenticado
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
            router.push("/"); // Redireciona para página segura
        } catch (error) {
            console.error("Erro ao fazer login", error);
            alert("Credenciais inválidas");
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