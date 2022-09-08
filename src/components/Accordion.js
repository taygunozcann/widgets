import React, {useState} from 'react'

const Accordion = (props) => {
    const [activeIndex, setActiveIndex]= useState(0)

    const handleClick = (index) => {
        setActiveIndex(index)
    }

    const itemList = props.items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return(
            <React.Fragment>
                <div key={item.title} onClick={() => handleClick(index)} className={`title ${active}`}>
                    <i className= "dropdown icon"></i>
                    {item.title}
                </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
            </React.Fragment>
            
        )
    })

    return(
    <div className="ui styled accordion">{itemList}</div>
    )
}

export default Accordion