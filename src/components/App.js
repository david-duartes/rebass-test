import React, { Component } from "react";
import "./App.style.scss";
import { Button, Box, Flex, Text, Heading, Card } from "rebass";
import Theme from "./theme/Theme";

export class App extends Component {
  render() {
    return (
      <Theme>
        <Heading fontSize={[5, 6, 7]} color="primary">
          Hello!!!
        </Heading>
        <Flex flexWrap="wrap">
          <Box p={2} fontSize={4} width={[1, 1 / 2]} color="white" bg="silver">
            <Button variant="primary" mr={2}>
              Primary
            </Button>
            <Button variant="outline" mr={2}>
              Outline
            </Button>
          </Box>
          <Box p={2} fontSize={4} width={[1, 1 / 2]} color="white" bg="blue">
            <Text fontSize={[3, 4, 5]} color="secundary">
              Full
            </Text>
          </Box>
        </Flex>
        <Card width={256} width={[1, 1 / 2]}>
          <Heading>Card</Heading>
        </Card>
      </Theme>
    );
  }
}

export default App;
