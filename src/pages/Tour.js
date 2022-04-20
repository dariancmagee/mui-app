import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage"
import CustomizedAccordions from "../components/Accordion"

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
    <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            Frequently Asked Questions
        </Typography>
        <CustomizedAccordions />
       
    </Box>
</Container>;

export default Tour;