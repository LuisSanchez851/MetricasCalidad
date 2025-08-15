import { Request, Response, NextFunction } from "express";

export const validateUser = (request: Request, response: Response, next: NextFunction) => {
  const { name, email, password } = request.body;

  const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)?$/;
  if (!nameRegex.test(name?.trim())) {
    return response.status(400).json({ message: "Nombre inválido" });
  }

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    return response.status(400).json({ message: "Correo electrónico no válido" });
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,25}$/;
  if (!passwordRegex.test(password)) {
    return response.status(400).json({
      message:
        "La contraseña debe tener entre 6 y 25 caracteres, incluyendo al menos una letra y un número",
    });
  }

  next();
};

