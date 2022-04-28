import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { CardsWrap } from './cardsStyles';
import headphones from '../../media/pinkPhones.jpg'
import merch from '../../media/shopping.jpg'
import concerts from '../../media/flonut.jpg'

export default function Cards(){
    return(
        <CardsWrap>
            <Card style={{ width: '18rem' }} class='card'>
                <Card.Img variant="top" src={headphones} class='cardPic'/>
                <Card.Body>
                    <Card.Title>Chill Beats</Card.Title>
                    <Card.Text>
                    One Hip Dog has chill beats for any occasion!
                    </Card.Text>
                    <Button variant="primary">Shop Music</Button>
                </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} class='card'>
                <Card.Img variant="top" src={merch} class='cardPic'/>
                <Card.Body>
                    <Card.Title>Hip Merch</Card.Title>
                    <Card.Text>
                        Show your love with Hip Merchandise! Get yours now!
                    </Card.Text>
                    <Button variant="primary">Shop Merch</Button>
                </Card.Body>
                </Card>
               
               
                <Card style={{ width: '18rem' }} class='card'>
                <Card.Img variant="top" src={concerts} class='cardPic'/>
                <Card.Body>
                    <Card.Title>Hit the Road</Card.Title>
                    <Card.Text>
                        Plan your perfect summer concert roadtrip! 
                    </Card.Text>
                    <Button variant="primary">View Concert Schedules</Button>
                </Card.Body>
                </Card>
        </CardsWrap>
    );
};