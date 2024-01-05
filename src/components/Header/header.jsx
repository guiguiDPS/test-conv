/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import ConvIcon from '../../assets/Icon.svg'
import { Container, TopHeader } from './styles'

export default function Header({ movies, setfilteredMovies }) {
    const [aveValue, setAveValues] = useState({
        runtime: 0,
        budget: 0,
    })

    const input = useRef()

    function aveMovies(movies) {
        const runtime = movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length
        const budget = movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

        setAveValues({
            runtime,
            budget,
        })

    }

    useEffect(() => {
        if(movies && movies.length > 0){
            aveMovies(movies)
        }
    }, [movies])

    function inputChange() {
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()))
        aveMovies(newMovies)
        setfilteredMovies(newMovies)
    }

    return (
        <>
            <TopHeader>
                <img src={ConvIcon} alt='conv img' />
                <p>Senior Front End Test</p>
            </TopHeader>
            <Container>
                <h1>Lord of the Rings Movies</h1>
                <div className='ave-values'>
                    <div>
                        <p>Ave. movie runtime: {aveValue.runtime} min</p>
                        <p>Ave. movie budget: ${aveValue.budget}M</p>
                    </div>
                    <input type="text" placeholder='Filter movies by name' ref={input} onChange={inputChange} />
                </div>
            </Container>
        </>
    )
}