import {TouchableOpacity, View, Text, Image, StyleSheet} from 'react-native'

const ListItems = (props) => {

    return (
        <TouchableOpacity
            style={[styles.container , props.mainStyles ]}
            onPress={props.onPress}
        >
            <View style={styles.panelOne}>

                <Text
                    style={{flex: 1, fontSize: 20, color: "#5d5d5d", fontWeight: "bold"}}>
                    {props.name}
                </Text>

                <Text style={{flex: 1, fontSize: 18, color: "#7c7c7c"}}>
                    {props.short_description}
                </Text>

                <Text style={{flex: 1, fontSize: 17, color: "#64a362", fontWeight: "bold"}}>
                    {props.price}
                </Text>

            </View>

            <View style={{flex: 1, padding: 10, alignItems: 'flex-end'}}>
                <Image source={props.image} style={props.imageStyles}/>
            </View>

        </TouchableOpacity>
    )

};



const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    panelOne:{
        flex: 2,
        padding: 10
    },

    image:{
        width: 100,
        height: 100,
        borderRadius: 10,
    },


});



ListItems.defaultProps = {

    //Styles
    mainStyles:{backgroundColor:"#fff"},
    imageStyles:styles.image,


    //properties
    onPress:() => {},
    name:"replace this with props ' name ' ",
    short_description: "replace this with props ' short description ' ",
    price: "replace this with props ' price ' ",
    image: {uri:'https://static.thenounproject.com/png/220984-200.png'}


};


export {ListItems}