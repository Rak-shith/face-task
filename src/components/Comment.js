

function Comment ({ first_name, last_name, email, phone, picture, state }) {
    return (
        <div className="col-sm-4 my-2" >
      <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
        <div className="card-body">
          <div className="image-block text-center">
            <img src={picture}  alt='test-img' />
          </div>
          <h4 className="card-title text-center">Name: {first_name} {last_name} </h4>
          <h6 className="card-subtitle mb-2 text-muted text-center">Email: {email}</h6>
          <h6 className="card-subtitle mb-2 text-muted text-center">Contact: {phone}</h6>
          <h6 className="card-subtitle mb-2 text-muted text-center">State: {state}</h6>
        </div>
      </div>
    </div>
  );
}

export default Comment;
