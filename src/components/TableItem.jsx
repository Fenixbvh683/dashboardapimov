import PropTypes from 'prop-types'

export const TableItem = ({movie : {id, length, title, awards, rating, genre}, handleEditMovie, handleDeleteMovie}) => {
  return (
    <tr>
          <td>{title}</td>
          <td>{length} min.</td>
          <td>{rating}</td>
          <td>{genre?.name}</td>
          <td>{awards}</td>
          <td>
            <div className='d-flex'>
              <button className='btn btn-sm btn-outline-primary mr-2'><i className="fa-solid fa-file-circle-plus"></i></button>
                <button className='btn btn-sm btn-outline-success mr-2' onClick={() => handleEditMovie(id)}><i className="fa-regular fa-pen-to-square"></i></button>
                <button className='btn btn-sm btn-outline-danger' onClick={() => handleDeleteMovie(id)}><i className="fa-solid fa-trash-can"></i></button>
            </div>
          </td>
        </tr>
  )
};

TableItem.propTypes = {
    movie : PropTypes.object,
    handleEditMovie : PropTypes.func,
    handleDeleteMovie : PropTypes.func

}

TableItem.defaultProps = {
    genre : 'Sin genero asignado'
}
