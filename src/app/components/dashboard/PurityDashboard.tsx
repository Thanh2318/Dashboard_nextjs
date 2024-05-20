import { Box, Card, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import Svg from "react-inlinesvg";

const PurityDashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        py: 2,
      }}
    >
      <Grid item xs={12} md={7} sm={6}>
        <Card
          sx={{
            boxShadow: "none",
            display: "flex",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography color={"#A0AEC0"} fontSize={12} fontWeight={700}>
                Built by developers
              </Typography>

              <Typography color={"#2D3748"} fontSize={18} fontWeight={700}>
                Purity UI Dashboard
              </Typography>

              <Typography color={"#A0AEC0"} fontSize={14}>
                From colors, cards, typography to complex elements, you will
                find the full documentation.
              </Typography>
            </Box>

            <Link href={""} style={{ color: "#2D3748" }}>
              Read more
            </Link>
          </Box>

          <Box>
            <Svg src="/image/dashboard/Image.svg" width={"360px"} />
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} md={5} sm={6}>
        <Card
          sx={{
            height: "100%",
            boxShadow: "none",
            p: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
              justifyContent: "space-between",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: "url('/static/images/backgroundDashboard.png')",
              height: "100%",
              p: 2,
            }}
          >
            <Box>
              <Typography color={"white"} fontSize={18} fontWeight={700}>
                Work with the Rockets
              </Typography>

              <Typography color={"white"} fontSize={14}>
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </Typography>
            </Box>

            <Link href={""} style={{ color: "white" }}>
              Read More
            </Link>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PurityDashboard;
