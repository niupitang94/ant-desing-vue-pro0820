<template>
  <div>
    <a-date-picker></a-date-picker>
    <Chart :option="chartOption" style="height: 400px" />
  </div>
</template>
<script>
import request from "../../utils/request";
import Chart from "../../components/Chart";
export default {
  name: "Analysis",
  data() {
    return {
      chartOption: {}
    };
  },
  components: {
    Chart
  },
  mounted() {
    this.getChartData();
    this.interval = setInterval(() => {
      this.getChartData();
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    getChartData() {
      request({
        url: "/api/dashboard/chart",
        method: "GET",
        params: { ID: 12345 }
      }).then((response) => {
        console.log(response);
        this.chartOption = {
          title: {
            text: "ECharts 入门示例"
          },
          tooltip: {},
          xAxis: {
            data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
          },
          yAxis: {},
          series: [
            {
              name: "销量",
              type: "bar",
              data: response.data
            }
          ]
        };
      });
    }
  }
};
</script>
