export const Modal = ({ isModalVisible, onTaskRemove, onClickCancel }) => {
  return (
    <div class={`${isModalVisible ? "is-active" : " "} modal`}>
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Do you want to remove the task?</p>
        </header>
        <footer class="modal-card-foot">
          <button onClick={onTaskRemove} class="button has-background-danger">
            Remove
          </button>
          <button onClick={onClickCancel} class="button">
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
};
