import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'
import { Button, Progress } from 'semantic-ui-react'
import '../profileComponent.css';

// const reactImg = 'https://react.semantic-ui.com';
const reactImg = '';
// const paragraph = <ImageComponent src={reactImg+'/images/wireframe/short-paragraph.png'} />
const paragraph = <ImageComponent src={reactImg + '/img/short-paragraph.png'} />

const ProfileComponent = () => (
  <div className="profileComponent ui contrainer">
    <Item.Group link unstackable>
      <Item>
        <Item.Image size='tiny' src={reactImg + '/img/profile.png'} />

        <Item.Content>
          <Item.Header>Mino Tavrakis</Item.Header>
          <Item.Description>{paragraph}</Item.Description>
        </Item.Content>
      </Item>
    </Item.Group>

    <Progress percent={26} indicating />

    <Button className='profBut' basic color='teal' content='Teal' fluid size='massive'>My Awards</Button>
    <Button className='profBut' basic color='teal' content='Teal' fluid size='massive'>My Expenses</Button>
    <Button className='profBut' basic color='teal' content='Teal' fluid size='massive'>My Hotel</Button>
    <Button className='profBut' basic color='teal' content='Teal' fluid size='massive'>My Calendar</Button>
  </div>
)

export default ProfileComponent;