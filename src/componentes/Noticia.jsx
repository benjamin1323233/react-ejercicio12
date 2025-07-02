import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';

const Noticia = ({ categoria, pais }) => {
  const [noticia, setNoticia] = useState(null);

  // Mapeo de categorías y países
  const mapCategoria = {
    "1": "apple",
    "2": "tesla",
    "3": "negocios",
    "4": "wallstreet"
  };

  const mapPais = {
    "1": "ar", // Código ISO para Argentina
    "2": "cl", // Chile
    "3": "pe", // Perú
    "4": "us"  // Estados Unidos
  };

  useEffect(() => {
    const obtenerNoticia = async () => {
      const valorcategoria = mapCategoria[categoria];
      const valorpais = mapPais[pais];

      // Evitar ejecutar si no hay selección válida
      if (!valorcategoria || !valorpais) return;

      try {
        const respuesta = await fetch(
          `https://newsdata.io/api/1/latest?apikey=pub_0da7dcdc3a0148bf9ca799c1c7bd4018&q=${valorcategoria}&country=${valorpais}&language=es`
        );
        if (respuesta.status === 200) {
          const datos = await respuesta.json();
          setNoticia(datos.results?.[0] || null);
          console.log(datos.results?.[0]);
        }
      } catch (error) {
        console.error("Error al obtener noticia:", error);
      }
    };

    obtenerNoticia();
  }, [categoria, pais]); 

  return (
    <>
      {noticia ? (
        <div className="container row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <Card>
              <Card.Img variant="top" src={noticia.image_url || "https://via.placeholder.com/150"} />
              <Card.Body>
                <Card.Title>{noticia.title}</Card.Title>
                <Card.Text>{noticia.description || "Sin descripción disponible."}</Card.Text>
                <Button variant="primary" href={noticia.link} target="_blank" rel="noopener noreferrer">
                  Leer más
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      ) : (
        <p className="text-center">Cargando noticia...</p>
      )}
    </>
  );
};

export default Noticia;
