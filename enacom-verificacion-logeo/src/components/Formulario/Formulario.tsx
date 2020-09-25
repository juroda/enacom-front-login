import { IonItem, IonLabel, IonInput, IonButton, IonSelect, IonSelectOption, IonImg } from '@ionic/react';
import React from 'react'
import './Formulario.css'
import { Plugins } from '@capacitor/core';

const Formulario: React.FC = () => {

    const { Device } = Plugins;
    const botonInfo:any = async () =>{
        await console.log((await Device.getInfo()).uuid );
       // await console.log(Device.getBatteryInfo());

    }
    
    return (
        <div>
            <button onClick={botonInfo}>boton</button>

            <IonImg src="assets/imagenes/Logo_enacom.png" className="imagenEnacom" />
            <form className="ion-padding">

                <IonItem>
                    <IonLabel position="floating">DNI</IonLabel>
                    <IonInput />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Numero de tramite</IonLabel>
                    <IonInput />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Email</IonLabel>
                    <IonInput />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Telefono</IonLabel>
                    <IonInput />
                </IonItem>
                <IonItem>
                    <IonLabel position="floating">Sexo</IonLabel>
                    <IonSelect placeholder="Seleccione..." >
                        <IonSelectOption value="female">Femenino</IonSelectOption>
                        <IonSelectOption value="male">Masculino</IonSelectOption>
                    </IonSelect>
                </IonItem>


                <IonButton className="ion-margin-top" type="submit" expand="block">
                    Login
                </IonButton>
            </form>
        </div>
    )

}

export default Formulario;