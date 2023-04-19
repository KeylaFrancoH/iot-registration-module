<script lang="ts">
</script>

<nav class="navbar">
	<div class="navbar-container container">
		<input type="checkbox" name="" id="" />
		<div class="hamburger-lines">
			<span class="line line1" />
			<span class="line line2" />
			<span class="line line3" />
		</div>
		<ul class="menu-items">
			<li><a href="/">Dashboard Demo</a></li>
			<li><a href="/registrar-modulo">Registrar Entidad</a></li>
			<li><a href="/endpoints">Endpoint datos abiertos</a></li>
		</ul>
		<a href="https://www.espol.edu.ec/" class=" items-center">
			<img
				src="https://www.espol.edu.ec/sites/default/files/d9/logoESPOL.svg"
				class="imagen"
				alt="Espol Logo"
			/>
			<span class="logo">Sistema de Registro de Módulos IoT</span>
		</a>
	</div>
</nav>

<style>
	*,
	*::after,
	*::before {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	.html {
		font-size: 62.5%;
	}

	.navbar input[type='checkbox'],
	.navbar .hamburger-lines {
		display: none;
	}

	.container {
		max-width: 1200px;
		width: 90%;
		margin: auto;
	}

	.navbar {
		box-shadow: 0 3px 2px -2px #aaa;
		position: fixed;
		width: 100%;
		background: white;
		color: #000;
		opacity: 0.85;
		z-index: 100;
		padding-bottom: 10px;
		padding-top: 10px;
		left: 0;
		top: 0;
	}

	.navbar-container {
		display: flex;
		justify-content: space-between;
		height: 64px;
		align-items: center;
	}

	.menu-items {
		order: 2;
		display: flex;
	}
	.logo,
	.imagen {
		order: 1;
	}

	.menu-items li {
		list-style: none;
		margin-left: 1.5rem;
		font-size: 1.3rem;
	}

	.navbar a {
		color: #444;
		text-decoration: none;
		font-weight: 500;
		transition: color 0.3s ease-in-out;
	}

	.navbar a:hover {
		color: #1976d2;
	}

	@media (max-width: 900px) {
		.menu-items li {
			font-size: 1rem;
		}
		.logo {
			font-size: 0.9rem;
		}
	}
	@media (max-width: 814px) {
		.menu-items li {
			font-size: 0.8rem;
		}
		.logo {
			font-size: 0.7rem;
		}
	}
	@media (max-width: 785px) {
		.navbar {
			opacity: 0.95;
			padding-top: 30px;
		}

		.navbar-container input[type='checkbox'],
		.navbar-container .hamburger-lines {
			display: block;
		}

		.navbar-container {
			display: block;
			position: relative;
			height: 64px;
			margin: 0;
		}

		.navbar-container input[type='checkbox'] {
			position: absolute;
			display: block;
			height: 32px;
			width: 30px;
			top: 20px;
			left: 20px;
			z-index: 5;
			opacity: 0;
			cursor: pointer;
		}

		.navbar-container .hamburger-lines {
			display: block;
			height: 20px;
			width: 22px;
			position: absolute;
			top: 20px;
			left: 20px;
			z-index: 2;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.navbar-container .hamburger-lines .line {
			display: block;
			height: 4px;
			width: 100%;
			border-radius: 10px;
			background: #333;
		}

		.navbar-container .hamburger-lines .line1 {
			transform-origin: 0% 0%;
			transition: transform 0.3s ease-in-out;
		}

		.navbar-container .hamburger-lines .line2 {
			transition: transform 0.2s ease-in-out;
		}

		.navbar-container .hamburger-lines .line3 {
			transform-origin: 0% 100%;
			transition: transform 0.3s ease-in-out;
		}

		.navbar .menu-items {
			padding-top: 100px;
			background: #fff;
			height: 100vh;
			max-width: 50%;
			transform: translate(-150%);
			display: flex;
			flex-direction: column;
			margin-left: -40px;
			padding-left: 40px;
			transition: transform 0.5s ease-in-out;
			box-shadow: 2px 0 5px -2px #aaa;
			overflow: scroll;
		}

		.navbar .menu-items li {
			margin-bottom: 1.8rem;
			font-size: 1.1rem;
			font-weight: 500;
		}

		.logo {
			position: absolute;
			bottom: 4px;
			left: 80px;
		}

		.imagen {
			position: absolute;
			top: 2px;
			left: 80px;
			height: 2.5rem;
		}

		.navbar-container input[type='checkbox']:checked ~ .menu-items {
			transform: translateX(0);
		}

		.navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line1 {
			transform: rotate(45deg);
		}

		.navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line2 {
			transform: scaleY(0);
		}

		.navbar-container input[type='checkbox']:checked ~ .hamburger-lines .line3 {
			transform: rotate(-45deg);
		}
	}

	@media (max-width: 500px) {
		.navbar-container input[type='checkbox']:checked ~ .logo {
			display: none;
		}
	}

	@media (max-width: 370px) {
		.imagen {
			top: 4px;
			left: 80px;
			height: 2rem;
		}

		.logo {
			bottom: 8px;
			left: 80px;
			font-size: 0.8rem;
		}
		.navbar .menu-items {
			max-width: 80%;
		}
		.navbar .menu-items li {
			margin-bottom: 1.4rem;
			font-size: 0.8rem;
		}
	}

	@media (max-width: 310px) {
		.imagen {
			top: 1px;
		}

		.logo {
			bottom: 1px;
			font-size: 0.7rem;
		}

		.navbar .menu-items {
			max-width: 90%;
		}
	}
</style>
