import React from 'react'

const App = () => {

    let currentTime = new Date(2020, 7, 4, 11);
    currentTime = currentTime.getHours();

    let greetings = '';

    const cssStyle = { color: '' }

    if (currentTime >= 1 && currentTime <= 12) {
        greetings = 'Good Morning!!'
        cssStyle.color = 'green'
    } else if (currentTime >= 12 && currentTime <= 19) {
        greetings = 'Good Afternoon!!'
        cssStyle.color = 'orange'
    } else {
        greetings = 'Good Night!!'
        cssStyle.color = 'black'
    }
    return (
        <div>
            <h1>Hello Sir, <span style={cssStyle}>{greetings}</span></h1>
        </div>
    )
}

export default App
