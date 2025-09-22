// import { useLoaderData } from "react-router-dom";
// import { loader } from "./menuLoader";
import { getMenu } from "../../services/apiRestaurant";

function Menu() {
  // const menu = useLoaderData();
  // console.log(menu);
  return <h1>Menu</h1>;
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}
loader();

export default Menu;
