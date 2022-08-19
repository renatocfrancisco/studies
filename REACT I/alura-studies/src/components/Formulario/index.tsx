import React, { useState } from 'react';
import Botao from '../Botao';
import style from './Formulario.module.scss';
import { ITarefa } from '../../types/ITarefa';
import {v4 as uuidv4} from 'uuid';

interface Props{
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>,
    
}

function Formulario({setTarefas}: Props){
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => [
            ...tarefasAntigas, 
            { 
                tarefa, tempo,
                selecionado: false,
                completado: false,
                id: uuidv4()
            }
        ]);
        setTarefa("");
        setTempo("00:00");
    }

    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label>
                    Novo Estudo
                </label>
                <input
                    value={tarefa}
                    onChange={evento => setTarefa(evento.target.value)}
                    type="text" name="tarefa" id="tarefa" placeholder='O que quer estudar?' required />
            </div>
            <div className={style.inputContainer}>
                <label>
                    Tempo
                </label>
                <input
                    value={tempo}
                    onChange={evento => setTarefa(evento.target.value)}
                    type="time"
                    step='1'
                    name='tempo'
                    id='tempo'
                    min="00:00:00"
                    max="01:00:00"
                    required />
            </div>
            <Botao type="submit" >Adicionar</Botao>
        </form>
    )
}

export default Formulario