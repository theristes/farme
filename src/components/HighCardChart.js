import React from 'react';
import styled from 'styled-components/native'
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import { HighCard } from './HighCard';


const HighCardBarChart = props => {

    const Footer = styled.Text`
        font-size: 12px;
        color: #333;
    `;

    return (<HighCard
                footer={<Footer>
                            {props.textFooter}
                        </Footer>} 
                {...props}>
                <BarChart
                    data={props.data}
                    width={'350'} 
                    height={'210'}
                    chartConfig={{
                        backgroundColor: '#105AAA',
                        backgroundGradientFrom: '#EEE',
                        backgroundGradientTo: '#008CCB',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: () => `#105AAA`
                        
                    }}
                />
            </HighCard>)
}

const HighCardLineChart = props => {

    const Footer = styled.Text`
        font-size: 12px;
        color: #333;
    `;

    return (<HighCard
                footer={<Footer>
                            {props.textFooter}
                        </Footer>} 
                {...props}>
                <LineChart
                    data={props.data}
                    width={'350'} 
                    height={'210'}
                    chartConfig={{
                        backgroundColor: '#105AAA',
                        backgroundGradientFrom: '#EEE',
                        backgroundGradientTo: '#008CCB',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: () => `#105AAA`,
                        style: { borderRadius: 1 } 
                    }}
                    style={{ 
                            marginTop: 1, 
                            marginLeft: 0,
                            borderRadius: 1 }}
                />
            </HighCard>)
}

const HighCardProgressChart = props => {

    const Footer = styled.Text`
        font-size: 12px;
        color: #333;
    `;

    return (<HighCard
                footer={<Footer>
                            {props.textFooter}
                        </Footer>} 
                {...props}>
                <ProgressChart
                    data={props.data}
                    width={300} 
                    height={220}
                    chartConfig={{
                        backgroundGradientFrom: '#ffffff',
                        backgroundGradientTo: '#ffffff',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(17, 90, 170, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                />
            </HighCard>)
}

export { HighCardLineChart, HighCardBarChart, HighCardProgressChart };