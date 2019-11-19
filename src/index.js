import React from 'react';
import { Container } from './components/Container';
import { View, Text } from 'react-native'
import { HighCardLineChart, HighCardProgressChart, HighCardBarChart } from './components/HighCardChart';

const Main = () => (
    <Container>
       <HighCardLineChart 
            icon={{type:'show-chart', size: 28, color:'#105AAA'}}
            title="Vendas"
            textFooter="Vendas dos útimos 6 meses"
            maxHeight="40%"
            data = {{
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [
                    {
                        data: [200, 450, 280, 100, 200, 43],
                        strokeWidth: 2, 
                    },
                ],
            }}
        />

        <HighCardProgressChart 
            icon={{type:'show-chart', size: 28, color:'#105AAA'}}
            title="Compras"
            textFooter="Compras dos útimos 6 meses"
            maxHeight="40%"
            data={[0.2, 0.6, 0.4, 0.6]}

        />

        <HighCardBarChart 
                    icon={{type:'show-chart', size: 28, color:'#105AAA'}}
                    title="Vendas"
                    textFooter="Vendas dos útimos 6 meses"
                    maxHeight="40%"
                    data = {{
                        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                        datasets: [
                            {
                                data: [200, 450, 280, 100, 200, 43],
                                strokeWidth: 2, 
                            },
                        ],
                    }}
        />
   
    </Container>
);


export default Main; 