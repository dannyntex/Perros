import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { AppRouter } from '../routers/AppRouter'

export const App = () => {
    return (
        <Router>
            <AppRouter />
        </Router>
    )
}
