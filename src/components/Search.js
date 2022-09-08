import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Search= () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    useEffect(()=>{
        async function fetchData(){
            const response = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                },
            })
            setResults(response.data.query.search)
        }
        const timeoutId= setTimeout(()=>{
            if(term){
                fetchData()
            }
        }, 500)

        return() => {
            clearTimeout(timeoutId)
        }
        
        console.log(results)
    }, [term])

    const renderedList = results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org/?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    }
    ) 


    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter a Search Term</label>
                    <input 
                    value={term} 
                    onChange={e=>setTerm(e.target.value)} 
                    className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedList}
            </div>
            
        </div>


    )
}

export default Search