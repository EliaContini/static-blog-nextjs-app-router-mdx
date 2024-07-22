// custom
import { SITE_DESCRIPTION, SITE_TITLE } from "@/lib/constants";

const Home = () => {
  return (
    <>
      <h2>Welcome to {SITE_TITLE}</h2>
      <p>{SITE_DESCRIPTION}</p>
    </>
  );
};

export default Home;
