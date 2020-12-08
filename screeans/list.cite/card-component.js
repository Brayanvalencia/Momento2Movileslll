import React from 'react;'
import { StyleSheet, Text, View} from 'react-native';

function CardComponent(props){
    const {name,document, lastname} = props.cite;
    return(
        <View>
            <Text>{name}</Text>
            <Text>{document} {lastname}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
  });

  export default CardComponent;