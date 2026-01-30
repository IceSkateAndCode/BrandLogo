import colors from '@/styles/colors'
import defaultStyles from '@/styles/defaultStyles'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type characterProfile = {
    username: string;
    element: string;
    id: string
}

type propsType = {
    character: characterProfile
}

const CharacterRow: React.FC<propsType> = ({
    character
}) => {
    return(
        <View style={styles.flatListRow}>
            <View style={styles.textHolder}>
                <Text style={defaultStyles.textStyle}>{character.username}</Text>
            </View>
            <View style={styles.seperator} />
            <View style={styles.textHolder}>
                <Text style={defaultStyles.textStyle}>{character.element}</Text>
            </View>
        </View>
    );
}

export { characterProfile, CharacterRow }

const styles = StyleSheet.create({
    flatListRow: {
        backgroundColor: colors.secondary,
        marginTop: 10,
        padding: 5,
        width: 300,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    list: {
        backgroundColor: colors.secondary,
        padding: 5,
        height: 60,
        width: 350,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        marginTop: 5,
    },
    seperator: {
        height: '100%',
        width: 1,
        backgroundColor: colors.primary
    },
    textHolder: {
        width: 100,
        alignItems: 'center'
    }
})