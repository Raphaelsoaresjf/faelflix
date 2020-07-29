import React, {useState} from 'react';
import TemplateBase from '../../../components/TemplateBase';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000000',
    };

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);
    

    function handleChange(e) {
        setValue(
            e.target.getAttribute('name'), 
            e.target.value
        );
    }
   
    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]: valor,
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        setCategorias([...categorias, values]);
        setValues(valoresIniciais);
    }

    return (
        <TemplateBase>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={handleSubmit}>

                <FormField 
                    label="Nome da Categoria"
                    value={values.nome}
                    onChange={handleChange}
                    type="text"
                    name="nome"
                />
                <div>
                    <label>
                        Descrição: 
                        <textarea type="text" 
                        name="descricao"
                        value={values.descricao}
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <FormField 
                    label="Cor"
                    value={values.cor}
                    onChange={handleChange}
                    type="color"
                    name="cor"
                />
                <button>
                    Cadastrar
                </button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Home
            </Link>
        </TemplateBase>
    )
}

export default CadastroCategoria;