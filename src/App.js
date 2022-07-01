import React, { useState } from "react";
import fakeApi from "./api";
import "./styles.css";

const steps = [
  {
    id: "PROVAS",
    title: ""
  },
  {
    id: "PESSOAL",
    title: "Dados pessoais"
  },
  {
    id: "FORMAÇAO",
    title: "Formação acadêmica"
  },
   {
    id: "DOCUMENTOS",
    title: "Anexo de comprovante"
  },
  {
    id: "PAGAMENTO",
    title: "Dados de pagamento"
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({

    /* Dados pessoais */
    name: "",
    email: "",
    phone: "",
    city: "",
    street: "",
    street_number: "",
    sobre_nome: "",
    cpf:"",


    /*Formaçao academica */
    escola: "",
    ano_escola: "",


    /* pagamento*/
    card_number: "",
    card_name: "",
    card_validity: ""
  });

  function handleNext() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log("Form sent...", formValues);

    setLoading(true);

    // simulate api
    await fakeApi(() => setLoading(false), 2000);
  }

  return (
    <div className="App">
      <h1>Multi Steps Form</h1>
      <p className="step-guide">
        {currentStep + 1} de {steps.length}
      </p>

      <form className="steps-form" onSubmit={handleSubmit}>
        <div className="fields-container">
          <p>{steps[currentStep].title}</p>


      
          {steps[currentStep].id === "PROVAS" && (
          
              <div className="fields">
              <div className="field">
                <h1>PROVAS</h1>

                <select name="materia">
                  <option value="">MATEMÁTICA</option>
                  <option value="">HISTÓRIA</option>
                  <option value="">GEOGRAFIA</option>
                  
                  </select>
                 
                </div>   
              </div>
          )}


   

          {steps[currentStep].id === "PESSOAL" && (
            <div className="fields">
                 <div className="field">
                <input
                  type="text"
                  placeholder="Nome"
                  name="name"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
                 <div className="field">
                <input
                  type="text"
                  placeholder="Sobre_nome"
                  name="sobre_nome"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="CPF"
                  name="cpf"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
                <div className="field">
                <input
                  type="text"
                  placeholder="Endereço"
                  name="street"
                  onChange={handleInputChange}
                  value={formValues.name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="E-mail"
                  name="email"
                  onChange={handleInputChange}
                  value={formValues.email}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Telefone"
                  name="phone"
                  onChange={handleInputChange}
                  value={formValues.phone}
                />
              </div>
 
              
            </div>
          )}


          




          {steps[currentStep].id === "FORMAÇAO" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Escola"
                  name="city"
                  onChange={handleInputChange}
                  value={formValues.city}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Turma"
                  name="street"
                  onChange={handleInputChange}
                  value={formValues.street}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Endereco-escola"
                  name="street_number"
                  onChange={handleInputChange}
                  value={formValues.street_number}
                />
              </div>
            </div>
          )}

          





          {steps[currentStep].id === "DOCUMENTOS" && (
            <div className="fields">
              <div className="field">
            

             <label className="form-label">File</label>
            <input type="file" accept="application/pdf" />
            
              </div>
              
              

            </div>
          )}

          


          {steps[currentStep].id === "PAGAMENTO" && (
            <div className="fields">
              <div className="field">
                <input
                  type="text"
                  placeholder="Número do cartão"
                  name="card_number"
                  onChange={handleInputChange}
                  value={formValues.card_number}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Nome no cartão"
                  name="card_name"
                  onChange={handleInputChange}
                  value={formValues.card_name}
                />
              </div>
              <div className="field">
                <input
                  type="text"
                  placeholder="Validade"
                  name="card_validity"
                  onChange={handleInputChange}
                  value={formValues.card_validity}
                />
              </div>
            </div>
          )}
        
           <br></br>
           <br></br>
           <br></br>
          {currentStep < steps.length - 1 && (
            <button className="button next" type="button" onClick={handleNext}>
              PROXIMO
            </button>
          )}

          {currentStep === steps.length - 1 && (
            <button className="button submit" type="submit">
              Enviar
            </button>
          )}

          {loading && <h1 className="loader">SALVO COM SUCESSO</h1>}
        </div>
      </form>
    </div>
  );
}


