import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";

export function GuildIcon() {
    const uri = 'https://i.imgur.com/C3zWJ57.jpg'
    return (
        <Image
            source={{uri}}
            style={styles.image}
            resizeMode="cover"
        />
    );
}