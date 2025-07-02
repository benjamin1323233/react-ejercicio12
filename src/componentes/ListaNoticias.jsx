import Noticia from "./Noticia.jsx"
const ListaNoticias = ({categoria, pais}) => {
    return (
        <div className="container py-2 px-3 py-4 borde d-flex justify-content-center">
          <Noticia categoria={categoria} pais={pais} ></Noticia>
        </div>
    );
};

export default ListaNoticias;