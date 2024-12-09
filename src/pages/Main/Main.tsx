//import { Link } from 'react-router-dom';
import Input from '../../app/Input/Input';
import Button from '../../app/Button/Button';
import Feed from '../../app/Feed/Feed';
import { useEffect, useState } from 'react';
//import Search from '../../app/search/Search';
import OMDBApi, { IMovie } from '../../shared/OMDBApi/OMDBApi';
export default function Main() {
    
    const [searchValue, setValue] = useState("");
    const [searchRes, setSearchRes] = useState<IMovie[]>([]);

    const handleSearch = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearchRes((await OMDBApi.searchMovie(searchValue)).Search)
    }

    useEffect(() => {
        console.log(searchRes);
        
    }, [searchRes])

    return(
        <>
            <h2>Main page</h2>
            <form onSubmit={(e) => handleSearch(e)}>
                <Input value={searchValue} setValue={setValue}/><Button />
            </form>
            <Feed />
            <div id="searchResults"></div>
        </>
    )
}
