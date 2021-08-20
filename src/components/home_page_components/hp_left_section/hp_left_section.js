import { Card, CardContent, CardHeader, Grid, IconButton, makeStyles } from '@material-ui/core'
import React from 'react'
import CardContainer from '../card_container/card_container'
import LineChart from '../total_visits_chart/total_visits_chart'
import { useTheme } from '@material-ui/styles'
import CustomizedTables from '../reported_posts_table/reported_posts_table'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles=makeStyles((theme)=>{
    return{
        heading:{
            fontWeight:'600',
            marginBottom:theme.spacing(3)
        },
        cardTitle:{
            fontSize:'17px',
            fontWeight:'600'
        },
        lineChartCard:{
            marginBottom:theme.spacing(3)
        }
    }
})

function HP_Left_Section(props){
    const classes=useStyles()
    const theme = useTheme()
    return(
        <Grid item xs={12} lg={8}>
           <Grid container spacing={3}>
               <CardContainer/>
                <Grid item xs={12}>
                <Card className={classes.lineChartCard}>
                    <CardHeader
                        title="Total Visits"
                        classes={{
                            title:classes.cardTitle
                        }}
                    />
                    <CardContent>
                        <LineChart
                        height="350px"
                        color={[
                            theme.palette.primary.main,
                            theme.palette.primary.light,
                        ]}
                        />
                    </CardContent>
                </Card>
                </Grid>
                <Grid item xs={12}>
                    <Card>
                       <CardHeader
                            action={
                                <IconButton aria-label="settings">
                                    <ArrowRightAltIcon/>
                                </IconButton>
                            }
                            title="Reported Posts"
                                classes={{
                                    title:classes.cardTitle 
                            }}
                       />
                       <CardContent>
                          <CustomizedTables/> 
                       </CardContent> 
                    </Card>
                </Grid>
           </Grid>
        </Grid>
    )
}

export default HP_Left_Section