import React, {useState} from 'react'
import Accordion from './Accordion'
import Search from './Search'
import Dropdown from './Dropdown'
import Translate from './Translate'
import Route from './Route'
import Header from './Header'

const App = () => {
    const items = [
        {
            title: "a",
            content: "aaaaa"
        },
        {
            title: "b",
            content: "bbbbb"
        },
        {
            title: "c",
            content: "ccccc"
        }
    ]

    const options= [
        {
            label: "Red",
            value: "red"
        },
        {
            label: "Blue",
            value: "blue"
        },
        {
            label: "Green",
            value: "green"
        }
    ]

    


    const[selected, setSelected] = useState(options[0])
    

    return(
        <div>
            <Header/>
            <Route path='/'>
                <Accordion items={items}/>
            </Route>
            <Route path='/list'>
                <Search/>
            </Route>
            <Route path='/dropdown'>
                <Dropdown
                label='Color'
                options={options}
                selected={selected}
                onSelectedChange={setSelected}
                />
            </Route>
            <Route path='/translate'>
                <Translate/>
            </Route>
        </div>
    )
}

export default App