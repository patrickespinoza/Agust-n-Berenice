import React from "react";
import Itinerario from "./componentes-encabezado/Itinerario";
import Preguntas from "./componentes-encabezado/Preguntas";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import DireccionEvento from "./componentes-encabezado/Ubicacion";
import NuestraHistoria from "./componentes-encabezado/Galeria";
import FraseBiblica from "./componentes-encabezado/Frasefinal";
import Vestimenta from "./componentes-encabezado/vestimenta";
import AlbumCompartido from "./componentes-encabezado/album";
import FraseP from "./componentes-encabezado/frasep";
import ImagenSeparacion from "./componentes-encabezado/imagenfinal";
import Padrinos from "./componentes-encabezado/Padrinos";

export default function PaginaPrincipal() {


  return (
    <div >
  <FraseP/>

  <Padrinos/>

  <DireccionEvento/>


  <NuestraHistoria/>

  <Itinerario />
  
  <FraseBiblica/>

  <Vestimenta/>

  <AlbumCompartido/>

  <Preguntas/>

  
  <Confirmacion/>

  <ImagenSeparacion/>
  

      </div>      
  );
}
