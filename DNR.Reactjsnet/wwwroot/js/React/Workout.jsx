let modelErrors = JSON.parse(modelStateErrors);
let exercises = JSON.parse(exercisesModel);

class Workout extends React.Component {
    render() {
        return (
            <div>
                <Exercise exercises={exercises} />
            </div>
        );
    }
}

class Exercise extends React.Component {
    constructor(props) {
        super(props);
        this.state = { exercises: this.props.exercises }
    }

    render() {

        const addAnotherExercise = () => {
            this.setState({
                exercises: [...this.state.exercises, {exerciseName: '', sets: [{reps: ''}]}]
            })
        }

        const deleteExercise = (index) =>{
            const values = [...this.state.exercises]
            values.splice(index, 1)
            this.setState({
                exercises: values
            })
        }

        const handleChangeInput = (index, event) => {
            const values = [...this.state.exercises];
            values[index]["exerciseName"] = event.target.value;
            this.setState({
                exercises: values
            })
        }

        const exerciseNodes = this.state.exercises.map((exercise, i) =>
            <div className="form-group card" key={i}>
                <div className="card-header">
                    <label>{exercise.exerciseName}</label>
                    <button 
                        type="button" 
                        className="btn btn-danger ml-2" 
                        onClick={() => deleteExercise(i)}>Delete Exercise</button>
                </div>
                <div className="card-body">
                    <input 
                        type="text" 
                        className="form-control mb-1" 
                        id={"Exercises["+i+"].ExerciseName"} 
                        name={"Exercises["+i+"].ExerciseName"} 
                        value={exercise.exerciseName}
                        onChange={event => handleChangeInput(i, event)} />

                    <Errors 
                        modelErrors={modelErrors} 
                        id={"Exercises["+i+"].ExerciseName"} />

                    <Sets 
                        exerciseIndex={i} 
                        sets={exercise.sets} 
                        className="list-group-item" />
                </div>
            </div>
        );

        return (
            <div>
                {exerciseNodes}
                <button 
                    type="button" 
                    className="btn btn-success mb-2" 
                    onClick={() => addAnotherExercise()}>Add Another Exercise</button>
            </div>
        );
    }
}

class Sets extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sets: this.props.sets };
    }

    render() {

        const addAnotherSet = () => {
            this.setState({
                sets: [...this.state.sets, {reps: '4'}]
            })
        }

        const deleteSet = (index) =>{
            const values = [...this.state.sets]
            values.splice(index, 1)
            this.setState({
                sets: values
            })
        }

        const setNodes = this.state.sets.map((set, i) =>
            <div className="card mb-2" key={i}>
                <div className="card-header">
                    <div>Set {i+1} <button type="button" className="btn btn-danger ml-2" onClick={() => deleteSet(i)}>Delete Set</button></div>
                </div>
                <div className="card-body">
                    <Reps 
                        reps={set.reps} 
                        index={i} 
                        exerciseIndex={this.props.exerciseIndex} />
                </div>
            </div>
        );
        return (
            <div>
                {setNodes}
                <button 
                    type="button" 
                    className="btn btn-success" 
                    onClick={() => addAnotherSet()}>Add Another Set</button>
            </div>
        );
    }
}

class Reps extends React.Component {
    constructor(props) {
        super(props);
        this.state = {reps: this.props.reps};
    }

    
    render() {

        const handleChangeInput = (index, event) => {
            this.setState({
                reps: event.target.value
            })
        }

        return (
            <div className="form-group">
                <div className="row">
                    <div className="col col-sm-2">
                        <label htmlFor={"Exercises["+this.props.exerciseIndex+"].Sets["+this.props.index+"].Reps"}>Reps</label>
                    </div>
                    <div className="col col-sm-6">
                        <input 
                            type="text" 
                            className="form-control" 
                            id={"Exercises["+this.props.exerciseIndex+"].Sets["+this.props.index+"].Reps"} 
                            name={"Exercises["+this.props.exerciseIndex+"].Sets["+this.props.index+"].Reps"} 
                            value={this.state.reps} 
                            onChange={event => handleChangeInput(this.props.index, event)} />
                    </div>
                </div>
                <Errors 
                    modelErrors={modelErrors} 
                    id={"Exercises["+this.props.exerciseIndex+"].Sets["+this.props.index+"].Reps"} />
            </div>
        );
    }
}

class Errors extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            this.props.modelErrors.map((err, i) =>
                <div key={i}>
                    {
                        err.key == this.props.id ?
                            <span className="field-validation-error" data-valmsg-for={this.props.id} data-valmsg-replace="true">
                                {err.errors.map((message, i) => message.errorMessage)}
                            </span> :
                            null
                    }
                </div>
            )
        );
    }
}

ReactDOM.render(<Workout />, document.getElementById('ReactContent'));