import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Storepage } from './Pages/Stattemanagement';

createRoot(document.getElementById('root')).render(
<Storepage>
<App/>
</Storepage>

)
