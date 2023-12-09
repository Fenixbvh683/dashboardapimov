 export const validate = values => {
    const errors = {};

if(!values.title){
    errors.title = 'El titulo es requerido';
} 

if(!values.awards){
    errors.awards = 'Cantidad de premios es requerido';
} 

if(!values.rating){
    errors.rating = 'El rating es requerido';
} 

if(!values.release_date){
    errors.release_date = 'La fecha es requerido';
} 

if(!values.length){
    errors.length = 'La duracion es requerido';
}

if(!values.genre_id){
    errors.genre_id = 'El genero es requerido';
}

 return errors;
};