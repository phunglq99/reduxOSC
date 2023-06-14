function ProfileCard({ title, handle, image, description }) {


  return (
    <div classNameName="card" style={{ width: "18rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"> {title}</h5>
        <p className="card-text">{handle}</p>
        <p className="card-description">{description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default ProfileCard;
