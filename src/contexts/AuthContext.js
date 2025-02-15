// import { createContext, useContext, useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import { notifyError } from "~utils/utils";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const router = useRouter();

//     useEffect(() => {
//         if (typeof window !== "undefined") {
//             const token = localStorage.getItem("token");
            
//             const role = localStorage.getItem("role");
//             const id = localStorage.getItem("id");

//             if (token && role && id) {
//                 setUser({ token, role, id });
//                 axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//             }
//         }
//     }, []);

//     const login = async (username, password) => {
//         try {
//             const response = await axios.post("http://localhost:8080/api/auth", {
//                 username,
//                 password,
//             }); 

//             const { token, role, id } = response.data;
//             localStorage.setItem("token", token);
//             localStorage.setItem("role", role);
//             localStorage.setItem("id", id);
//             setUser({ token, role, id });

//             axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

//             console.log("Role recebido do backend:", role);
//             console.log("Id recebido do backend:", id);

//             router.push("/");
//         } catch (error) {
//             console.error("Erro ao fazer login:", error.response?.data?.message || error.message);
//             notifyError(error.response?.data?.message || "Erro ao fazer login");
//         }
//     };

//     const logout = () => {
//         localStorage.removeItem("token");
//         localStorage.removeItem("role");
//         localStorage.removeItem("id");
//         setUser(null);
//         delete axios.defaults.headers.common["Authorization"];
//         router.push("/login");
//     };

//     return (
//         <AuthContext.Provider value={{ user, login, logout }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => useContext(AuthContext);

// ROLE_FUNCIONARIO_ADMIN
// USUARIO

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { notifyError } from "~utils/utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");
            const userId = localStorage.getItem("userId");
            const nome = localStorage.getItem("nome");

            if (token && role && userId && nome) {
                setUser({ token, role, userId, nome });
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            }
        }
    }, []);

    const login = async (username, password) => {
        try {
            localStorage.removeItem("token");
            delete axios.defaults.headers.common["Authorization"];
            
            const response = await axios.post("http://localhost:8080/api/auth", {
                username,
                password,
            });

            const { token, role, usuarioId, funcionarioId, nome } = response.data;
            const userId = usuarioId ?? funcionarioId;

            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("userId", userId);
            localStorage.getItem("nome", nome);
            setUser({ token, role, userId, nome });

            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            console.log("Role recebido do backend:", role);
            console.log("UserId recebido do backend:", userId);
            console.log("Nome recebido do backend:", nome);

            router.push("/");
        } catch (error) {
            console.error("Erro ao fazer login:", error.response?.data?.message || error.message);
            notifyError(error.response?.data?.message || "Erro ao fazer login");
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("userId");
        localStorage.removeItem("nome");
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