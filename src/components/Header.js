import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    const onClick = () =>{
        console.log('asdad')
    }
    return (
        <header className='header'>
            {/* <h1 style={headingStyle}>{title}</h1> */}
            <h1>{title}</h1>
            <Button color='green' text='test' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes= {
    title: PropTypes.string.isRequired
}

//css js
const headingStyle = {
    color: 'blue', 
    backgroundColor: 'black'
}

export default Header
