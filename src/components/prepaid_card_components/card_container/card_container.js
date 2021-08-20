import { Grid } from '@material-ui/core'
import React from 'react'
import { connect } from 'react-redux'
import RecipeReviewCard from '../card/card'

function CardContainer(props){
    const cards=props.cardsDataArr.map((item,pos)=>{
        const cardData={
            cardIcon:item.cardIcon,
            upperText:item.upperText,
            lowerText:item.lowerText,
            class:item.class
        }
        return(
            <Grid key={pos} item xs={12} sm={6} md={3}>
                <RecipeReviewCard cardData={cardData}/>
            </Grid>
        )
    })
    return(
            <Grid container spacing={2}>
               {cards}
             </Grid>
    )
}

const connectionToGlobalStore=(globalStore)=>{
    return{
        cardsDataArr:globalStore.home_page_reducer.homePageCardsDataArr
    }
}

export default connect(connectionToGlobalStore,null)(CardContainer)