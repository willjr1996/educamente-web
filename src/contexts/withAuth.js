import { useAuth } from "../contexts/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function withAuth(Component) {
  return function ProtectedRoute(props) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push("/login"); // Redireciona se não estiver logado
      }
    }, [user]);

    if (!user) {
      return null; // Evita que a página seja renderizada antes da verificação
    }

    return <Component {...props} />;
  };
}
