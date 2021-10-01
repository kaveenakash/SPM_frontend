import React,{useState,useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory,useParams } from "react-router-dom";
import { useTheme } from "@material-ui/core/styles";


import Container from "@material-ui/core/Container";
import CarouselCard from "../reusable/carousel/CarouselCard";
import AmountCard from '../reusable/AmountCard'
import DescriptionTable from "./DescriptionTable";
import DescriptionCard from "./DescriptionCard";
import Warning from "../reusable/warning/Warning";
import {serviceAdds} from '../../store/data'
import axios from "axios";
const ServiceDetail = (props) => {
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  const theme = useTheme();

  const [serviceData,setServiceData] = useState([])
  const [selectedData, setSelectedData] = useState([])

  const handleHomeLink = (event) => {
    event.preventDefault();
    history.replace("/");
  };

   
  useEffect(() =>{

    async function findService() {
      // console.log(result)
     

      const selectedService = serviceAdds.filter(item => item.id == 2)
      setServiceData(selectedService)
      console.log(selectedService)
      const result = await axios.get (`http://localhost:9090/api/service/get-service/${params.id}`)
      setSelectedData(result.data)
      console.log(result)
    }
    findService()
  },[]) 

  console.log(params.id)
  return (
    <React.Fragment>
      <Container fixed className={classes.container}>
        <Grid container direction="column" className={classes.root}>
          <Grid item container justifyContent="flex-start">
            <Grid item>
              <Breadcrumbs aria-label="breadcrumb" className={classes.breadCrumb}>
                <Link color="inherit" href="/" onClick={handleHomeLink}>
                  Home
                </Link>
                <Link
                  color="inherit"
                  href="/getting-started/installation/"
                  onClick={handleHomeLink}
                >
                  Services
                </Link>
              </Breadcrumbs>
            </Grid>
           
          </Grid>
          {serviceData.map(item => {
            return(
          <Grid item>
              <Grid item container direction="column" alignItems="flex-start" >
                  <Grid item className={classes.headerContainer}>
                    
                    <Typography variant="h5" className={classes.header}>{selectedData.title}</Typography>
                  
                  </Grid>
                  <Grid item>
                  <Typography variant="subtitle1" className={classes.subTitle}>For Sale By {selectedData.name} on {new Date().toLocaleDateString()}, {selectedData.district}, {selectedData.area}</Typography>
                  </Grid>

                  <Grid item className={classes.sliderContainer}>
                      <Grid item container alignItems="flex-start" spacing={2}>
                          <Grid item >
                              <CarouselCard imageData={selectedData.images ? selectedData.images:[]}/>
                          </Grid>
                          <Grid item>
                              <Grid item container direction="column">
                                  <Grid item>
                                  <AmountCard amount={selectedData.price ?  selectedData.price : 1500000} leaseRental={selectedData.price/20} downPayment={((selectedData.price/40) + 100000)} boxOneTitle={'BEST LEASE RENTAL'} boxTwoTitle={'DOWN PAYMENT'}/>
                                  </Grid>
                                  <Grid item className={classes.descriptionTableContainer}>
                                      <DescriptionTable serviceDetails={selectedData ? selectedData : []}/>
                                  </Grid>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                  <Grid item className={classes.descriptionCardContainer}>
                    <DescriptionCard/>
                  </Grid>
                  <Grid item className={classes.descriptionCardContainer}>
                    <Warning/>
                  </Grid>
              </Grid>
          </Grid>

            )
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};


const useStyles = makeStyles((theme) => ({
    root:{
        marginTop:'1rem'
    },
    breadCrumb:{
        color:theme.palette.common.seaGray
    },
    headerContainer:{
        marginTop:'2rem'
    },
    header:{
        fontFamily:'Roboto',
        color:theme.palette.secondary.main
    },
    subTitle:{
        fontFamily:'Roboto',
        color:theme.palette.secondary.dark
    },
    sliderContainer:{
        marginTop:'1rem'
    },
    descriptionTableContainer:{
        marginTop:'1rem'
    },
    descriptionCardContainer:{
        marginTop:'3rem'
    }
}));

export default ServiceDetail;
