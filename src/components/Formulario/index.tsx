import React from 'react';
import Botao from '../Botao';
import style from './formulario.module.scss';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<{
    tarefa: string;
    tempo: string;
  }[]>>
}> {
  state = {
    tarefa: "",
    tempo:"00:00"
  }
  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas,{...this.state}] )
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value })}
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">
            Tempo
          </label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value })}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao 
            texto="Adicionar" type="submit"
            />
      </form>
    )
  }
}

export default Formulario;

function setTarefas(arg0: (TarefaasAntigas: any) => any) {
  throw new Error('Function not implemented.');
}
