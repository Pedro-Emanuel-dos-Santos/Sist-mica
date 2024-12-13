// Estrutura inicial do backend usando Node.js para o aplicativo

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulação de dados de treinamento
const trainingModules = [
  { id: 1, title: 'Introdução à Empresa', content: 'Conteúdo do módulo 1' },
  { id: 2, title: 'Políticas da Empresa', content: 'Conteúdo do módulo 2' },
  { id: 3, title: 'Ferramentas e Sistemas', content: 'Conteúdo do módulo 3' },
];

// Rota: Obter módulos de treinamento
app.get('/api/training-modules', (req, res) => {
  res.json(trainingModules);
});

// Rota: Enviar chamados para o TI
app.post('/api/submit-ticket', async (req, res) => {
  const { subject, description, urgency } = req.body;

  if (!subject || !description || !urgency) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  // Configuração do transporte de e-mail
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'seuemail@gmail.com', // Substituir pelo e-mail real
      pass: 'suasenha',         // Substituir pela senha real
    },
  });

  const mailOptions = {
    from: 'seuemail@gmail.com',
    to: 'emaildoti@empresa.com', // Substituir pelo e-mail do setor de TI
    subject: `Chamado TI: ${subject}`,
    text: `Descrição: ${description}\nUrgência: ${urgency}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Chamado enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ message: 'Erro ao enviar chamado. Tente novamente mais tarde.' });
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
