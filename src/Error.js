import React from 'react';
import error from './Access/img/error.png';

const Error = () => {
    return (
        <section id="contenido404">
            <p>Página Errada... La página a la que intentas acceder NO existe!!!</p>
            <br />
            <img src={error} alt="error404" className="error" width="100%" height="200%" />
        </section>
    )
}

export default Error;