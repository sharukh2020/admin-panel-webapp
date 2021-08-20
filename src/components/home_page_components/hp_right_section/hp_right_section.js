import { Card, CardContent, Grid } from '@material-ui/core'
import React from 'react'
import { useTheme } from '@material-ui/styles'
import ComparisonChart2 from '../average_session_time_chart/average_session_time_chart'
import RecipeReviewCard from '../card/card'
import CustomizedTables from '../new_support_tickets/new_support_tickets'

function HP_Right_Section(props){
    const theme = useTheme()
    return(
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <ComparisonChart2
                                height="350px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.light,
                                ]}
                                />
                            </CardContent>
                         </Card>
                    </Grid>
                    <Grid item xs={12}>
                        <RecipeReviewCard
                         cardData={
                            {
                                cardIcon:'',
                                upperText:'160',
                                lowerText:'Total prepaid transactions',
                                class:'4'
                            }
                         }
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <CustomizedTables/>
                    </Grid>
                </Grid> 
        </Grid>
    )
}

export default HP_Right_Section