import { Component } from "react";
import { Button, Form, ListGroup } from "react-bootstrap";


class TodoList extends Component{
    constructor() { 
        super(); 
        this.state = {
            todoList: [] //default empty array
        }

    }
    // addTodo: adicionar uma nova tarefa dentro do estado
    addTodo = (event)=> {
        event.preventDefault(); //parar o comportamento padrão
        //console.log(event.target.taskTitle.value);
        const data = event.target,
        newTodo = {
            taskTitle: data.taskTitle.value, 
            date: data.date.value,
            time: data.time.value
        }
        //console.log(newTodo)
        // atualizando a matriz, mas não reprocessando 
        this.state.todoList.push(newTodo);
        // atualizando o estado e renderizando novamente  
        this.setState({
            todoList: this.state.todoList
        })
    }
    // ecxluí da matriz - Splice é do JS
    deleteTodo = (event)=> {
        // splice(indexNumber, quantos Excluir)
        this.state.todoList.splice(event.target.value)
        this.setState({
            todoList: this.state.todoList
        })
    }
    render() {
        console.log(this.state.todoList)
        return(
            <div> 
             <Form onSubmit={this.addTodo}> 
                <Form.Group controlId="FormBásicoTarefas">
                <Form.Label>Título da Tarefa:</Form.Label>
                <Form.Control type="text" placeholder="Informe uma tarefa" 
                name="taskTitle"/>
             </Form.Group>
             <Form.Group controlId="FormBásicodate">
                <Form.Label>Data:</Form.Label>
                <Form.Control type="date" placeholder="dd/mm/aaaa" 
                name="date"/>
             </Form.Group>
             <Form.Group controlId="formBásicotime">
                <Form.Label>horário:</Form.Label>
                <Form.Control type="time" placeholder="Informe o horário" 
                name="time"/>
             </Form.Group>
              <Button      
                type="submit" className="btn btn-sucess">
                        Adicionar 
                </Button>
             </Form>
             <ListGroup>
             {  //usando grupo de lista de react bootstrap 
                //método mapa (map) para ver os dados 
                 this.state.todoList.map((task, index)=> {
                 return( 
                // chave única para cada dado em uma lista
                <ListGroup.Item key={index} variant="primary">
                    <button type="button" class="btn btn-success">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                    </button>
                     {task.taskTitle} às {task.time}, data: {task.date}
                     <Button type="button" variant="danger" 
                     onClick={this.deleteTodo} value={index}> Excluir </Button>

                                
                                 
                    </ListGroup.Item>
                 )
            })
      }
       
            
             </ListGroup>
             <ul>
                   </ul>
             </div>
            )  

    }
}

export default TodoList;