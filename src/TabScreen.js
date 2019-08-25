import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, Left, Body, Right, Title, ScrollableTab } from 'native-base';
import Top from './tabs/top';
import General from './tabs/general';
import Business from './tabs/business';
import Technology from './tabs/technology';
import Entertainment from './tabs/entertainment';
import Health from './tabs/health';
import Science from './tabs/science';
import Sports from './tabs/sports';



export default class TabScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
        };
      }


  render() {
      console.log(this.state.refreshing);
    return (
      <Container>
        <Header hasTabs>
          <Left/>
          <Body>
            <Title>News Feed</Title>
          </Body>
          <Right />
          </Header>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
        <Tab heading="Top">
            <Top />
          </Tab>
          <Tab heading="General">
            <General />
          </Tab>
          <Tab heading="Business">
            <Business />
          </Tab>
          <Tab heading="Technology">
            <Technology />
          </Tab>
          <Tab heading="Entertainment">
            <Entertainment />
          </Tab>
          <Tab heading="Health">
            <Health />
          </Tab>
          <Tab heading="Science">
            <Science />
          </Tab>
          <Tab heading="Sports">
            <Sports />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}