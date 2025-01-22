function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://techcrunch.com/wp-content/uploads/2025/01/GettyImages-2193244774.jpg"
          alt="ggs"
        ></img>
      </div>
      <div className="texts">
        <h2>TikTok goes dark in the US</h2>
        <p className="info">
          <a className="author">Ankit Choudhary</a>
          <time>19-01-2025 23:55</time>
        </p>
        <p className="summary">
          TikTok users began receiving a message about the ban around 10:30 p.m.
          Eastern. As of Saturday evening, the app was also no longer available
          in the Apple or Google Play app stores.
        </p>
      </div>
    </div>
  );
}

export default Post;
