import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import styles from "./Cards.module.css";
import cx from "classnames";

const Cards = ({
  data: { newCases, activeCases, totalDeaths, lastUpdate },
}) => {
  if (!newCases) {
    return "Loading ...";
  }

  let parts = lastUpdate.split("-");
  const year = parts[2];
  const month = parts[1] - 1; // month is 0 indexed
  const day = parts[0];
  console.log(parts);
  const date = new Date(year, month, day).toDateString();

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.new)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              New Cases
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={newCases} duration={1} seperator="," />
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2">New cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.active)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Active Cases
            </Typography>
            <Typography variant="h5">
              {activeCases ? (
                <CountUp
                  start={0}
                  end={activeCases}
                  duration={1}
                  seperator=","
                />
              ) : (
                "N/A"
              )}
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2">Active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Total Deaths
            </Typography>
            <Typography variant="h5">
              {" "}
              <CountUp start={0} end={totalDeaths} duration={1} seperator="," />
            </Typography>
            <Typography color="textSecondary">{date}</Typography>
            <Typography variant="body2">Deaths from COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
