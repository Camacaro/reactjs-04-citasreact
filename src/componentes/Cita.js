import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {
    
    eliminarCita = () => {
        //console.log(`Eliminando cita... ${this.props.info.id}`);

        this.props.borrarCita(this.props.info.id);
    }
    
    render() {

        const {mascota, propietario, fecha, hora, sintomas} = this.props.info;

        return (
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="mt-0"> {mascota} </h3>
                    <p className="card-text"> <span>Nombre del Dueño: </span> {propietario} </p>
                    <p className="card-text"> <span>Fecha </span>{fecha}</p>
                    <p className="card-text"> <span>Hora: </span>{hora}</p>
                    <p className="card-text"> <span>Sintomas: </span></p>
                    <p className="card-text"> {sintomas} </p>

                    <button onClick={this.eliminarCita} className="btn btn-danger"> Borrar &times; </button>
                </div>
            </div>
        );
    }
}

/**
 * Con shape destructuramos el objeto para colocar el tipo de valor que debe tener
 */
Cita.propTypes = {
    info: PropTypes.shape({
        mascota:        PropTypes.string.isRequired,
        propietario:    PropTypes.string.isRequired,
        fecha:          PropTypes.string.isRequired,
        hora:           PropTypes.string.isRequired,
        sintomas:       PropTypes.string.isRequired,
        id:             PropTypes.string.isRequired,
    }),
    borrarCita: PropTypes.func.isRequired
}
export default Cita;