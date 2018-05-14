import style from './App.css';
import title from './Title.js';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            addedTasks: 0
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4()
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        this.setState({addedTasks: addedTasks + 1});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
        this.setState({addedTasks: addedTasks - 1});
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title />
                <p>Dodano {this.state.addedTasks} zadan.</p>
            </div>
        );
    }
}