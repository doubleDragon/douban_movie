import React from 'react';
import {Text, View, Button} from 'react-native';

export default class Home extends React.Component {

    constructor(props) {
        super(props);

        this.handleTestClick = this.handleTestClick.bind(this);
    }

    handleTestClick() {
        this.props.navigator.push({
            screen: 'test',
            title: 'Pushed Test Screen'
        });
    }

    render() {
        return (
            <View>
                <Text>{this.props.value}</Text>
                <Button title='button0' color='red' onPress={this.props.add}/>
                <Button title='button1' onPress={this.props.remove}/>
                <Button title='test' onPress={this.handleTestClick}/>

            </View>
        )
    }
}