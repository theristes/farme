
import React from 'react';
import styled from 'styled-components/native';

const InternalContainer = styled.SafeAreaView`
    flex : 1;
    background : #105AAA;
    justify-content : center;
`;

const ScrollContainer = styled.ScrollView`
    flex : 1;
    background : #105AAA;
`;

export const Container = props => 
    <InternalContainer>
        <ScrollContainer>
            { props.children}
        </ScrollContainer>
    </InternalContainer>