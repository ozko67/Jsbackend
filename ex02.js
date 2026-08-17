// let nota1 = 7.5;
// let nota2 = 8.5;
// let media = (nota1 + nota2) / 2;
// let frequencia = 80; //em %
// let passouPorNota = media >= 7.0;
// let passouPorFrequencia = frequencia >= 80;
// let alunoAprovado = passouPorNota && passouPorFrequencia;
// console.log(`Média: ${media} | Aprovado: ${alunoAprovado}`);

const express = require('express')
const app = express();
app.get('/api/calculo-teste', (req, res) => {
    const salarioBruto = 3500;
    const inss = salarioBruto * 0.11;
    const salarioLiquido = salarioBruto - inss;
    return res.json({ 
         salarioBruto,
         inssCalculado: inss, 
         salarioLiquido,
         sucesso: true
        });
 });

 app.listen(3000 , () => {
    console.log('servidor rodando! http://localhost:3000/api/calculo-teste');
})