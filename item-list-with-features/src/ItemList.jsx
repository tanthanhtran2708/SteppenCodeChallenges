import { ItemRow } from "./components/ItemRow/ItemRow";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

export const ItemList = ({
  data,
  onEditItem,
  isModalVisible,
  onSelectedTask,
  onTaskRemove,
  onEditTask,
}) => {
  return data.map((task, index) => {
    return (
      <div className="column">
        <ItemRow
          onEditTask={onEditTask}
          onTaskRemove={onTaskRemove}
          onSelectedTask={onSelectedTask}
          key={index}
          item={task}
        />
      </div>
    );
  });
};
