import React, { createContext, FC, ReactNode, useCallback, useContext, useState } from "react";
import envConfig from "../../config/env.config";

interface User {
    id: string;
    name: string;
    email: string;
}

interface Profile {
    bio: string;
    avatar: string;
}

interface AuthContextProps {
    loading: boolean;
    onboarded: boolean;
    isAuthenticated: boolean;
    user: User | undefined;
    // profile: Profile | undefined;
    token: string | undefined;
    signIn: (data: SignInData) => Promise<void>;
}

interface SignInData {
    identifier: string;
    password: string;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [onboarded, setOnboarded] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | undefined>(undefined);
    // const [profile, setProfile] = useState<Profile | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);

    const signIn = useCallback(async (data: SignInData): Promise<void> => {
        setLoading(true);
        try {
            const response = await fetch(`${envConfig.BACKEND_API}/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            setUser(result.profile);
            setToken(result.jwt);
            setIsAuthenticated(true);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                loading,
                onboarded,
                isAuthenticated,
                user,
                // profile,
                token,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
