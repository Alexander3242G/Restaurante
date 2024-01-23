class Plato{

    constructor(nombre, descripcion, puntuacion, precio = 0){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.puntuacion = puntuacion;
        this.precio = precio;
    }
}


class Seccion{
    constructor(){
        this.secciones={};
    }

    agregarSeccion(nombreSeccion, ConjuntoPlatos){
        this.secciones[nombreSeccion] = ConjuntoPlatos;
    }

    agregarPlato(nombreSeccion, Plato){
        if(!this.secciones[nombreSeccion]){
            this.secciones[nombreSeccion] = Plato;
        }
    }

    quitarPlato(nombreSeccion, Plato){
        let section = this.secciones[nombreSeccion];
        if(section){
            let indicePlato = section.indexof(Plato);
            if(indicePlato !== -1){
                section.splice(indicePlato,1);
            }
        }
    }
}