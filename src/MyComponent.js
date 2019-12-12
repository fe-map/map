import React from 'react';
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Sales by Product Category",
    subcaption: "Last Quarter",
    showplotborder: "1",
    plotfillalpha: "60",
    hoverfillcolor: "#CCCCCC",
    numberprefix: "$",
    plottooltext:
      "Sales of <b>$label</b> was <b>$$valueK</b>, which was $percentValue of parent category",
    theme: "fusion"
  },
  category: [
    {
      label: "Products",
      tooltext: "Please hover over a sub-category to see details",
      color: "#ffffff",
      value: "150",
      category: [
        {
          label: "Food & Beverage",
          color: "#f8bd19",
          value: "55.5",
          category: [
            {
              label: "Breads",
              color: "#f8bd19",
              value: "11.1"
            },
            {
              label: "Juice",
              color: "#f8bd19",
              value: "27.75"
            },
            {
              label: "Noodles",
              color: "#f8bd19",
              value: "9.99"
            },
            {
              label: "Seafood",
              color: "#f8bd19",
              value: "6.66"
            }
          ]
        },
        {
          label: "Apparel",
          color: "#33ccff",
          value: "42",
          category: [
            {
              label: "Sun Glasses",
              color: "#33ccff",
              value: "10.08"
            },
            {
              label: "Clothing",
              color: "#33ccff",
              value: "18.9"
            },
            {
              label: "Handbags",
              color: "#33ccff",
              value: "6.3"
            },
            {
              label: "Shoes",
              color: "#33ccff",
              value: "6.72"
            }
          ]
        },
        {
          label: "Baby Products",
          color: "#ffcccc",
          value: "22.5",
          category: [
            {
              label: "Bath &{br}Grooming",
              color: "#ffcccc",
              value: "9.45"
            },
            {
              label: "Food",
              color: "#ffcccc",
              value: "6.3"
            },
            {
              label: "Diapers",
              color: "#ffcccc",
              value: "6.75"
            }
          ]
        },
        {
          label: "Electronics",
          color: "#ccff66",
          value: "30",
          category: [
            {
              label: "Laptops",
              color: "#ccff66",
              value: "8.1"
            },
            {
              label: "Televisions",
              color: "#ccff66",
              value: "10.5"
            },
            {
              label: "SmartPhones",
              color: "#ccff66",
              value: "11.4"
            }
          ]
        }
      ]
    }
  ]
};

class MyComponent extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="multilevelpie"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
export default MyComponent;
