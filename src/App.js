import './App.css';
import {useState} from "react";

function App() {
    let [todos, setTodos] = useState([]); /*Lister les tâches*/
    const [newNotes,setNewNotes] = useState(''); /*Nouvelles tâches ajoutées*/

    /*Fonction pour ajouter les tâches*/
    function handleClick() {
        setTodos([...todos, newNotes]);
        setNewNotes('');
        document.getElementById("search").value = ""
    }

    /*Fonction pour supprimer les tâches*/

    function supp(item) {
        const NewTodos = todos.filter(todo => todo !== item);  // Filtrer les tâches pour supprimer celle voulue
        setTodos(NewTodos);  // Mettre à jour avec la nouvelle liste
    }


    return (
        <div>
            <h1>Liste de tâches</h1>
            <input onChange={e => setNewNotes(e.target.value)} placeholder={"Saisir texte"} style={{marginRight: '20px', borderRadius: '20px'}}/>
            <button id="search" onClick={handleClick} style={{borderRadius: '20px', backgroundColor: 'green'}}>Ajouter</button>

            {/*Afficher les tâches ajoutées*/}
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}

                {/*Bouton pour supprimer*/}
                <button onClick={() => supp(todo)} style={{ marginLeft: '10px' }}>Supprimer</button>
            </ul>
        </div>
    )
}

export default App;