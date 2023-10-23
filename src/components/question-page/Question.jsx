import React from "react";
import "./Questions.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Question = () => {
  return (
    <>
      <div className="all">
        <div className="wider">
          <div className="questions">
            <p>FAQS</p>
          </div>
          <Accordion className="wide">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>How does it work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="functionality">
                Download the Mamaket mobile app or use the website to browse
                deals on tons of great items nearby. Instantly message the
                seller securely through the app to negotiate prices and set up
                delivery or meetup options. Make and receive payment using the
                Mamaket e-wallet system known as Mamapurse. Sell something of
                your own, by simply taking a picture with your phone, you can
                sell old and new products as well as services. Posting takes
                less than 30 seconds!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="wide">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>What is a marketplace?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="functionality">
                A marketplace is a platform or an environment where buyers and
                sellers come together to engage in commercial transactions. The
                marketplace provides a venue for sellers to offer their goods or
                services to potential customers, who can compare prices and
                quality, make purchases, and provide feedback. Marketplaces can
                be physical locations, such as farmers markets, or online
                platforms like Mamaket. In recent years, there has been a
                significant increase in the number of online marketplaces,
                providing buyers and sellers with greater access to a wider
                range of products and services, and enabling them to transact
                business more efficiently and conveniently. Basically, what you
                need is here just type the search.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Question;
