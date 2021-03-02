import React from 'react'
import { Flex, Button, Text, Box } from 'rebass';
import styled from '@emotion/styled';
import Link from 'next/link';

const BridgedSolutions = () => {
    return (
        <SolutionsWrapper alignItems="center" justifyContent="center" mx="20px">
            <Flex width={["320px", "730px", "985px", "1250px"]} alignItems="center" justifyContent="center" flexDirection="column">
                <Text fontSize={["36px", "36px", "64px"]} fontWeight="bold" mr="auto">Your design is your</Text>
                <Text fontSize={["36px", "36px", "64px"]} fontWeight="bold" mr="auto">code server translations...</Text>

                <Box width="100%" height="650px" mt="90px" bg="#000" mb="100px" />

                <Text fontSize="18px" fontWeight="bold" mr="auto">Instantly create code from your design</Text>
                <Desc mr="auto">With powerful Design2Code Engine, Bridged generates production ready code that can also easily be used for existing projects. Supprt for components, various code styles, naming convention, fille & directory structure are included.</Desc>

                <Text fontSize="18px" fontWeight="bold" mr="auto" mt="40px" pb="12px" style={{ borderBottom: "1px solid black" }}>See also</Text>
                <Solutions mr="auto" mt="9px">
                    <Link href="/">
                        <span>idea</span>
                    </Link>
                    <Link href="/">
                        <span>server</span>
                    </Link>
                    <Link href="/">
                        <span>translations</span>
                    </Link>
                    <Link href="/">
                        <span>insight</span>
                    </Link>
                    <Link href="/">
                        <span>everything</span>
                    </Link>
                </Solutions>
            </Flex>
        </SolutionsWrapper>
    )
}

export default BridgedSolutions

const SolutionsWrapper = styled(Flex)`
    height: 1400px;

     @media (max-width: 767px) {
        height: 1700px;
    }
`

const Desc = styled(Text)`
    max-width: 780px;
    margin-top: 15px;
    font-size: 24px;
    color: #444545;

    @media (max-width: 767px) {
        max-width: 280px;
    }
`

const Solutions = styled(Box)`

    span {
        margin-right: 24px;
        font-size: 18px;
        color: #AEAEAE;
    }

    @media (max-width: 767px) {
        overflow-x: auto;
        width: 100%;
    }

`