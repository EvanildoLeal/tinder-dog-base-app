// @ts-nocheck
import axios from "axios"
import { useEffect, useState } from "react"
import { Text, TouchableOpacity, View, Image } from "react-native"
import { styles } from './styles'
import AntDesign from '@expo/vector-icons/AntDesign';

export const Home = () => {
    const [dogs, setDogs] = useState([])  // ← MUDE AQUI: adicione [] como valor inicial
    const [match, setMatch] = useState([])

    const getApi = async () => {
        return await axios.get('http://localhost:3000/dogs/getAllDogs').then((resp) => {
            console.log('resp', resp.data)
            setDogs(resp.data)
        })
    }
    const heandlePressNo = () => {
        setDogs((prevState) => prevState.slice(1))
    }

    const handlePressYes = () => {
        setMatch((prevState) => [...prevState, dogs[0]])
        setDogs((prevState) => prevState.slice(1))
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.contentImage}>
                {dogs.length > 0 && (
                    <Image
                        source={{ uri: dogs[0]?.image[0] }}
                        style={styles.imageDog}
                    />
                )}
            </TouchableOpacity>
            <View style={styles.contentButtons}>
                <TouchableOpacity
                    onPress={heandlePressNo}
                    style={[styles.buttonYes, { backgroundColor: 'red' }]}
                >
                    <AntDesign name="close" size={32} color="#fff" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handlePressYes}
                    style={styles.buttonYes}>
                    <AntDesign name="heart" size={32} color="#fff" />
                </TouchableOpacity>
            </View>
            
        </View>
    )
}