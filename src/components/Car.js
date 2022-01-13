import React from 'react'
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
    const id = props.match.params.id
    const car = props.cars.find(car => car.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{car.Name}</h2>
                {
                    Object.entries(car).map(([key,value]) => {
                        return <Chip label={`${key}: ${value}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car