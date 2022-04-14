import "./CodeModal.css";

function CodeModal({ content, show }) {
  return (
    <div className={`code-modal ${show ? "show" : ""}`}>
      {content ? content : ""}
    </div>
  );
}

export default CodeModal;
