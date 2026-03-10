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
    // Container para as bolinhas nos cantos
    dotsContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: 'none', // Para não atrapalhar cliques
    },
    dotCorner: {
        position: 'absolute',
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#fff',  // Todas brancas
    },
    dotTopLeft: {
        top: 10,
        left: 10,
    },
    dotTopRight: {
        top: 10,
        right: 10,
    },
    dotBottomLeft: {
        bottom: 10,
        left: 10,
    },
    dotBottomRight: {
        bottom: 10,
        right: 10,
    },
})