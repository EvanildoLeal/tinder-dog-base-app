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
        alignItems: 'center'
    },
    contentDescription: {
        width: '90%',
        height: '80%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#ffa500',
        marginTop: 24,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 32,
        marginBottom: 20,
    },
    dotsContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    dotTopLeft: {
        position: 'absolute',
        top: 10,
        left: 10,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    dotTopRight: {
        position: 'absolute',
        top: 10,
        right: 10,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    dotBottomLeft: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    dotBottomRight: {
        position: 'absolute',
        bottom: 10,
        right: 10,
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff',
    },
    dotActive: {
        backgroundColor: '#ffa500',
        width: 14,
        height: 14,
        borderRadius: 7,
    },
})