//import { PropsWithChildren } from "react"
//interface IFeed extends PropsWithChildren{}
import MovieCard from "../MovieCard/MovieCard"

const Feed = ({movies}) => {
    return <div className="container">{movies.map((movie)=><MovieCard movie={movie} key={movie.imdbID}/>)}</div>
}
export default Feed