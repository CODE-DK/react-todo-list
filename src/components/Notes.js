import {useContext} from "react";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {CSSTransition, TransitionGroup} from "react-transition-group";

export const Notes = ({notes}) => {
    const {removeNote} = useContext(FirebaseContext)
    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note =>
                <CSSTransition key={note.id} classNames={"note"} timeout={800}>
                    <li className="list-group-item border-1 rounded-1 note">
                        <div>
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </div>
                        <button type="button"
                                className="btn btn-outline-danger btn-sm"
                                onClick={() => removeNote(note.id)}>
                            &times;
                        </button>
                    </li>
                </CSSTransition>
            )}
        </TransitionGroup>
    )
}