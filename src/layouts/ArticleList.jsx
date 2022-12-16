import './ArticleList.css';
import React, { useEffect, useState } from 'react'
import { Divider, Image, Item } from 'semantic-ui-react'
import ArticleService from '../services/articleService';

export default function ArticleList() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        let articleService = new ArticleService()
        articleService.getArticles().then(result => setArticles(result.data.data))
    }, [])

    return (
        <div className='degistir'>
             
            {
                articles.map(article => (
                    <Item.Group key={article.id}>
                        
                            <Image avatar size='mini' spaced="right" src="https://media-exp1.licdn.com/dms/image/C4E03AQGTasZUWJDZ9A/profile-displayphoto-shrink_400_400/0/1634329903112?e=1676505600&v=beta&t=Eok6rEoinJw1n13w9me-GKbvmB7_W5V4Nh4Ezt9lnj0"/>
                        
                        <Item>
                            <Item.Content>
                                <Item.Header as='a'>{article.articleTitle}</Item.Header>

                                <Item.Description>{article.articleWriting}</Item.Description>

                            </Item.Content>
                            <Item.Image size='small' src={article.articleImageUrl} />
                        </Item>
                        <Divider section />
                    </Item.Group>
                ))
            }
            
        </div>
    )
}
