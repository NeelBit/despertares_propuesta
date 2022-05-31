(function() {
    'use strict';

    // esperar que todo el codigo html primero termine de cargarse
    document.addEventListener('DOMContentLoaded', function() {

        // quitar nav móvil al hacer click en enlace
        window.addEventListener("load", () => {
            const items_menu = document.querySelectorAll(".nav__enlace");
            const nav__input_check = document.querySelector(".nav__input");
            items_menu.forEach(e => {
                e.addEventListener("click", (enlace) => {
                    nav__input_check.click();
                })
            });
        });

        /* MAPA */
        /* 
        uruguay: -26.536778, -59.333794
        chile: -26.537907, -59.339275 
        */
        const map = L.map('map').setView([-26.536778, -59.333794], 16);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '© OpenStreetMap'
        }).addTo(map);

        L.marker([-26.536778, -59.333794]).addTo(map)
            .bindPopup('Uruguay 1127').openPopup();

        L.marker([-26.537907, -59.339275]).addTo(map)
            .bindPopup('Chile 631').openPopup();


        // animacion al observar elemento:
        function animacionContador() {

            const contenedorContador = document.querySelector(".counter-container");
            // registrar el intersection observer
            const observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting) {
                    const counters = document.querySelectorAll(".counter");
                    counters.forEach((counter) => {
                        counter.innerText = '0';

                        function updateCounter() {
                            const target = +counter.getAttribute('data-target');
                            const c = +counter.innerText;
                            const increment = target / 21 // 250;

                            if (c < target) {
                                counter.innerText = `${Math.ceil(c + increment)}`;
                                setTimeout(updateCounter, 60);
                            } else {
                                counter.innerText = target;
                            }
                        }
                        updateCounter();
                    });
                }
            })
            observer.observe(contenedorContador);
        }
        animacionContador();


        // fixed nav al observar prestaciones
        function fixedNavPrestaciones() {
            const sectionPrestaciones = document.querySelector("#prestaciones");
            const navMenu = document.querySelector(".nav__menu");

            // registrar el intersection observer
            const observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting) {
                    navMenu.classList.add("active-fixed-nav__menu");
                } else {
                    navMenu.classList.remove("active-fixed-nav__menu");
                }
            })
            observer.observe(sectionPrestaciones);
        }
        fixedNavPrestaciones();


        // fixed nav al observar equipo
        function fixedNavEquipo() {
            const sectionPrestaciones = document.querySelector("#nuestros_profesionales");
            const navMenu = document.querySelector(".nav__menu");

            const observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting) {
                    /* if (!navMenu.classList.contains("active-fixed-nav__menu")) {
                        console.log("if de se activa")
                        navMenu.classList.add("active-fixed-nav__menu");
                    } */
                    navMenu.classList.add("active-fixed-nav__menu");
                }
            })
            observer.observe(sectionPrestaciones);
        }
        fixedNavEquipo();

        // fixed nav al observar contacto
        function fixedNavContacto() {
            const sectionContacto = document.querySelector("#contacto");
            const navMenu = document.querySelector(".nav__menu");

            const observer = new IntersectionObserver(function(entries) {
                if (entries[0].isIntersecting) {
                    navMenu.classList.add("active-fixed-nav__menu");
                } else {
                    navMenu.classList.remove("active-fixed-nav__menu");
                }
            })
            observer.observe(sectionContacto);
        }
        fixedNavContacto();


        // slider de imagenes quienes_somos__img
        const quienesSomosImgSlide = document.querySelector("#slide_quienes_somos");
        const arrayImgsQuienesSomos = []

        for (let i = 1; i <= 7; i++) {
            arrayImgsQuienesSomos.push(`media/quienes_somos_${i}.webp`);
        }

        let contador = 1;
        setInterval(() => {
            if (contador > 7) {
                contador = 1;
            }
            quienesSomosImgSlide.setAttribute("src", `media/quienes_somos_${contador}.webp`);
            contador++;
        }, 5000)

    });

})();