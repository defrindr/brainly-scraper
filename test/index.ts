import { Brainly } from "../index";

(async () => {
 const data = await Brainly("NKRI");
 console.log(data);
})();