import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.text}>Page not found</p>
      <Link to="/" style={styles.link}>Go back home</Link>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#030712",
    color: "white"
  },
  title: {
    fontSize: "80px",
    marginBottom: "10px"
  },
  text: {
    fontSize: "20px",
    marginBottom: "20px"
  },
  link: {
    color: "#6366f1",
    textDecoration: "none",
    border: "1px solid #6366f1",
    padding: "10px 20px",
    borderRadius: "8px"
  }
};
