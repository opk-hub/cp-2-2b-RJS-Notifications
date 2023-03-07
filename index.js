const Notification = (props) => {
  const { name, url, className } = props;
  return (
    <div className={`card-conatiner ${className}`}>
      <img className="img" src={url} />
      <p className="card-msg">{name}</p>
    </div>
  );
};

const element = (
  <div>
    <div className="bg-conatiner">
      <h1>Notifications</h1>
      <div className="notification-container">
        <Notification
          name="Information Message"
          className="bg-primary"
          url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        />
        <Notification
          name="Success Message"
          className="bg-success"
          url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        />
        <Notification
          name="Warning Message"
          className="bg-warning"
          url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        />
        <Notification
          name="Error Message"
          className="bg-danger"
          url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
