import "./ItemRow.css";
import { useState } from "react";

const EDIT_INPUT_KEY = "EDIT_TASK_INPUT";

export const ItemRow = ({ item, onTaskRemove, onEditTask, onSelectedTask }) => {
  // Properties & States
  const [isTaskEditing, setIsTaskEditing] = useState(false);
  const [newEditValue, setNewEditValue] = useState("");

  // Handle click on Edit task
  const onPressTaskEditing = () => {
    let nextState = !isTaskEditing;
    if (nextState === false) {
      // End up edit, updating new data
      onEditTask(item, newEditValue, () => {
        setIsTaskEditing(!isTaskEditing);
      });
    } else {
      setIsTaskEditing(!isTaskEditing);
    }
  };

  // Handle enter when editing finishes
  var input = document.getElementById(EDIT_INPUT_KEY);
  if (input) {
    input.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        onPressTaskEditing();
      }
    });
  }

  return (
    <div id="item-label">
      <span id="tools">
        <span onClick={() => onPressTaskEditing()}>
          <i
            id="btn-icon"
            class={`fa has-background-success ${
              !isTaskEditing ? "fa-pencil-square-o" : "fa-check-square"
            }`}
          ></i>
        </span>
        <span
          onClick={() => {
            onTaskRemove(item);
          }}
        >
          <i id="btn-icon" class="fa has-background-danger fa-trash "></i>
        </span>
      </span>
      {isTaskEditing ? (
        <input
          id={EDIT_INPUT_KEY}
          className="input-edit"
          placeholder="Enter new value"
          value={newEditValue}
          onChange={(e) => setNewEditValue(e.target.value)}
        />
      ) : (
        <label>{item.label}</label>
      )}
    </div>
  );
};
