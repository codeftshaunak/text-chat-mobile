import React from 'react';
import { Image, StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

interface CustomButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    iconSource?: any; // Type can be `any` because it's dynamic\\
    googleButton?: any,
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress, style, textStyle, iconSource, googleButton }) => {
    return (
        <TouchableOpacity style={[styles.button, style, googleButton]} onPress={onPress}>
            {iconSource && <Image source={iconSource} style={[styles.icon]} />}
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
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 600
    },
    icon: {
        marginRight: 10,
        width: 20,
        height: 20
    },
});

export default CustomButton;
