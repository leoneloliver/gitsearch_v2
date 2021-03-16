import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';

const Users = ({users, loading}) =>{


    if(loading){
        return <Spinner />
    }else{

        return (
            <div>

                <div style={userStyle} className="user-container">
                    {users.map(user => (
                        <UserItem key={user.id} user={user} />
                    ))}
                </div>

                {!users.length &&(
                    <div className="box-home">
                        <h3>GitHub Finder!</h3>
                        <p>React App to search githib profiles</p>
                        <p>Version: 1.0.0</p>
                     </div>
                )}
            </div>
           
        )

    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired

}

const userStyle = {
    display: 'grid',
    // gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users;