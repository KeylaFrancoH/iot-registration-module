<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';
	import { DateInput } from 'date-picker-svelte';
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


	//@ts-ignore
	var myHeaders = new Headers();
	myHeaders.append('Content-Type', 'application/json');

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

	console.log(getSensorData())
	/**
	 * @type {{ getContext: (arg0: string) => any; }}
	 */
	let portfolio: { getContext: (arg0: string) => any; };
	const data = {
		labels: ['Expenses', 'Savings', 'Investments'],
		datasets: [
			{
				label: schema[1].name = `Lecturas de ${captionText} (${unit})`,
				data: [300, 50, 100],
				backgroundColor: ['#7000e1', '#fc8800', '#00b0e8'],
				// hoverOffset: 4,
				borderWidth: 0
			}
		]
	};
	const config = {
		type: 'line',
		data: data,
		options: {
			borderRadius: '30',
			responsive: true,
			cutout: '95%',
			spacing: 2,
			plugins: {
				legend: {
					position: 'bottom',
					display: true,
					labels: {
						usePointStyle: true,
						padding: 20,
						font: {
							size: 14
						}
					}
				},
				title: {
					display: true,
					text: 'My Personal Portfolio'
				}
			}
		}
	};
	onMount(() => {
		const ctx = portfolio.getContext('2d');
		// Initialize chart using default config set
		// @ts-ignore
		var myChart = new Chart(ctx, config);
	});

	let date = new Date();
</script>

<DateInput bind:value={date} />
<canvas bind:this={portfolio} width={400} height={400} />
