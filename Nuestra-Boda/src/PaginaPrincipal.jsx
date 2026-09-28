import React from "react";
import Itinerario from "./componentes-encabezado/Itinerario";
import Preguntas from "./componentes-encabezado/Preguntas";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import DireccionEvento from "./componentes-encabezado/Ubicacion";
import NuestraHistoria from "./componentes-encabezado/Galeria";
import FraseBiblica from "./componentes-encabezado/Frasefinal";
import Vestimenta from "./componentes-encabezado/vestimenta";
import AlbumCompartido from "./componentes-encabezado/album";

export default function PaginaPrincipal() {


  return (
    <div >

  <DireccionEvento/>

  <NuestraHistoria/>

  <Itinerario />
  
  <FraseBiblica/>

  <Vestimenta/>

  <AlbumCompartido/>

  <Preguntas/>

  
  <Confirmacion/>
  

      </div>      
  );
}
