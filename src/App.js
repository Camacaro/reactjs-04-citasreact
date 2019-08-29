import React, { Component } from 'react';
import Header from './componentes/Header';
import AgregarCita from './componentes/AgregarCita';
import ListaCitas from './componentes/ListaCitas';

class App extends Component {
	
	state = {
		citas: []
	}

	/**
	 * Se ejcuta al cargar el componente, funciona como un document ready
	 */
	componentDidMount(){
		console.log('esta listo');
		const citasLS = localStorage.getItem('citas');

		/**
		 * Validamos que exista citas almacenadas 
		 */
		if(citasLS){
			this.setState({
				citas: JSON.parse(citasLS) 
			});
		}else {

		}
	}

	/**
	 * Se ejecuta antes de cargar el componente
	 */
	componentWillMount(){
		console.log('yo me ejecuto antes');
	}

	/**
	 * Se ejecuta al cerrar el componente
	 */
	componentWillUnmount(){
		console.log('yo hasta que se cierre el componente');
	}

	/**
	 * Se ejcuta al cambiar el componente
	 * Cuando se ejecuta almacenamos los cambios en el localstorage
	 */
	componentDidUpdate() {
		console.log('algo cambio');
		localStorage.setItem( 'citas', JSON.stringify(this.state.citas) );
	}



	/**
	 * crearCita es un arrow function y al pasarla como props se pasa como variable
	 */
	crearCita = (nuevaCita) => {
		

		/**
		 * Copiar el state con spree operator, y le agregamos la nueva cita
		 */
		const citas = [...this.state.citas, nuevaCita];

		console.log(citas); 

		/**
		 * Guardamos las citas en el state
		 */
		this.setState({
			citas
		});
	}

	borrarCita = (id) => {
		/**
		 * obtener copia del state
		 */
		const citasActuales = [...this.state.citas];

		/**
		 * Borrar cita del state
		 * Lo que hago es iterarlo y que me devulva todos los diferentes al id que se pasa
		 */
		const citas = citasActuales.filter( cita => cita.id !== id );

		/**
		 * Actualizar state
		 */
		this.setState({
			citas
		})

	}
	
	render() {
    	return (
      		<div className="container">
				<Header
					titulo={'Administrador de Pacientes de Veterinaria'}
				/>

				<div className="row">
					<div className="col-md-6">
						<AgregarCita crearCita={this.crearCita}/>
					</div>

					<div className="col-md-6">
						<ListaCitas citas={this.state.citas} borrarCita={this.borrarCita}/>
					</div>
				</div>

				
      		</div>
    	);
  	}
}

export default App;
