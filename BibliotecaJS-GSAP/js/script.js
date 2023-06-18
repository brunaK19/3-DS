
//mudar de escala
gsap.fromTo(".element img", { scale: 0.5 }, { scale: 1, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" });

//rotaciona a imagem
gsap.to(".image img", { rotation: 360, repeat: -1, duration: 2, ease: "power2.out" });

//faz a imagem desaparecer e reaparecer
gsap.fromTo(".fade img", { opacity: 0 }, { opacity: 1, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" });

//desloca a imagem horizontalmente
gsap.fromTo(".deslocah img", { x: -30 }, { x: 40, repeat: -1, yoyo: true, duration: 2, ease: "power2.inOut" });

//desloca a imagem verticalmente
gsap.fromTo(".deslocav img", { opacity: 0, y: -50 }, { opacity: 1, y: 0, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" });

//faz movimento de onda na imagem
gsap.to(".wave img", { x: "+=60", rotation: 10, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut", stagger: 0.2 });