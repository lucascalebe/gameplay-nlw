import React, { useState } from "react";
import { View, FlatList } from "react-native";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { Profile } from "../../components/Profile";
import { ListHeader } from "../../components/ListHeader";
import { Appointment } from "../../components/Appointment";
import { styles } from "./styles";
import { ListDivider } from "../../components/ListDivider";

import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";


export function Home() {
    const navigation = useNavigation();

    const [category, setCategory] = useState('');

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'League of Legends',
                icon: null,
                owner: true
            },
            category: '1',
            date: '25/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
        },
        {
            id: '2',
            guild: {
                id: '1',
                name: 'League of Legends',
                icon: null,
                owner: true
            },
            category: '1',
            date: '25/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
    }

    function handleAppointmentDetails() {
        navigation.navigate('AppointmentDetails');
    }

    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd />
            </View>
            
            <CategorySelect
                categorySelected={category}
                setCategory={handleCategorySelect}
                hasCheckBox={true}
            />

            <View style={styles.content}>
                <ListHeader
                    title="Partidas Agendadas"
                    subtitle="Total 6"
                />

                <FlatList
                    data={appointments}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <Appointment
                        onPress={handleAppointmentDetails}
                        data={item} />
                    )}
                    ItemSeparatorComponent={() => <ListDivider />}
                    style={styles.matches}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </Background>
    );
}