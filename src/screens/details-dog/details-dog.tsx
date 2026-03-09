import { RootState } from "@/src/store";
import { Text, View, Image } from 'react-native';
import { useSelector } from "react-redux";
import { styles } from "./styles";

export const DetailsDog = () => {
    const detailsDog = useSelector((state: RootState) => state.detailsDog.details)
    console.log('detailsDog', detailsDog)
    
    return (
        <View style={styles.container}>
            <View style={styles.contentImage}>
            <Image
                style={styles.imageDog}
                // @ts-ignore
                source={{uri: detailsDog?.image?.[0]}}
            />
            </View>
            <View style={styles.contentDescription}>
                <View style={styles.contentRowList}>
                    <Text>Nome:</Text>
                </View>
            </View>
        </View>
    )
}