import styles from "../styles/Navbar.module.css";
import Image from "next/image";
function Navbar() {
  return (
    <nav>
      <div className={styles.navbar}>
        <Image alt="fuck" src="/logo.png" width="250" height="70"></Image>
        <textarea className={styles.textArea} rows="2" cols="80"></textarea>
        <h4 className={styles.darkMode}>
          <a>Dark Mode</a>
        </h4>
      </div>
    </nav>
  );
}
export default Navbar;
