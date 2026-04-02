export const getBotResponse = (input) => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("hola") || lowerInput.includes("buenas")) {
    return "¡Hola! 👋 Soy el asistente virtual de ADA Pets. ¿En qué puedo ayudarte hoy?";
  }

  if (
    lowerInput.includes("precio") ||
    lowerInput.includes("costo") ||
    lowerInput.includes("cuanto sale")
  ) {
    return "Los precios varían según el servicio. La consulta general está $15.000. ¿Te gustaría agendar una?";
  }

  if (lowerInput.includes("servicios") || lowerInput.includes("hacen")) {
    return "Ofrecemos: 🩺 Consultas generales, 💉 Vacunación, 🚑 Urgencias 24hs y ✂️ Peluquería canina.";
  }

  if (
    lowerInput.includes("turno") ||
    lowerInput.includes("cita") ||
    lowerInput.includes("reservar") ||
    lowerInput.includes("agendar") ||
    lowerInput.includes("turnos") ||
    lowerInput.includes("agendar turno") ||
    lowerInput.includes("reservar turno") ||
    lowerInput.includes("quiero un turno") ||
    lowerInput.includes("quiero agendar un turno") ||
    lowerInput.includes("quiero reservar un turno") ||
    lowerInput.includes("quiero agendar una cita") ||
    lowerInput.includes("quiero reservar una cita") ||
    lowerInput.includes("quiero una cita") ||
    lowerInput.includes("si")
  ) {
    return "Para agendar un turno, por favor indicanos tu nombre, el de tu mascota y el motivo de la consulta. 📅";
  }

  if (lowerInput.includes("gracias") || lowerInput.includes("chau")) {
    return "¡De nada! Gracias por contactarnos. 🐾 ¡Que tengas un lindo día!";
  }

  if (lowerInput.includes("ubicacion") || lowerInput.includes("donde estan")) {
    return "Nos encontramos en Av. Corrientes 1234, Buenos Aires. 📍 ¡Te esperamos!";
  }

  if (lowerInput.includes("horario") || lowerInput.includes("abierto")) {
    return "Nuestro horario de atención es de Lunes a Sábados de 9:00 a 20:00 hs. Urgencias las 24hs. ⏰";
  }

  
  if (
    (lowerInput.includes("nombre") ||
      lowerInput.includes("soy") ||
      lowerInput.includes("me llamo")) &&
    (lowerInput.includes("mascota") ||
      lowerInput.includes("perro") ||
      lowerInput.includes("gato") ||
      lowerInput.includes("consulta") ||
      lowerInput.includes("motivo"))
  ) {
    return "¡Perfecto! Hemos recibido tus datos. 📝 En breves momentos un asesor se pondrá en contacto con vos para coordinar el horario. ¡Gracias por elegirnos! 🐶❤️";
  }

  return "No estoy seguro de haber entendido. 🤔 Podés preguntarme sobre nuestros servicios, horarios, ubicación o solicitar un turno.";
};
