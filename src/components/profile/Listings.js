import React,{useState} from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteDialog from "./DeleteDialog";
import ViewDialog from "./ViewDialog";

export default function Listings() {
  const classes = useStyles();
  const [openDelete,setOpenDelete] = useState(false)
  const [openView,setOpenView] = useState(false)

  const handleDelete = () =>{
      setOpenDelete(!openDelete)
  }
  const handleView = () =>{
    setOpenView(!openView)
  }
  const imageUrl =
    "http://patpat-s3-live.s3.amazonaws.com/uploads/30ab9e94924fbbd7efa6682bbce08a29-710100.jpeg";
  return (
    <Container>
      <Grid container alignItems="center" direction="column" >
        <Grid item>
          <Card className={classes.root}>
            <CardContent>
              <Grid container item justifyContent="space-between"> 
                <Grid item>
                  <Grid item container spacing={4}>
                    <Grid item>
                      <img
                        alt="Remy Sharp"
                        width="150rem"
                        src={imageUrl}
                        className={classes.large}
                      />
                    </Grid>
                    <Grid item>
                        <Grid item container direction="column">
                            <Grid item>
                            <Typography variant="subtitle1"> <li>Title - Land Sale in Malabe</li></Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1"><li>Price - Rs.45,0000</li></Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1"><li>Type - Land</li></Typography>
                            </Grid>
                            <Grid item>
                            <Typography variant="subtitle1"><li>Location - Malabe</li></Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item >
                  <Grid item container direction="column" justifyContent="center" alignItems="center">
                      <br/>
                      <br/>
                      
                      <Grid item>
                          <Grid item container spacing={2}>
                              {/* <Grid item>
                                  <EditIcon fontSize="medium" className={classes.editBtn}/>
                              </Grid> */}
                              <Grid item>
                                  <DeleteIcon fontSize="medium" className={classes.deleteBtn} onClick={() =>handleDelete() }/>
                              </Grid>
                              <Grid item>
                                  <VisibilityIcon fontSize="medium" className={classes.viewBtn} onClick={() =>handleView() }/>
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
               
              </Grid>
            </CardContent>
          </Card>
        </Grid>
       
      </Grid>
      {openDelete && <DeleteDialog open={openDelete} handleDelete={handleDelete}/>}
      {openView && <ViewDialog open={openView} title={"Listing Details"} handleView={handleView}/>}
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "4rem",
    minWidth: 850,
    backgroundColor: "#FFFDE7",
  },
  editBtn:{
    "&:hover": {
        color: theme.palette.success.main
      }
  },
  deleteBtn:{
    "&:hover": {
        color: theme.palette.error.main
      }
  },
  viewBtn:{
    "&:hover": {
        color: theme.palette.primary.main
      }
  },

}));
