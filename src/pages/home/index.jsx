import { useEffect, useState } from "react"
import api from "../../services/api"
import Header from "../../components/Header/header"
import { Container, ContainerItems } from "./syyle"
import Card from "../../components/Card/card"

export default function Home() {
    const [movies, setMovies] = useState()
    const [filteredMovies, setfilteredMovies] = useState()

    useEffect(() => {
        async function loadData() {
            const { data: { docs } } = await api.get('movie')

            setMovies(docs)
            setfilteredMovies(docs)
            console.log(docs)
        }

        loadData()

    }, [])


    return (
        <>
            <Container>
                <Header movies={movies} setfilteredMovies={setfilteredMovies} />
                <ContainerItems>
                    {filteredMovies && filteredMovies.map(movie => (
                        <Card movieData={movie} key={movie._id} />
                    ))}
                </ContainerItems>
            </Container>
        </>
    )
}