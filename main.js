

//Sistema de gestión académica
let promedio;

class Alumno{
    constructor(nombre, apellido, edad, anioDeCursado, carrera, notaParcial12y3, aprobar, promocionar){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.anioDeCursado=anioDeCursado;
        this.carrera=carrera;
        this.notaParcial12y3=notaParcial12y3;
        this.aprobar=false;
        this.promocionar=false;
    }
    
    cargarNotas() {
        let NotasACargar = 3-this.notaParcial12y3.length;
        if (NotasACargar > 0) {
            for (let i = 0; i < NotasACargar; i++) {
                const nota = parseFloat(prompt("Ingrese nota a cargar del alumno "+this.nombre+" "+this.apellido));
                if(nota>0&&nota<=10){
                    this.notaParcial12y3.push(nota);
                }
            }
        } 
        else {
            console.log("Ya se han cargado todas las notas permitidas.");
        }
    }
    aprobado(){
        promedio = (this.notaParcial12y3[0] + this.notaParcial12y3[1] + this.notaParcial12y3[2]) / this.notaParcial12y3.length;
        if(promedio>=6){
            this.aprobar=true;        
            // console.log("El alumno "+this.nombre+" "+this.apellido+" Aprobó con "+promedio)
        }
        if(promedio>=7){
            this.promocionar=true; 
            // console.log("El alumno "+this.nombre+" "+this.apellido+" Promocionó con "+promedio)
        }
    }
}

const Alumno01 = new Alumno("Juan","Martinez", 22, 2, "Ingeniería en Sistemas", [6, 8, 7])
const Alumno02 = new Alumno("Mariano","Pelizari", 24, 3, "Tecnicatura en programación", [9])
const Alumno03 = new Alumno("Carlos","Nuñez", 31, 4, "Ingeniería Mecánica", [])
const Alumno04 = new Alumno("Marcelo","Orozco", 19, 1, "Ingeniería en Sistemas", [8, 6])
const Alumno05 = new Alumno("Hernan","Laria", 23, 2, "Tecnicatura en programación", [7])
const Alumno06 = new Alumno("Matias","Taranto", 22, 3, "Licenciatura en Biología", [])

const arregloDeAlumnos = [Alumno01, Alumno02, Alumno03, Alumno04, Alumno05, Alumno06];


let opcion;

do {
    opcion = parseInt(prompt("Ingrese opción:\n1-Listar alumnos\n2-Cargar notas\n3-Actualizar estado de aprobación\n4-Filtrar alumnos\n5-Salir"));

    switch (opcion) {
        case 1:
            console.log(arregloDeAlumnos);
            break;
        case 2:
            arregloDeAlumnos.forEach(alumno => alumno.cargarNotas());
            break;
        case 3:
            arregloDeAlumnos.forEach(alumno => alumno.aprobado());
            break;
        case 4:
            let opcion4 = parseInt(prompt("Seleccione filtro:\n1-Ingeniería\n2-Tecnicatura\n3-Licenciatura"));
            if (opcion4 === 1) {
                const alumnosDeIngeneria = arregloDeAlumnos.filter((el) => el.carrera.includes("Ingeniería"));
                console.log(alumnosDeIngeneria);
            } else if (opcion4 === 2) {
                const alumnosDeTecnicatura = arregloDeAlumnos.filter((el) => el.carrera.includes("Tecnicatura"));
                console.log(alumnosDeTecnicatura);
            } else if (opcion4 === 3) {
                const alumnosDeLicenciatura = arregloDeAlumnos.filter((el) => el.carrera.includes("Licenciatura"));
                console.log(alumnosDeLicenciatura);
            } else {
                console.log("Ingrese una opción válida");
            }
            break;
        case 5:
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Ingrese una opción válida");
            break;
    }
} while (opcion !== 5);
