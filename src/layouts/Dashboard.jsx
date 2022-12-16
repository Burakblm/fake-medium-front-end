import React from 'react'
import { Container } from 'semantic-ui-react'
import ArticleList from './ArticleList'
import Navi from './Navi'

export default function Dashboard() {
  return (
    <div>
        <Navi/>
        <Container>
        <ArticleList/>
        </Container>
    </div>
  )
}
