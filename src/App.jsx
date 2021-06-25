import React from 'react'
import Cards from './Cards';
import Sdata from './Sdata';

const App = () => {
    return (
        <>
            <h1 className="heading__style">My Top 5 Favourite Netflix Series</h1>
            {Sdata.map((val) => {
                return (
                    <Cards
                        key={val.id}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        sname={val.sname}
                        link={val.link}
                    />
                )
            })}
        </>
    )
}

export default App