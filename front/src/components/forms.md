



                                                            FORMS 





Cuando hacemos submit al form lo envia a un servidor y el servidor interactua con la base de datos

Vamos a crear un estado que corresponda al formulario

  {
    usuario:
    email:
    password:
    r-password:
  }

  para que en ese estado tengamos control de lo que el usuario esta escribiendo
  necesitamos validar que lo que escriba el usuario este bien y para eso necesitamos crear un estado

  Voy a hacer que el input tenga de valor al estado, quedan doblemente enlazados

  Controlled

      El valor del input tiene un bind al estado del componente

      Recomendado por los creadores de React

      Sigue los patrones de React

      Validacion instantanea de campo (en tiempo real)
      Recuperacion del valor(on submit).
      Validacion on submit
      Deshabilitacion condicional



 Como escribir bien los formularios

    todo input debe tener un label

    <form>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type='text' name='username'/>   // esto debe modificar el estado username
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='text' name='password'/>   // esto debe modificar el estado password
      </div>
    </form>


Ahora guardamos esto en un estado

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


  Pero esto tiene un problema, y es que si tuvieramos mas inputs tendriamos que tener muchos handlers y muchos estados

  En lugar de tenmer un estado apra cada input, tengamos un estado para todo el formulario,  [form, setForm] = useState({
                                                                                                username:'',
                                                                                                password:''
                                                                                              });

  const handleChange = (event) => {
    if(event.target.name === 'username'){
      setForm({...form, username: event.target.value});
    }
    if(event.target.name === 'password'){
      setForm({...form, password: event.target.value});       pero lo mismo, que pasa si tengo muchos? demasiados ifs, lo solucionamos abajo
    }

          const property = event.target.name 
          const value = event.target.value

          setForm({...form, [property]: value})       Es muy importante que la propiedad del estado y el name del input sean iguales para poder usar
                                                      el querido [property] y que coincidan

                    validate(form, errors, setErrors);



      const submitHandler = () => {
        alert('Login exitoso')          pero esto solo asi no valida y recarga la pagina, pierdo mis estados, pierdo todo
      }

      const submitHandler = (event) => {
        event.preventDefault();
        alert('Login exitoso')
      }


  }

        <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input 
            type='text' 
            name='username' 
            value={form.username} 
            onChange={handleChange}/> 
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <input 
            type='text' 
            name='password' 
            value={form.password} 
            onChange={handleChange}/>
      </div>
    </form>


Como hacemos para validar que el password este bien

const validate = (form, setErrors, errors) => {
    if(!form.email) setErrors({...errors, email: 'Email vacio'})
};

necesitamos otro estado para validar que el email, password, etc, no tengan errores

      const [errors, setErrors] = useState({
        email: '',
        password: ''
      });


Solucion para que el estado no muestre inmediatamente el valor  ('Email vacio')

El estado nuevo es   setForm({...form, [property]:value});

Entonces al validador le pasamos validate({...form, [property]: value }, setErrors, errors)




Expresiones regulares (regex) son expresiones que nos permiten validar cosas, es decir, nos dan un formato y nosotros vemos si lo que tenemos en
un valor se ajusta al formato

No vamos a escribirlas, vamos a guardarlas

'Regex para email en javascript'

  if( * expresion regular.test(form.email) *) setErrors({...errors, email: ''});
  else setErrors({...errors, email: 'email invalido'})


  Y hasta aca esta todo bien pero si borro todo me dice email invalido y no email vacio

  Solo deberiamos dar vuelta los ifs, que se fije si tengo algo escrito a lo ultimo (plot twist tambien sale mal)

  <span>{errors.email}</span> para mostrar el mensajito si el email esta mal


<Card key={id} > le asignamos id a la key porque es el unico valor unico en cada card

Resumen

Formularios: 
Existen dos tipos de formularios: los controlados y los no controlados.
Los formularios controlados presentan numerosas ventajas para la gestion de informacion de un usuario y su posterior uso.

Key:
Es un atributo que le permite a react diferenciar elementos de una misma lista