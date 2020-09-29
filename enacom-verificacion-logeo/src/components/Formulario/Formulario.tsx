import React, { useEffect, useState } from "react";
import "./Formulario.css";


import {
  IonCol,
  IonBackButton,
  IonContent,
  IonButton,
  IonSlide,
  IonGrid,
  IonButtons,
  IonRow,
  IonSlides,
  IonIcon,
  IonImg,
  IonToast, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption
} from "@ionic/react";

import { Plugins } from '@capacitor/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import {BarcodeScanner} from'@ionic-native/barcode-scanner';
const Formulario: React.FC = () => {

    const { Device } = Plugins;
    const botonInfo:any = async () =>{
      await console.log((await Device.getInfo()).uuid);
    }
  
    let [dataQR, setDataQr] = useState("");
    let [dni, setDni] = useState("");
    let [nombre, setNombre] = useState("");
    let [apellido, setApellido] = useState("");
    let [numTramite, setNumTramite] = useState("");
    let [sexo, setSexo] = useState("");
    let [fechaNac, setFechaNac] = useState("");
    let [code, setCode] = useState();
  
    var types = ["PDF417", "QR Code"];
    var options = {
      beep: true,  // Beep on
      noDialog: true,
      uncertain: false, //Recommended
      quietZone: false, //Recommended
      highRes: false, //Recommended
      inverseScanning: false,
      frontFace: false
    };
  
    const openScanner = async () => {
      const data = await BarcodeScanner.scan({ prompt: 'Escanea el DNI', formats: 'PDF_417' });
      const code:Array<any> = data.text.split('@');
      if (code[0].length == 11) {
        //Es un documento nuevo
        // setCode(code.ToString());
        setDni(code[4]);
        setApellido(code[1]);
        setNombre(code[2]);
        setNumTramite(code[0]);
        setSexo(code[3]);
  
      }
      else{
        //es un ducmuento viejo
        // setCode(code.ToString());
        setDni(code[1]);
        setApellido(code[4]);
        setNombre(code[5]);
        setNumTramite(code[10]);
        setSexo(code[8]);
      }
  
      //tengo que parsear esto
      console.log(`Barcode data: ${data.text}`);
      setDataQr(data.text +" "+ code);
    };
  
    return (
      <>
        <IonContent className="container ion-padding">
          {/* <IonButton onClick={botonInfo}>Boton</IonButton> */}
  
          <IonImg src="public/assets/imagenes/Logo_enacom.png" className="imagenEnacom" />
          <form>
          <IonItem>
              <IonLabel position="floating">Nombre y Apellido:</IonLabel>
              <IonInput value={nombre + apellido}/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">DNI:</IonLabel>
              <IonInput value={dni}/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Numero de tramite:</IonLabel>
              <IonInput value={numTramite}/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email:</IonLabel>
              <IonInput/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Telefono:</IonLabel>
              <IonInput/>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Sexo:</IonLabel>
              <IonSelect placeholder="Seleccione...">
                <IonSelectOption value={sexo}>Femenino</IonSelectOption>
                <IonSelectOption value={sexo}>Maculino</IonSelectOption>
              </IonSelect>
            </IonItem>
  
            <IonButton className="ion-margin-top" type="submit" expand="block">
              Login
            </IonButton>
          </form>
  
          <div className="ion-float-left">
            <h2>Escanee el DNI</h2>
          <IonButton onClick={openScanner}>Aquí</IonButton>
          </div>
          <h2  className="ion-float-right">{dataQR}</h2>
  
        </IonContent >
      </>
  
    );
  };
export default Formulario;