import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Homepage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="overflow-hidden rounded-lg bg-white shadow">
            <Link to="/productpage">
              <img
                src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </Link>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1322158059/es/foto/mancuerna-botella-de-agua-toalla-en-el-banco-en-el-gimnasio.jpg?s=612x612&w=0&k=20&c=6wc4q5s37IHzQh-2uAaaXROj2dSNWYpwFz6oHRQYKsQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/1279902517/es/foto/s%C3%A9-tan-fuerte-como-naciste-para-ser.jpg?s=612x612&w=0&k=20&c=RPVx_e9KazhmSqjyJN2v_APIUk18qKkmfMSVH7YnJnU="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/503416862/es/foto/gimnasio-gimnasio-ejercicio-hombre-listo-para-ejercicio-con-tetera-bell.jpg?s=612x612&w=0&k=20&c=n0Q96IDd4g39ncvvP_JC3IYaQUZG8sc3CLvAoN8zjVk="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <img
                src="https://media.istockphoto.com/id/612262390/es/foto/culturismo-de-ejercicios.jpg?s=612x612&w=0&k=20&c=1HJPvd_o1Md8Wbg58RiuBhR11bGW0XSoTKu7-gABDUQ="
                alt="Product Image"
                className="w-full"
              />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">Product Name</h3>
                <p className="font-bold leading-tight text-gray-700">
                  Current Bid - Rs. 9,999
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum eget semper mi. Duis eu tellus risus.
                </p>
                <button className="mt-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
                  Bid Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Homepage;
