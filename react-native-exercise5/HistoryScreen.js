import { StackNavigator } from 'react-navigation';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import React from 'react';


export default class HistoryScreen extends React.Component {
    static navigationOptions = { title: 'History', };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View>
                <Text>History</Text>
                <FlatList data={params.data}
                    renderItem={({ item }) => <Text>{item.key}</Text>} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});