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
            <Card style={{ width: '18rem' }} class='card' data-aos="fade-in" data-aos-once="true">
        
                <Card.Img variant="top" src={headphones} class='cardPic'/>
                <Card.Body>
                    <Card.Text>
                    One Hip Dog has chill beats for any occasion!
                    </Card.Text>
                    <Button variant="primary">Shop Music</Button>
                </Card.Body>
                </Card>


                <Card style={{ width: '18rem' }} class='card' data-aos="fade-in" data-aos-once="true">
                <Card.Img variant="top" src={merch} class='cardPic'/>
                <Card.Body>
                
                    <Card.Text>
                        Show your love with Hip Merchandise! Get yours now!
                    </Card.Text>
                    <Button variant="primary">Shop Merch</Button>
                </Card.Body>
                </Card>
               
               
                <Card style={{ width: '18rem' }} class='card' data-aos="fade-in" data-aos-once="true">
                <Card.Img variant="top" src={concerts} class='cardPic'/>
                <Card.Body>
                    
                    <Card.Text>
                        Plan your perfect summer concert roadtrip today! 
                    </Card.Text>
                    <Button variant="primary" size="lg" >View Concert Schedules</Button>
                </Card.Body>
                </Card>
        </CardsWrap>
    );
};