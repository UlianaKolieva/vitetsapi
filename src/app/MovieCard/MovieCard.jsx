import { PropsWithChildren } from "react"
interface IMovieCard extends PropsWithChildren{}

const MovieCard = ({movie}) => {
    movie = movie
    return <div className="container">{movie}</div>
}
export default MovieCard