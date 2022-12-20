import { Social } from "../../components/";

const Contact = () => {
  return (
    <div className="flex flex-col justify-around min-h-screen mx-auto max-w-5xl">
      <div className="my-10">
        <h1 className="text-xl my-4">Contacto</h1>
        <p>
          Puedes contactarnos directamente a través de nuestro correo
          electrónico{" "}
          <a
            className="text-blue-700 hover:underline"
            href="mailto:elcoritohistorico@gmail.com"
          >
            elcoritohistorico@gmail.com
          </a>
        </p>
      </div>
      <Social />
    </div>
  );
};

export default Contact;