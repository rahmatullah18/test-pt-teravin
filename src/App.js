import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DetailPendidikan from "./pages/DetailPendidikan";
import DetailPengalaman from "./pages/DetailPengalaman";
import Home from "./pages/Home";
import Keahlian from "./pages/Keahlian";
import Pendidikan from "./pages/Pendidikan";
import Pengalaman from "./pages/Pengalaman";

function App() {
  return (
    <div>
      <Layout>
        {/* router */}
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/pendidikan'} element={<Pendidikan />} />
          <Route path={'/pendidikan/:id'} element={<DetailPendidikan />} />
          <Route path={'/pengalaman'} element={<Pengalaman />} />
          <Route path={'/pengalaman/:id'} element={<DetailPengalaman />} />
          <Route path={'/keahlian'} element={<Keahlian />} />
        </Routes>
        {/* end router */}
      </Layout>
    </div>
  );
}

export default App;
