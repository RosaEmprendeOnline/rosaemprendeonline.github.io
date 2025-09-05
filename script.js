document.addEventListener('DOMContentLoaded', () => {

    const curso = {
        nombre: "Curso Oficial de Blacks University",
        descripcion: "Aprende a crear, crecer y monetizar de la mano de expertos.",
        descripcionLarga: "Beneficios que tendrás de por vida en Blacks University 🌿 Mentorías en vivo ilimitadas (lunes a viernes). 🌿 Grabaciones de todas las mentorías disponibles siempre. 🌿 Acceso completo a la plataforma digital de Blacks University. 🌿 Franquicia educativa para ganar $70 por cada venta. 🌿 Comisiones del 50% en ventas a través de Hotmart. 🌿 Comunidad activa de usuarios para aprender y crecer juntos. 🌿 11,500 productos digitales listos para vender (hasta 80% de comisión). 🌿 Acceso a los contenidos de todos los productos para elegir los mejores. ¡Todo esto es de por vida y con acceso ilimitado!",
        imagen: "foto-curso.jpg",
        hotmartLink: "https://go.hotmart.com/F101258814Y?ap=c5cf"
    };

    const cursosContainer = document.getElementById('cursos-container');

    const cursoCard = document.createElement('div');
    cursoCard.classList.add('curso-card');

   <!-- <script src="script.js" defer></script> -->
        <img src="${curso.imagen}" alt="Imagen del curso" class="curso-img">
        <h3>${curso.nombre}</h3>
        <p>${curso.descripcion}</p>
        <p style="font-size: 0.8em; color: #555;">${curso.descripcionLarga}</p>
        <a href="${curso.hotmartLink}" target="_blank" class="buy-button">Comprar ahora</a>
    `;

    cursosContainer.appendChild(cursoCard);


});

