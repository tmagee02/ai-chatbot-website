import React from 'react'
import PathConstants from './pathConstants'

const Home = React.lazy(() => import('../pages/Home'))
const StayingHealthy = React.lazy(() => import('../pages/StayingHealthy'))
const ResourceCenter = React.lazy(() => import('../pages/ResourceCenter'))
const About = React.lazy(() => import('../pages/About'))

const routes = [
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.STAYINGHEALTHY, element: <StayingHealthy /> },
    { path: PathConstants.RESOURCECENTER, element: <ResourceCenter /> },
    { path: PathConstants.ABOUT, element: <About /> },
]
export default routes
