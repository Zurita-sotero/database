const usersModel = {
    getAll:`
            SELECT 
                * 
            FROM 
                Users`,

    getByID : `
            SELECT
                *
            FROM
                Users
            WHERE
                id = ?
            `,
    
    addRow: `
            INSERT INTO
                Users (
                    username,
                    email,
                    password,
                    name,
                    lastname,
                    phone_number,
                    role_id,
                    is_active
                ) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `,
    
    getByUsername: `
            SELECT 
                id 
            FROM
                Users
            WHERE
                username = ?
    `,

    getByEmail: `
            SELECT 
                id
            FROM
                Users
            WHERE
                email = ?
    `, 

    updateUser: `
         UPDATE Users
         SET 
             username = ?,
             email = ?,
             password = ?,
             name = ?,
             lastname = ?,
             phone_number = ?,
             is_active = ?
         WHERE
             id = ?
  `,
updateRow: `
         PENDIENTE

`,
deleteRow:`
        UPDATE
            Users
            SET
            is_active = 0
            WHERE
            ID =?
`
}

module.exports = usersModel;