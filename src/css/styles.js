import { StyleSheet } from 'react-native';

function Styles(){
    const styles = StyleSheet.create({
        map:{
            flex: 1,
        },
        
        avatar:{
            width: 54,
            height: 54,
            borderRadius: 4,
            borderWidth: 4,
            borderColor: '#FFF',
        },
        
        callout:{
            width: 260,
        },
        
        devName:{
            fontWeight: 'bold',
            fontSize: 16,
        },
        
        devBio: {
            color: '#666',
            marginTop: 5,
        },
        
        devTechs: {
            marginTop: 5,
        },
        
        searchForm:{
            position: 'absolute',
            top: 20,
            left: 20,
            right: 20,
            zIndex: 5,
            flexDirection: 'row',
        },
        
        searchInput:{
            flex: 1,
            height: 50,
            backgroundColor: '#fff',
            color: '#333',
            borderRadius: 25,
            paddingHorizontal: 20,
            fontSize: 16,
            shadowColor: '#000',
            shadowOffset: {
                width: 4,
                height: 4,
            },
            elevation: 2,
        },
        
        loadButton:{
            width: 50,
            height: 50,
            backgroundColor: '#8d4dff',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 15,
        }
    });
    return styles;
}

export default Styles;