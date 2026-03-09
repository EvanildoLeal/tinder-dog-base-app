import { RootState } from "@/src/store";
import { Text, View, } from "react-native";
import { useSelector } from "react-redux";


export const DetailsDog = () => {
    const detailsDog = useSelector((state: RootState) => state.detailsDog.details)
    console.log('detailsDog', detailsDog)
    
    return (
        <View>
            <Text>Details dog screen</Text>
        </View>
    )
}