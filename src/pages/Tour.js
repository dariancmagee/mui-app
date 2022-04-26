import  Typography  from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordion";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal"

const Tour = () => <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img
            src="http://placekitten.com/200/300"
            alt=""
            height={325}
        />
        <ImageCollage />
    </Box>
    <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
        Aute ipsum veniam mollit veniam aute irure ea duis. Cupidatat fugiat pariatur velit qui enim duis occaecat nostrud magna. Labore anim veniam sit amet est incididunt consequat occaecat non laboris non. Irure in ea velit enim duis consectetur adipisicing esse dolore do. Et aute qui adipisicing consectetur duis duis ea sunt excepteur. Est dolor exercitation voluptate minim do dolore officia consectetur minim.
        </Typography>
    </Box>
    <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}> 
            Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>;

export default Tour;