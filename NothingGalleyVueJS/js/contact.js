const PaginaContato = {
  template: `
    <div class="container mt-4">
      <h1 class="text-center text-light">Contato</h1>
      <p class="text-center text-light">Entre em contato conosco através do formulário abaixo:</p>

      <div class="row justify-content-center">
        <div class="col-md-6">
          <form @submit.prevent="enviarFormulario">
            <div class="form-group">
              <label for="nome" class="text-light">Seu Nome:</label>
              <input type="text" id="nome" name="nome" class="form-control" placeholder="Digite seu nome" v-model="nome">
            </div>

            <div class="form-group">
              <label for="mensagem" class="text-light">Mensagem:</label>
              <textarea id="mensagem" name="mensagem" class="form-control" rows="4" placeholder="Digite sua mensagem" v-model="mensagem"></textarea>
            </div>

            <div class="text-center">
              <button class="btn btn-primary mt-3" type="submit">Enviar</button>
            </div>
          </form>
        </div>
      </div>

      <hr class="my-4">

      <h2 class="text-center text-light">GITHUB:</h2>
      <p class="text-center">
        <a href="https://github.com/Matheuspz" target="_blank" class="btn btn-link text-light">Matheus Pesch Zenere</a>
      </p>
      <p class="text-center">
        <a href="https://github.com/Aslokn1a" target="_blank" class="btn btn-link text-light">Thiago Antonio Baierski</a>
      </p>
      <p class="text-center">
        <a href="https://github.com/JonasVII" target="_blank" class="btn btn-link text-light">Guilherme Rafael de Jesus</a>
      </p>
    </div>
  `,
  data() {
    return {
      nome: '',
      mensagem: '',
      submitted: false // Variável para verificar se o formulário foi submetido
    };
  },
  methods: {
    enviarFormulario() {
      this.submitted = true; // Marca que o formulário foi enviado
      if (this.nome && this.mensagem) {
        alert('Mensagem enviada!');
        // Limpa os campos após o envio
        this.nome = '';
        this.mensagem = '';
      } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
      }
    }
  }
};
