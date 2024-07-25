import React, { createContext, FC, ReactNode, useCallback, useState } from "react";
import envConfig from "../../config/env.config";

interface User {
    // Define the properties of the User object
    id: string;
    name: string;
    email: string;
    // Add other properties as needed
}

interface Profile {
    // Define the properties of the Profile object
    bio: string;
    avatar: string;
    // Add other properties as needed
}

interface AuthContextProps {
    loading: boolean;
    onboarded: boolean;
    isAuthenticated: boolean;
    user: User | undefined;
    profile: Profile | undefined;
    token: string | undefined;
    signIn: (data: SignInData) => Promise<void>;
}

interface SignInData {
    email: string;
    password: string;
    // Add other properties as needed
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
    const [profile, setProfile] = useState<Profile | undefined>(undefined);
    const [token, setToken] = useState<string | undefined>(undefined);

    const signIn = useCallback(async (data: SignInData) => {
        setLoading(true);
        try {
            const response = await fetch(`${envConfig.BACKEND_API}/auth/local`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            console.log(response);

            // Add your sign-in logic here
            // For example, make an API request to sign in the user
            // and update the state variables accordingly

            // Example:
            // const response = await api.signIn(data);
            // setUser(response.user);
            // setProfile(response.profile);
            // setToken(response.token);
            // setIsAuthenticated(true);
            // setOnboarded(response.onboarded);
        } catch (error) {
            // Handle the error here
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
                profile,
                token,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
