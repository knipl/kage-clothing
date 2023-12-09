import DirectoryMenu from "../../components/directory-menu/directory-menu.component";
import "./homepage.styles.scss"

const HomePage = () => {
  return (
    <div className="homepage">
      <h1>Welcome to my Homepage!</h1>
      <DirectoryMenu />
    </div>
  );
}
export default HomePage;