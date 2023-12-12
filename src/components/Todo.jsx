import React, { useState } from "react" ; 
import { Grid , Card , CardContent , TextField , Button} from "@mui/material";

export const Todo=()=>{
    const [data,setData]=useState([]);
    const [txt,setTxt]=useState("");

    const handleDelete=(index)=>{
        const result=data.filter((element,i)=> i!==index);
        setData(result);
    }
    return(
        <Grid  container spacing={2}>
        <Grid item xs={12}>
            <h2 align="center">TODO :</h2>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
        <Card>
            <CardContent>
                <Grid container spacing={2}>
                     <Grid item xs={8}>
                         <TextField value={txt} onChange={(e)=>setTxt(e.target.value)} variant="outlined" fullWidth label="Enter text here..."/>
                     </Grid>
                     <Grid item xs={2}>
                         <Button onClick={()=>setData([...data,txt])} sx={{height:55}} variant="contained" fullWidth color="success">Add</Button>
                     </Grid>
                     <Grid item xs={2}>
                         <Button onClick={()=>setTxt(" ")} sx={{height:55}} variant="contained" fullWidth color="error">Clear</Button>
                     </Grid>
                        {
                            data.map((item,index)=>
                             <Grid item xs={3}>
                               <Card>
                                 <CardContent>
                                     <h4>{index+1}</h4>
                                     <h3>{item}</h3>
                                     <Button onClick={()=>handleDelete(index)} color="error" fullWidth variant="contained">Delete</Button>
                                 </CardContent>
                               </Card>
                             </Grid>
                            )
                        }
                </Grid>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
    );
}