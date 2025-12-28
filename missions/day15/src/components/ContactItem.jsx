import "./ContactItem.css";

export default function ContactItem({ id, name, email, onDelete }) {
  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{email}</div>
      <button onClick={() => onDelete(id)}>🗑️ Remove</button>
    </div>
  );
}
