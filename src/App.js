import './App.css';
import React, { useState } from 'react';


function App() {
  const [valorTela, setValorTela] = useState(' ')
  const [resultado, setResultado] = useState(0)
  const [acumulador, setAcumulador] = useState(0)
  const [operado, setOperado] = useState(false)

  //componentes 
  const Tela =(valor,result)=>{
      return (
          <div className='cssTela'>
              <span className='cssValor'>{valor}</span>
              <span className='cssResultado'>{result}</span>
          </div>
      )
  }

  const BtnOrange=(label, onClick)=>{
      return (
          <button className='cssBtnOrange' onClick={onClick}>{label}</button>
      )
  }
 
  const BtnIgual=(label, onClick)=>{
    return (
        <button className='cssBtnIgual' onClick={onClick}>{label}</button>
    )
}
  const Btn=(label, onClick)=>{
    return (
        <button className='cssBtn' onClick={onClick}>{label}</button>
    )
  }
   
  //funções
  const addDigitoTela=(d)=>{
      if ((d == '+' || d== '-' || d== '*' || d=='/' || d=='%') && operado) {
            console.log("+-*/%")
            setOperado(false)
            setValorTela(resultado+d) 
            return
      }if (operado) {
        setValorTela(d)
        setOperado(false)
        return
      }
      
      const valorDigitadoTela=valorTela+d 
      setValorTela(valorDigitadoTela)
  }

  const clear=()=>{
    setOperado (false)
    setValorTela (' ')
    setResultado(0)
    setAcumulador(0)
    return
  }

  const calcula=(oper)=>{
    if(oper == 'bs'){
      let vtela = valorTela
      vtela=vtela.substring(0,(vtela.length-1))
      setValorTela(vtela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valorTela)
        setAcumulador(r)
        setResultado(r)
        setOperado(true)
        return
    }catch{
      setResultado('ERRO')
    }
  }
  

  return (
    <div className='cssBody'>
      <div className='cssContainer'>
        {Tela(valorTela, resultado)}
        <div className='cssBotoes'>
            
            {BtnOrange('AC', clear)}
            {BtnOrange('DEL' , ()=>calcula('bs'))}
            {BtnOrange('%' , ()=>addDigitoTela('%'))}
            {BtnOrange('/' , ()=>addDigitoTela('/'))}

            {Btn('7' , ()=>addDigitoTela('7'))}
            {Btn('8' , ()=>addDigitoTela('8'))}
            {Btn('9' , ()=>addDigitoTela('9'))}
            {BtnOrange('*' , ()=>addDigitoTela('*'))}

            {Btn('4' , ()=>addDigitoTela('4'))}
            {Btn('5' , ()=>addDigitoTela('5'))}
            {Btn('6' , ()=>addDigitoTela('6'))}
            {BtnOrange('-' , ()=>addDigitoTela('-'))}
   
            {Btn('1' , ()=>addDigitoTela('1'))}
            {Btn('2' , ()=>addDigitoTela('2'))}
            {Btn('3' , ()=>addDigitoTela('3'))}
            {BtnOrange('+' , ()=>addDigitoTela('+'))}
            
            
            {Btn('0' , ()=>addDigitoTela('0'))}    
            {Btn(',' , ()=>addDigitoTela(','))}
            {BtnIgual('=' , ()=>calcula('='))}
            
        </div>
      </div>
    </div>
);
}

export default App ;
