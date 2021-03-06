<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
		<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
		<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
		<style>
			* {
				overflow:hidden;
				box-sizing: border-box;
				margin:0;
				padding:0;
			}
			body {
				width:100vw;
				height:100vh;
			}
			header {
				height:5%;
				width:100%;
				background-color:#12389298;
			}
			main {
				width:100%;
				max-width:1024px;
				height:90%;
				margin:auto;
				background-color:#ffffff;
				position:relative;
			}
			nav {
				width:100%;
				height:7%;
				border:solid .5px black;
				display: grid;
				grid-template-columns: repeat(4, 1fr);
				font-family: 'Roboto', sans-serif;
			}
			nav > a {
				height:100%;
				border:solid .25px black;
				grid-column: auto;
				text-align: center;
			}
			#hamburger {
				display:none;
				position: absolute;
				right: 0;
			}
			section {
				overflow-y:auto;
			}
			footer {
				width:100%;
				height:5%;
				background-color:#0092FF87;
			}

			.hide {
				display:none;
			}
			/* STYLINGS FOR PHONE */
		    @media only screen
		    	and (max-device-width : 600px)
		    	and (max-device-height : 1000px) {
		    		nav {
		    			display:none;
		    			height: unset;
		    			width: 30%;
		    			position: absolute;
						right: 0;
						top: 35px;
		    		}
		    		#hamburger {
						display: block;
						position: absolute/;
						right: 10px;
						top: 5px;
					}
					#hamburger span, #hamburger span:before, #hamburger span:after {
						transition: all 500ms ease-in-out;
					}
					#hamburger.active span {

					}
					nav > a {
						display: block;
						height: unset;
					}
		    	}

		    #graphs {
		        height: 92vh;
		        overflow: auto;
				box-shadow: 0px 0px 11px 0px #888888;
		    }


		</style>

	</head>
	<body>
		<header></header>
		<main>
			<div id='hamburger'>
				<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
			</div>
			<nav>
				<a href='#restrictions'>Restrictions</a>
				<a href='#data'>Data</a>
				<a href='#schedule'>Schedule</a>
				<a href='#options'>Options</a>
			</nav>

			<section id='restrictions' class='hide'>
				bluuuuuuuuuuuuup
			</section>
			<!--data section with graphs-->
		    <div id="graphs">
			<section id='data'>
				<p style="font-size: 3em">Productivity Index: __ %</p>
    				<p style="font-size: 2em">Percent Time Spent on Websites</p>
        			<div id="pieChart"></div>
       				<div id="lineGraph"></div>
			</section>
			</div>

			<section id='schedule' class='hide'>
				bleeeeeeeeeeeeeeep
			</section>
			<section id='options' class='hide'>
				blaaaaaaaaaaaaaap
			</section>
		</main>
		<footer></footer>
		<script>
			var pieChartData = [{
              values: [19, 26, 55],
              labels: ['Netflix', 'Wikipedia', 'Canvas'],
              type: 'pie'
            }];

            var pitChartLayout = {
              height: 400,
              width: 500
            };

            Plotly.newPlot('pieChart', pieChartData, pitChartLayout);

            // line graph data

            var prodOverTime = {
              x: [1, 2, 3, 4],
              y: [4, 9, 13, 14],
              type: 'scatter',
              name: "Productivity over Time"
            };

            var trace2 = {
              x: [1, 2, 3, 4],
              y: [16, 5, 11, 9],
              type: 'scatter'
            };

            var lineGraphLayout = {
              title: 'Productivity Rating over Time',
              xaxis: {
                title: '{}s  ', // fix this
                showgrid: false,
                zeroline: false
              },
              yaxis: {
                title: 'Percent',
                showline: false
              }
            };

            var lineGraphData = [prodOverTime, trace2];

            Plotly.newPlot('lineGraph', lineGraphData, lineGraphLayout);
        </script>
	</body>
</html>
