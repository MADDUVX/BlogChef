import { join, dirname} from "path";
import { fileURLToPath } from "url";

const _dirname = dirname(fileURLToPath(import.meta.url));
export default (req,res)=>
res.sendFile(join(_dirname,"../../", "public","client","index.html"));