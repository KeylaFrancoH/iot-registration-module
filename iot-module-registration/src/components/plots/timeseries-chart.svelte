<script lang="ts">
	import Chart from 'chart.js/auto';
	import { DateInput } from 'date-picker-svelte';
	import { onMount } from 'svelte';
	export let pointId: string;
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
			return formatedResponse;
		} catch (e: any) {
			throw new Error(e);
		}
	};

	const formatResponse = (response: any) => {
		if (response.response.length === 0) return [];
		let data: any = [];
		let caption: any = [];

		captionText = response?.response?.[0].point?.dis ?? '';
		subCaptionText = response?.response?.[0].point?.equip.dis ?? '';
		unit = response?.response?.[0].registro?.unit ?? '';

		for (let rv of response?.response ?? []) {
			data = [...data, [rv.timestamp_registro.split('.')[0], rv.registro.value]];
			if (!caption.includes(rv.point.dis)) {
				caption.push(rv.point.dis);
			}
		}

		return [data, caption];
	};
	const captionElement = () => {
		getSensorData().then((a) => {
			if (a.length > 0) {
				captionText = a[1][0];
				console.log(captionText);
			}
		});
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
	

	/**
	 * @type {{ getContext: (arg0: string) => any; }}
	 */
	let sensorGraphic: { getContext: (arg0: string) => any };

	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'september'],
		datasets: [
			{
				label: (schema[1].name = `Lecturas de ${captionElement()} (${unit})`),
				data: [10, 20, 30, 40, 50, 60, 70, 20, 100],
				backgroundColor: ['#7000e1', '#fc8800', '#00b0e8'],
				// hoverOffset: 4,
				borderWidth: 0
			}
		]
	};

	const getChartConfig = () => {
		schema[1].name = `Lecturas de ${captionText} (${unit})`;

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
						position: 'left',
						time: {
							displayFormats: { day: 'MM/YY' },
							tooltipFormat: 'DD/MM/YY',
							unit: 'month'
						},
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
						text: captionElement()
					}
				}
			}
		};

		return config;
	};

	onMount(() => {
		const ctx = sensorGraphic.getContext('2d');
		// Initialize chart using default config set
		// @ts-ignore
		var myChart = new Chart(ctx, getChartConfig());
	});

	let date = new Date();
</script>

<DateInput bind:value={date} />

<div id="chart-container" class="sm:max-w-screen">
	<canvas bind:this={sensorGraphic} width={400} height={200} />
</div>
