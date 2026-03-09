import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',

    },
    contentImage: {
        height: 120,
        width: 120,
        backgroundColor: '#ffa500',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 120
    },
    imageDog: {
        height: 100,
        width: 100,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems:'center'
    },
    contentDescription:{
        height: '100%',
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffa500',
        marginTop: 24,
        borderRadius: 20,
    },
    contentRowList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '100%',
        marginTop: 24,
        paddingLeft: 12,
        paddingBottom: 8,
    },
    contentTextTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        
    }

})
    
