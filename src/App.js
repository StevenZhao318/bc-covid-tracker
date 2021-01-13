import React from "react";

import { Cards, Chart, RegionPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";

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
        <Cards data={data} />
        <RegionPicker handleRegionChange={this.handleRegionChange} />
        <Chart data={data} region={region} />
      </div>
    );
  }
}

export default App;
