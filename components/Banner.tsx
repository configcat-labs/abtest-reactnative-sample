import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Banner = () => {
    return (<View style={styles.banner}>
            <Text style={styles.bannerTitle}>Train your cat, the smart way!</Text>
            <Text style={styles.bannerDescription}>
                Discover fun ways to teach your cat tricks, improve behavior, and build trust with guidance
                from our expert cat trainer,
                <Text style={styles.bannerLink}> Whiskers McPaws</Text>.
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({

    banner: {
        flex: 1,
        padding: '5%',
    },

    bannerTitle: {
        fontSize: 48,
        lineHeight: 52,
        color: '#ff7e6d',
        fontWeight: 'bold',
    },

    bannerDescription: {
        fontSize: 20,
        lineHeight: 30,
        color: '#3e3f38',
        marginTop: 16,
    },

    bannerLink: {
        fontWeight: 'bold',
        color: '#0693e3',
        marginLeft: 12,
    }
})

export default Banner;