import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "./images/memories.png";

export default function App() {
  return (
    <Container maxwidth="lg">
		<AppBar position="static" color="inherit">
			<Typography varient="h2" align="center">Mermories</Typography>
				<img src={memories} alt="mermories" height="60" />
		</AppBar>
		<Grow in>
			<Container>
				
				<Grid container justify="space-between" alignItems="stretch" spacein>
					<Grid item xs={12} sm={7}>
						<Posts />
					</Grid>
					<Grid item xs={12} sm={7}>
						<Form />
					</Grid>
				</Grid>
			</Container>
		</Grow>
    </Container>
  )
}