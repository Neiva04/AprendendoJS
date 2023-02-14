/* API conectando com Banco MySQL */
import { DataTypes, Sequelize } from "sequelize";
const sequelize = new Sequelize('teste', 'root', 'OOIOI', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Sucesso!');
}).catch(function(erro){
    console.log('Erro: '+erro);
})
//Estabelecemos a conexão com o banco
const NovaTB = sequelize.define('Tb_nova',{
    ID_nova:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING
    }
})

const NovaTB2 = sequelize.define('Tb_nova_2',{//criar uma nova tabela
    numero:{//atributos da tabela
        type: DataTypes.INTEGER,//tipo do atributo
        allowNull: false// not null
    },// Sequelize ja cria um id como chave primaria e um log com timestamp por default
    desc:{
        type: DataTypes.STRING
    }
})

NovaTB2.create({
    numero: 91,
    desc: 'Criciuma'
})
//NovaTB2.sync({force: true});