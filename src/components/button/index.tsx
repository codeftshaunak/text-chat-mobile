import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    iconName?: string; // Add this prop for icons
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle, iconName }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {iconName && <Icon name={iconName} size={20} color="#fff" style={styles.icon} />}
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0A84D6',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        cursor: 'pointer'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 600
    },
    icon: {
        marginRight: 10,
    },
});

export default CustomButton;
