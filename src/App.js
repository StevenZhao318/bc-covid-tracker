import React from "react";

import { Cards, Chart, RegionPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import { Typography } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    region: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    console.log(data);
    this.setState({ data });
  }

  handleRegionChange = async (region) => {
    const data = await fetchData(region);
    this.setState({ data, region: region });
  };

  render() {
    const { data, region } = this.state;

    return (
      <div className={styles.container}>
        <RegionPicker handleRegionChange={this.handleRegionChange} />
        <Cards data={data} />
        <Chart data={data} region={region} />
      </div>
    );
  }
}

export default App;
