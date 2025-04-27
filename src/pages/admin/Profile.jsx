import React, { useState } from "react";
// Icons
import {
  RiEdit2Line,
  RiShieldCheckLine,
  RiErrorWarningLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Switch } from "@headlessui/react";

const Profile = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* Profile */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative mb-2">
                <img
                  src="https://img.freepik.com/foto-gratis/negocios-finanzas-empleo-concepto-mujeres-emprendedoras-exitosas-joven-empresaria-segura-anteojos-mostrando-gesto-pulgar-arriba-sostenga-computadora-portatil-garantice-mejor-calidad-servicio_1258-59118.jpg"
                  className="w-28 h-28 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24"
                >
                  <RiEdit2Line />
                </label>
                <input type="file" id="avatar" className="hidden" />
              </div>
              <p className="text-gray-500 text-sm">
                Allowed file types: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:items-center mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre de la empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Nombre(s)"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Número de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Nombre(s)"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Página web <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <input
                type="text"
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                placeholder="Nombre(s)"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                País <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Argentina">Argentina</option>
                <option value="Colombia">Colombia</option>
                <option value="México">México</option>
                <option value="Perú">Perú</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-y-2 mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none">
                <option value="Barquisiméto">Barquisiméto</option>
                <option value="Bogotá">Bogotá</option>
                <option value="Buga">Buga</option>
                <option value="Chihuahua">Chihuahua</option>
                <option value="Ciudad de México">Ciudad de México</option>
                <option value="Lima">Lima</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Caracas">Caracas</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-black py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      {/* Change password */}
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="text-xl text-gray-100">Usuario y contraseña</h1>
        <hr className="my-8 border-gray-500/30" />
        <form className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Correo electrónico</h5>
              <p className="text-gray-500 text-sm">jorgetrejo@gmail.com</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30 border-dashed" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl mb-1">Contraseña</h5>
              <p className="text-gray-500 text-sm">****************</p>
            </div>
            <div>
              <button className="w-full md:auto bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-y-4 bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
          <div className="flex justify-center">
            <RiShieldCheckLine className="text-5xl text-green-600" />
          </div>
          <div className="md:col-span-6">
            <h5 className="text-gray-100 text-xl mb-2">Asegura tu cuenta</h5>
            <p className="text-gray-500">
              Two-factor authentication adds an extra layer of security to your
              account. To log in, in addition you'll need to provide a 6 digit
              code
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
              Activar
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default Profile;
