/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyLeftbar from "./MyLeftbar";
import { useEffect, useState } from "react";

const MyHome = () => {
    let arrayNameArtist = ['lazza',
        'shiva',
        'ultimo',
        'tananai',
        'queen',
        'ac/dc',
        'pinkfloid',
        'negrita',
        'dualipa',
        'greenday',
        'mileycyurus',
        'imaginedragons',
        'badbunny',
        'michaeljackson',
        'whitneyhouston',
        'giorgia',
        'fabrifibra',
        'jovanotti']

    const [songs, setSongs] = useState([])

    function RandomArtist() {
        let randomIndex = Math.floor(Math.random() * arrayNameArtist.length);
        let artistName = arrayNameArtist[randomIndex];
        arrayNameArtist.splice(randomIndex, 1);
        return artistName;
    }

    let random1 = RandomArtist()
    let random2 = RandomArtist()

    const CARD_SMALL_ONE = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${random1}`
    const CARD_SMALL_TWO = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${random2}`


    const creaCardHeader1 = async () => {
        try {
            const response = await fetch(CARD_SMALL_ONE);
            if (response.ok) {
                const { data } = await response.json()
                console.log(data);

                setSongs(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { creaCardHeader1() }, [])

    return (
        <Row >
            <Col xs={3}>
                <MyLeftbar />
            </Col>
            <Col xs={9} className="bg-dark">
                <div className="d-flex justify-content-around mt-2">
                    <a href="#" className="fs-4 text-secondary  ancora">Trending</a>
                    <a href="#" className="fs-4 text-secondary ancora">Podcast</a>
                    <a href="#" className="fs-4 text-secondary ancora">Mood and Genres</a>
                    <a href="#" className="fs-4 text-secondary ancora">New Relases</a>
                    <a href="#" className="fs-4 text-secondary pe-2 ancora">Discover</a>
                </div>
                <div className="mt-4">
                    <h1 className="text-white mb-3 ms-5">Brani</h1>
                    <Row className="justify-content-center">
                        {songs.map((track) =>
                        (
                            <Col md={3}>
                                <Card className="bg-black text-white">
                                    <Card.Img src={track.album.cover_medium} alt="ciao" />
                                    <Card.Body>
                                        <Card.Title>{track.title}</Card.Title>
                                        <Card.Text>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>)
                        )}
                    </Row>
                </div>
            </Col>
        </Row>
    )


}

export default MyHome;