import React, { Component } from 'react';
import Menu from '../components/menu';
import Header from '../components/header';
import SelectBox from '../components/selectbox';
import './styles/form.css';





class Form extends Component {
    
    constructor (props) {
      super(props)
      this.state = {
        nombre: '',
        nacionalidad: '',
        representante: '',
        rut: '',
        estadocivil: '',
        actuando: '',
        nombreP:'',
        nacionalidadP:'',
        representanteP: '',
        rutP: '',
        estadocivilP: '',
        actuandoP: '',
        nombreProyecto: '',
        comuna: '',
        rolEvaluo: '',
        direccion: '',
        region: '',
        loteo: '',


      }
    }

    
    handleChange = (e) => {
      const { name, value } = e.target
      this.setState({ [name]: value })
    }
    
    handleSubmit = (e) => {
      e.preventDefault()
      const values = JSON.stringify(this.state)
      alert(values)
    }
    
    render () {

        const { nombre, nacionalidad, representante, rut , estadocivil , actuando, nombreP, nacionalidadP, representanteP , rutP , estadocivilP , actuandoP, nombreProyecto, comuna, rolEvaluo, direccion, region, loteo  } = this.state
      
      return (



            <div>
           <Header/>
           <Menu/>
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
    
  
           <h1>Antecedentes de las partes</h1>
           <h2>Datos del cliente</h2>
           <form onSubmit={this.handleSubmit}>
            <div>

                <input 
                  type="text"
                  name="nombre"
                  value={nombre} 
                  placeholder='Nombre'
                  onChange={this.handleChange} 
                />

            </div>
            
            <br/>
            <div>

                <input 
                  type="text"
                  name="nacionalidad"
                  value={nacionalidad} 
                  placeholder= 'Nacionalidad'
                  onChange={this.handleChange} 
                />
            </div> 
            <br/>
            <div>

                <input 
                  type="text"
                  name="representante"
                  value={representante} 
                  placeholder='Representante'
                  onChange={this.handleChange} 
                />
            </div>
            <br/>
            <div>

                <input 
                  type="text"
                  name="rut"
                  value={rut} 
                  placeholder='Rut'
                  onChange={this.handleChange} 
               />
            </div>
            <br/>
            <div>

                <input 
                  type="text"
                  name="estadocivil"
                  value={estadocivil} 
                  placeholder='Estado Civil'
                  onChange={this.handleChange} 
               />
            </div>
            <br/>            
            
            <div>

                <input 
                  type="text"
                  name="actuando"
                  value={actuando} 
                  placeholder='Actuando'
                  onChange={this.handleChange} 
                />
            </div>
            <br/>
            
            <div>

            <h1>
                Datos del propietario
            </h1>
            <div>

<input 
  type="text"
  name="nombreP"
  value={nombreP} 
  placeholder='Nombre Propietario'
  onChange={this.handleChange} 
/>

</div>

<br/>
<div>

<input 
  type="text"
  name="nacionalidadP"
  value={nacionalidadP} 
  placeholder='Nacionalidad'
  onChange={this.handleChange} 
/>
</div> 
<br/>
<div>

<input 
  type="text"
  name="representanteP"
  value={representanteP} 
  placeholder='Representante'
  onChange={this.handleChange} 
/>
</div>
<br/>
<div>

<input 
  type="text"
  name="rutP"
  value={rutP} 
  placeholder='Rut'
  onChange={this.handleChange} 
/>
</div>
<br/>
<div>

<input 
  type="text"
  name="estadocivilP"
  value={estadocivilP}
  placeholder='Estado Civil' 
  onChange={this.handleChange} 
/>
</div>
<br/>            

<div>

<input 
  type="text"
  name="actuandoP"
  value={actuandoP} 
  placeholder='Actuando'
  onChange={this.handleChange} 
/>
</div>
<br/>
           
            <div>

<input 
  type="text"
  name="nombreProyecto"
  value={nombreProyecto} 
  placeholder='Nombre proyecto (condominio, etc)'
  onChange={this.handleChange} 
/>

</div>

<br/>
<div>

<input 
  type="text"
  name="comuna"
  value={comuna} 
  placeholder='Comuna'
  onChange={this.handleChange} 
/>
</div> 
<br/>
<div>

<input 
  type="text"
  name="rolEvaluo"
  value={rolEvaluo} 
  placeholder='Rol de Evaluo'
  onChange={this.handleChange} 
/>
</div>
<br/>
<div>

<input 
  type="text"
  name="direccion"
  value={direccion} 
  placeholder='Dirección'
  onChange={this.handleChange} 
/>
</div>
<br/>
<div>

<input 
  type="text"
  name="region"
  value={region} 
  placeholder='Región'
  onChange={this.handleChange} 
/>
</div>
<br/>            

<div>

<input 
  type="text"
  name="loteo"
  value={loteo} 
  placeholder='N° loteo o parcelación'
  onChange={this.handleChange} 
/>
</div>
<br/>
            </div>
            
            <button type="submit">Send</button>
          </form>
    </div>
      )
    }
  }
  


  export default Form