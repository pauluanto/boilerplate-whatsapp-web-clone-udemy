import React from 'react';
import StyledFormLogin from '../elements/StyledFormLogin';


const FormLogin = (props:any):JSX.Element => {
    return (
        <StyledFormLogin>
            <label className="label">
                <input
                    className="input"
                    name="username"
                    placeholder="Nom d'Utilisateur"
                />
            </label>
            <label className="label">
                <input
                    className="input"
                    name="Phone"
                    placeholder="Téléphone"
                />
            </label>
            <label className="label">
                <input
                    className="input"
                    name="password"
                    placeholder="Mot de passe"
                    type="password"
                />
            </label>
            <button className="loginBtn">CONNEXION</button>
        </StyledFormLogin>
    )
}


export default FormLogin;
