<script lang="ts">
	// export const prerender = true;

	import SvelteFC, { fcRoot } from 'svelte-fusioncharts';
	import { onMount, onDestroy } from 'svelte';
	import Chart from 'chart.js/auto';
   
	import { DateInput } from 'date-picker-svelte'
	let date = new Date()
    
  


	let myChart: Chart;
	let chartData: any;
	let data = [20, 100, 50, 12, 20, 130, 45];
    let labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let ctx;
    let canvas:any;
	export let pointId: string;
	export let timeRefreshData: number = 45;
	const apiStandardization = import.meta.env.VITE_API_STANDARDIZATION;

	$: pointId;

	let captionText = '';
	let subCaptionText = '';
	let unit = '';

	//@ts-ignore
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

	const raw = JSON.stringify({
		pointsIds: [pointId],
		filtroPorEtiquetas: {
			etiquetas: []
		},
		limite: 2000
	});

	const requestOptions: any = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	const getSensorData = async () => {
		try {
			const res = await fetch(`${apiStandardization}/obtener-datos`, requestOptions);
			const response = await res.json();
			const formatedResponse = formatResponse(response);
			console.log('timeseriesResponse', response);
			return formatedResponse;
		} catch (e: any) {
			throw new Error(e);
		}
	};

	const formatResponse = (response: any) => {
		if (response.response.length === 0) return [];
		let data: any = [];

		captionText = response?.response?.[0].point?.dis ?? '';
		subCaptionText = response?.response?.[0].point?.equip.dis ?? '';
		unit = response?.response?.[0].registro?.unit ?? '';

		for (let rv of response?.response ?? []) {
			data = [...data, [rv.timestamp_registro.split('.')[0], rv.registro.value]];
		}
		return data;
	};

	let FusionCharts: any;
	let Timeseries: any;
	onMount(async () => {
		// getSensorData();
	//	Timeseries = await import('fusioncharts/fusioncharts.timeseries');
		//FusionCharts = await import('fusioncharts');
	//	fcRoot(FusionCharts.default, Timeseries.default);
		grafica();
	});

	onDestroy(() => {
		clearInterval(interval);
		//console.log('DESTROY: ', pointId);
	});

	const schema = [
		{
			name: 'Marca de tiempo',
			type: 'date',
			format: '%Y-%m-%dT%H:%M:%S'
		},
		{
			name: `Lectura de ${captionText}`,
			type: 'number'
		}
	];
	const grafica = () => {
		schema[1].name = `Lecturas de ${captionText} (${unit})`;

		
/*
		const ctx = document.getElementById('myChart') as HTMLCanvasElement;

		myChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: [1, 2.3],
				datasets: [
					{
						label: 'Unit Sales',
						data: [2,8,7]
					}
				]
			}
		});*/

		ctx = canvas.getContext('2d');
        var chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Unit Sales',
                        data: data
                    }
                ]
            }
        });
	};


	const getChartConfig = (data: any) => {
		schema[1].name = `Lecturas de ${captionText} (${unit})`;

		const fusionDataStore = new FusionCharts.DataStore();
		const fusionTable = fusionDataStore.createDataTable(data, schema);

		const chartConfig = {
			type: 'timeseries',
			width: '100%',
			height: 600,
			renderAt: 'chart-container',
			dataSource: {
				data: fusionTable,
				caption: {
					text: captionText
				},
				subcaption: {
					text: subCaptionText
				},
				yAxis: [
					{
						plot: {
							value: 'Valor Sensado',
							type: 'line',
							connectnulldata: true
						},
						format: {
							sufix: '$'
						},
						title: `Lecturas de ${captionText}`
					}
				]
			}
		};

		return chartConfig;
	};

	let chartComponent: any;

	let interval: any;

	const updateData = async () => {
		const updatedSensorData = await getSensorData();
		//console.log('GET DATA: ', pointId);
		if (!!chartComponent?.feedData) {
			//console.log('UPDATE CHART: ', pointId);
			chartComponent.feedData([...updatedSensorData]);
		}

		// setTimeout(updateData, timeRefreshData * 1000);
	};

	const renderCompleteHandler = async (event: any) => {
		//console.log(!interval);

		if (!interval) {
			//console.log('INICIAR INTERVALO: ', pointId, 'tiempo: ', timeRefreshData);

			interval = setInterval(async () => await updateData(), timeRefreshData * 1000);
		}
	};
</script>

<div id="chart-container" class="sm:max-w-screen">
	
		{#await getSensorData()}
			<p>Obteniendo datos y esquema...</p>
		{:then value}
			{#if value.length > 0}
				<!--
				<SvelteFC
					
					{...getChartConfig(value)}
					on:renderComplete={renderCompleteHandler}
					bind:chart={chartComponent}

					
				/>
			-->
			<canvas bind:this={canvas} width={32} height={32} />
            <DateInput bind:value={date} />
			{:else}
				<div class="w-full flex justify-center font-semibold m-10">SIN DATOS QUE MOSTRAR</div>
			{/if}
		{:catch error}
			<p>Something went wrong: {error.message}</p>
		{/await}
	
</div>
<style>
    canvas {
        width: 100%;
        height: 100%;
        background-color: #666;
    }
</style>