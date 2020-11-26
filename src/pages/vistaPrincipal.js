import React, { Component } from "react";
import Header from "../components/header";
import "./styles/vistaPrincipal.css";
import SelectBox from "../components/selectbox";
import Menu from "../components/menu";
class VistaPrincipal extends Component {
  render() {
    return (
    <React.Fragment>
        <Header />
        <Menu />
        <div className='select1'>
     <SelectBox 
        items={[
          {value: 'Región de Valparaíso', id:1 },
          {value: 'Región de Tarapacá', id:2 },
          {value: 'Región de Antofagasta', id:3 },
          {value: 'Región de Atacama', id:4 },
          {value: 'Región de Coquimbo', id:5 },
          {value: 'Región de Valparaíso', id:6 },
          {value: 'Región Metropolitana', id:7 },
          {value: 'Region del L. B. O´higgins', id:8 },
          {value: 'Región del Maule', id:9 },
          {value: 'Región del Ñuble', id:10 },
          {value: 'Región del Biobío', id:11 },
          {value: 'Región de la Araucanía', id:12 },
          {value: 'Región de los Ríos', id:13 },
          {value: 'Región de Los Lagos', id:14 },
          {value: 'Región de Aysén', id:15 },
          {value: 'Región de Magallanes', id:16 },
          {value: 'Reg. de Arica y Parinacota', id:17 }, 
        ]}/>
        </div>
        <div className='select2'>
        <SelectBox 
        items={[
          {value: 'Colina', id:1 },
          {value: ' Lampa', id:2 },
          {value: ' Til Til', id:3 },
          {value: 'Pirque', id:4 },
          {value: 'Puente Alto', id:5 },
          {value: 'San José de Maipo', id:6 },
          {value: 'Buin', id:7 },
          {value: ' Paine', id:8 },
          {value: 'Alhué', id:9 },
          {value: ' Curacaví', id:10 },
          {value: 'María Pinto', id:11 },
          {value: ' Melipilla', id:12 },
          {value: 'San Pedro', id:13 },
          {value: 'Cerrillos', id:14 },
          {value: 'Conchalí', id:15 },
          {value: ' El Bosque', id:16 },
          {value: 'Estación Central', id:17 }, 
          {value: 'Huechuraba', id:18 },
          {value: 'Independencia', id:19 },
          {value: 'La Cisterna', id:20 },
          {value: ' La Granja', id:21 },
          {value: 'La Florida', id:22 },
          {value: ' La Pintana', id:23 },
          {value: 'La Reina', id:24 },
          {value: 'Las Condes', id:25 },
          {value: 'Lo Barnechea', id:26 },
          {value: ' Lo Espejo', id:27 },
          {value: 'Lo Prado', id:28 },
          {value: 'Macul', id:29 },
          {value: ' Maipú', id:31 },
          {value: ' Maipú', id:32 },
          {value: ' Maipú', id:33 },
          {value: ' Maipú', id:34 },
          {value: ' Maipú', id:35 },
          {value: ' Maipú', id:36 },
          {value: ' Maipú', id:37 },
          {value: ' Maipú', id:38 },
          {value: ' Maipú', id:39 },
          {value: ' Maipú', id:40 },
          {value: ' Maipú', id:41 },
        ]}/>
        </div>
      </React.Fragment>
    );
  }
}

export default VistaPrincipal;
