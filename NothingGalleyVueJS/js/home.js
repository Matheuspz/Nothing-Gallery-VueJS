const PaginaHome = {
  template: `
    <div>
      <h1>Bem Vindo a Nothing Gallery</h1>
      <p>Explore nossa coleção de quadros.</p>

      <div class="row">
        <div class="col-12 col-sm-6 col-md-4" v-for="produto in produtos" :key="produto.id">
          <div class="card product-card">
            <img :src="produto.imagem" class="card-img-top" :alt="produto.nome">
            <div class="card-body">
              <h5 class="card-title">{{ produto.nome }}</h5>
              <p class="card-text">Por: {{ produto.autor }}</p> <!-- Nome do autor -->
              <p class="card-text">R$ {{ produto.preco.toFixed(2) }}</p>
              <button class="btn btn-primary" @click="adicionarAoCarrinho(produto)">Adicionar ao Carrinho</button>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <h3>Carrinho de Compras</h3>
      <div v-if="carrinho.length > 0">
        <ul class="list-group">
          <li class="list-group-item" v-for="(item, index) in carrinho" :key="item.id">
            {{ item.nome }} - R$ {{ item.preco.toFixed(2) }}
            <button class="btn btn-danger btn-sm float-right" @click="removerDoCarrinho(index)">Remover</button>
          </li>
        </ul>
        <p>Total: R$ {{ calcularTotal().toFixed(2) }}</p>
      </div>
      <div v-else>
        <p>Seu carrinho está vazio!</p>
      </div>
    </div>
  `,
  data() {
    return {
      produtos: [
        { id: 1, nome: "Brilliant Sky", autor: "Johnny Silverhand ", preco: 129.99, imagem: "img/Brilliant_sky.jpg" },
        { id: 2, nome: "Lighting City", autor: "Thiago Antonio", preco: 149.99, imagem: "img/Lighting_city.jpg" },
        { id: 3, nome: "Way of River", autor: "Rodrigo dos Santos", preco: 99.99, imagem: "img/Way_of_river.jpg" }
      ],
      carrinho: []
    };
  },
  methods: {
    adicionarAoCarrinho(produto) {
      this.carrinho.push(produto);
    },
    removerDoCarrinho(index) {
      this.carrinho.splice(index, 1);
    },
    calcularTotal() {
      return this.carrinho.reduce((total, item) => total + item.preco, 0);
    }
  }
};


const home = Vue.createApp({
  data() {
    return {
      paginaAtual: 'home', // Página inicial
      componentes: {
        home: PaginaHome, // carrega o template home
        sobre: PaginaSobre, // Carrega o componente "Sobre"
        contato: PaginaContato // Carrega o componente "Contato"
      }
    };
  },
  methods: {
    trocaPagina(paginaAtual) {
      this.paginaAtual = paginaAtual;
    }
  },
  template: `
    <div class="container">
      <!-- Navbar com tema escuro -->
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Nothing Gallery</a>
        <ul class="nav">
          <li class="nav-item">
            <button class="btn btn-link text-light" @click="trocaPagina('home')">Página Inicial</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link text-light" @click="trocaPagina('sobre')">Sobre Nós</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-link text-light" @click="trocaPagina('contato')">Contato</button>
          </li>
        </ul>
      </nav>

      <!-- Carrega o componente correspondente -->
      <section>
        <component :is="componentes[paginaAtual]"></component>
      </section>
    </div>
  `
});

home.mount('#app');
