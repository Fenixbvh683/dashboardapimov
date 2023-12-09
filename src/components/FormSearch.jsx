import PropType from 'prop-types'
import { useState } from "react"
import { Form } from "react-router-dom"


export const FormSearch = ({getMovies}) => {

    const [valuesForm, setvaluesForm] = useState({});

    const handleInputChange = ({target}) => {
        setvaluesForm({
            ...valuesForm,
            [target.name] : target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        getMovies(`/api/v1/movies?keyword=${valuesForm.keyword }`)
    }

  return (
    <Form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
        <input type="text" name="keyword" className="form-control" onChange={handleInputChange}/>
        <button className="btn btn-outline-primary input-group-text" type="submit"><i className="fa fa-search"></i></button>
        </div>
    </Form>
  )
}

FormSearch.propTypes = {
    getMovies : PropType.func
}