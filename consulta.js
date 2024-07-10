const pool = require('./db');

async function getUserNameById(id) {
    try {
        const query = 'SELECT nome FROM users WHERE id = $1';
        const result = await pool.query(query, [id]);
        if (result.rows.length > 0) {
            return result.rows[0].nome; 
        } else {
            return 'Usuário não encontrado';
        }
    } catch (error) {
        console.error('Erro ao buscar nome do usuário:', error);
        throw error;
    }
}

// Exemplo de uso
const userId = 1; // ID para buscar
getUserNameById(userId)
    .then(name => console.log('Nome do usuário:', name))
    .catch(err => console.error('Erro ao buscar nome do usuário:', err));


