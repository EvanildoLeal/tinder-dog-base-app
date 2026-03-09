// @ts-nocheck
import { Text, TouchableOpacity, View, Image } from "react-native"
import axios from "axios"
import { useEffect, useState } from "react"
import { styles } from './styles'

export const Home = () => {
    const [dogs, setDogs] = useState([])  // ← MUDE AQUI: adicione [] como valor inicial

    const getApi = async () => {
        return await axios.get('http://localhost:3000/dogs/getAllDogs').then((resp) => {
            console.log('resp', resp.data)
            setDogs(resp.data)
        })
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
        </View>
    )
}