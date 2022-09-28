import React from "react";
import { View, Image, Text, Button, StyleSheet, Pressable, ScrollView  } from 'react-native';
import { useState, useEffect } from 'react';
import Modal from "react-native-modal";
const API_IMG = "https://image.tmdb.org/t/p/w500/";


const MoviePopular = ({ title, poster_path, vote_average, release_date, overview }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };



    return (
        <>
            <View style={styles.container}>

                <View style={styles.movieRow}>
                    <View style={styles.movieCol}>
                        <Text style={styles.movieTitle}>{title}</Text>
                        <Image style={{ width: 300, height: 500 }}
                            source={{ uri: `${API_IMG + poster_path}` }}
                        />
                        <Pressable style={styles.button} onPress={toggleModal} >
                            <Text style={styles.buttonTxt}>DETAILS</Text>
                        </Pressable>
                    </View>
                </View>

            </View>



            <Modal isVisible={isModalVisible} style={{ margin: 0 }}>
                <ScrollView style={styles.movieModal}>
                    <View style={styles.movieImgRow}>
                        <Image style={{ width: 200, height: 300 }}
                            source={{ uri: `${API_IMG + poster_path}` }}
                        />
                    </View>
                    <Text style={styles.modalTitle}>About</Text>
                    <Text style={styles.modalText}>{overview}</Text>
                    <Text>RATING: {vote_average}/10</Text>
                    <Text>RELEASE DATE:  {release_date}</Text>
                    <Pressable style={styles.buttonModal} onPress={toggleModal} >
                        <Text style={styles.buttonTxt}>CLOSE</Text>
                    </Pressable>
                </ScrollView>
            </Modal>

        </>
    )
}


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: '#0c0b00',
    },
    movieRow: {
        marginBottom: 150,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    movieCol: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },

    movieTitle: {
        fontSize: 25,
        paddingBottom: 15,
        fontWeight: 'bold',
        color: '#deb522',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#128bb5',
        width: 150,
    },

    buttonTxt: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },

    movieModal: {
        backgroundColor: 'white',
        padding: 25,
    },

    movieImgRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 100,
    },

    modalTitle: {
        fontSize: 32,
        marginBottom: 20,

    },

    modalText: {
        fontSize: 22,
        marginBottom: 100,
        textAlign: 'justify',
        lineHeight: 30,
    },

    buttonModal: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 40,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#128bb5',
        width: 150,
    },






});

export default MoviePopular;