import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// Asumiendo que ya inicializaste tu app de Firebase arriba
const auth = getAuth();

// Reemplaza "TU_CONTRASEÑA" por la clave real que creaste en el paso anterior
signInWithEmailAndPassword(auth, "danielmix24@gmail.com", "TU_CONTRASEÑA")
  .then((userCredential) => {
    console.log("¡Sesión de administrador iniciada! La sincronización está activa.");
    
    // AQUÍ DEBE IR TU CÓDIGO DE BASE DE DATOS
    // (Llamadas a get(), onValue(), set(), update(), etc.)
  })
  .catch((error) => {
    console.error("Error de autenticación, verifica el correo o contraseña:", error.message);
  });