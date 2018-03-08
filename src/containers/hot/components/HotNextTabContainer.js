import React from 'react';
import HotNextTab from './HotNextTab';

export default class TabContainer extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            monthData: [
                {
                    name: '全部',
                    selected: true
                },
                {
                    name: '3月',
                    selected: false
                },
                {
                    name: '4月',
                    selected: false
                },
                {
                    name: '5月',
                    selected: false
                }
            ],
            otherData: [
                {
                    name: '时间',
                    selected: true
                },
                {
                    name: '热度',
                    selected: false
                }
            ]
        }
    }

    handleClickMonth = (item) => {
        console.log('click month :' , item);


        let newMonthData = this.state.monthData.map(i => {
            return Object.assign({}, i, {selected: (i === item)})
        });

        this.setState({monthData: newMonthData});

    };
    handleClickOther = (item) => {
        console.log('click other');

        let newOtherData = this.state.otherData.map(i => {
            return Object.assign({}, i, {selected: (i === item)})
        });

        this.setState({otherData: newOtherData});
    };

    render() {
        return (
            <HotNextTab monthData={this.state.monthData} otherData={this.state.otherData}
                clickMonth={this.handleClickMonth}
                clickOther={this.handleClickOther}
            />
        )
    }
}
