import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import CustomButton from '../../components/button';
import { useAuth } from "../../context/auth-context/auth-provide"; // Ensure the correct path

const LoginScreen: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth(); // Use the useAuth hook here

    const handleGoogleSignIn = () => {
        Alert.alert('Google Sign-In', 'Google sign-in is not implemented yet.');
    };

    const handleLogin = async () => {
        if (!email || !password) {
            Alert.alert('Validation Error', 'Please enter both email and password.');
            return;
        }

        setLoading(true);

        try {
            await signIn({ identifier: email, password });
            Alert.alert('Login Successful', 'You have successfully logged in!');
            // Navigate to the next screen or perform other actions here
        } catch (error) {
            Alert.alert('Login Failed', 'An error occurred during login.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerPre}>
                <Image
                    style={styles.header}
                    source={{ uri: 'https://community.cofounderslab.com/assets/images/Launch-Logo-Updated.png' }}
                />
                <View style={styles.inner}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        accessibilityLabel="Email Input"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        autoCapitalize="none"
                        accessibilityLabel="Password Input"
                    />

                    <Text style={styles.forget}>Forget Password?</Text>
                    <CustomButton onPress={handleLogin} title='Login' />
                    <View style={styles.dividerContainer}>
                        <View style={styles.divider} />
                        <Text style={styles.dividerText}>or</Text>
                        <View style={styles.divider} />
                    </View>
                    <CustomButton
                        title="Login with Google"
                        onPress={handleGoogleSignIn}
                        iconSource={require('../../assets/icons/google.png')}
                        googleButton={styles.googleButton}
                    />

                    {loading && <ActivityIndicator size="large" color="#0086FF" />}
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    inner: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        borderRadius: 10,
        backgroundColor: '#fff',
        elevation: 3,
        width: '98%',
        margin: 'auto',
        maxWidth: 400,
    },
    innerPre: {
        width: '100%',
        maxWidth: 400,
    },
    header: {
        height: 30,
        width: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        alignSelf: 'center',
    },
    textInput: {
        height: 40,
        borderColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    buttonContainer: {
        marginVertical: 20,
    },
    forget: {
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 2,
        marginBottom: 10,
        color: '#0086FF'
    },
    icon: {
        marginRight: 10,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    divider: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    dividerText: {
        marginHorizontal: 5,
        fontSize: 16,
        color: '#888',
    },
    googleButton: {
        backgroundColor: '#000',
        borderColor: '#eB4437',
    },
    googleButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
