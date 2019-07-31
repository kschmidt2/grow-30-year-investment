// adds social class to get social chart
// let element = document.getElementsByClassName("chart-area");
// for(var i = 0; i < element.length; i++)
// {
//     element[i].className += " social";
// }

Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        // data: {
        //     googleSpreadsheetKey: '1p2MZYt4kVx_nS7qreFf_m8YQGcGDnSC2DVUi3oSoZ9c',
        //     endRow: 5
        // },
        series: [{
            name: 'Total investment',
            // color: 'rgba(126,86,134,.9)',
            data: [18000,36000,72000,108000,180000],
            pointPadding: -.6,
            pointPlacement: -.15
        },{
            name: 'Total value',
            // color: 'rgba(165,170,217,1)',
            data: [60644,121288,242575,363863,606438],
            pointPadding: 0,
            pointPlacement: .15,
            clip: false
        }],
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            itemMarginTop: 0,
            floating: true
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            },
            categories: [
                '$50',
                '$100',
                '$200',
                '$300',
                '$500'
            ],
            type: 'category'
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 600000
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            shared: true,
            valuePrefix: '$'
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 20
                },
                legend: {
                    align: 'left',
                    x: -18,
                    floating: false
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});