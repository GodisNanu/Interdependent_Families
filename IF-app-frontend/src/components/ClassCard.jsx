function ClassCard({ isLoggedIn, item, handleJoinClick }) {
  return (
    <div className="class__card-content">
      <h3 className="class__card-title"> {item.title} </h3>
      <p className="class__card-description-label"> Description: </p>
      <p className="class__card-description">{item.description}</p>
      {isLoggedIn ? (
        <div className="class__card-link-section">
          <a href={item.meetLink} className="class__card-link">
            Google Meet Link
          </a>
        </div>
      ) : (
        <button onClick={handleJoinClick} className="class__card-join-button">
          Join
        </button>
      )}
    </div>
  );
}

export default ClassCard;
